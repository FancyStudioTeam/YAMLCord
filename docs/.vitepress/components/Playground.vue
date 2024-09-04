<template>
  <div v-if="errorReference" class="danger custom-block">
    <p class="custom-block-title">Error</p>
    <p>{{ errorReference }}</p>
  </div>
  <div id="editor" />
</template>

<style>
#editor {
  height: 500px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { shikiToMonaco } from "@shikijs/monaco";
import * as monaco from "monaco-editor";
// @ts-expect-error
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-expect-error
import YAMLWorker from "monaco-yaml/yaml.worker?worker";
import { createHighlighter } from "shiki";
import { onMounted, ref } from "vue";
import { createSequences } from "../../../src/util/functions/createSequences";

const errorReference = ref<string | null>(null);

onMounted(async () => {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      switch (label) {
        case "yaml": {
          return new YAMLWorker();
        }
        default: {
          return new EditorWorker();
        }
      }
    },
  };

  const editorContainer = document.getElementById("editor");

  if (editorContainer) {
    const highlighter = await createHighlighter({
      themes: ["vitesse-dark"],
      langs: ["yaml"],
    });

    monaco.languages.register({
      id: "yaml",
    });

    shikiToMonaco(highlighter, monaco);

    const playground = monaco.editor.create(editorContainer, {
      fontFamily: "JetBrains Mono",
      fontLigatures: false,
      fontSize: 16,
      language: "yaml",
      lineNumbers: "off",
      minimap: {
        enabled: false,
      },
      padding: {
        bottom: 20,
        top: 20,
      },
      scrollbar: {
        vertical: "auto",
      },
      tabSize: 2,
      theme: "vitesse-dark",
    });

    playground.onDidChangeModelContent(async () => {
      monaco.editor.remeasureFonts();

      await createSequences(playground.getValue())
        .then(async () => (errorReference.value = null))
        .catch(async (error) => {
          if ("code" in error) {
            errorReference.value = error.message;
          }
        });
    });
  }
});
</script>
