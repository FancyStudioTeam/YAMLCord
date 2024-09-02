<template>
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
import * as monaco from "monaco-editor";
// @ts-expect-error
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-expect-error
import YAMLWorker from "monaco-yaml/yaml.worker?worker";
import { onMounted } from "vue";
import { createSequences } from "../../../src/util/functions/createSequences";

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
    const playground = monaco.editor.create(editorContainer, {
      fontFamily: "JetBrains Mono",
      fontLigatures: false,
      fontSize: 18,
      language: "yaml",
      lineNumbers: "off",
      minimap: {
        enabled: false,
      },
      padding: {
        bottom: 25,
        top: 25,
      },
      scrollbar: {
        vertical: "auto",
      },
      tabSize: 2,
      theme: "vs-dark",
    });

    playground.onDidChangeModelContent(async () => {
      monaco.editor.remeasureFonts();

      const sequences = await createSequences(playground.getValue());

      console.log(playground.getValue());
      console.log(sequences);
    });
  }
});
</script>
