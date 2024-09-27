<template>
  <div v-if="errorReference" class="danger custom-block">
    <p class="custom-block-title">Error</p>
    <p>{{ errorReference }}</p>
  </div>
  <a id="button" @click="exportYAML">Export</a>
  <div id="editor" />
</template>

<style>
#button {
  width: 100%;
  text-align: center;
  display: block;
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  margin-bottom: 16px;
  text-decoration: none;
  cursor: pointer;
}

#editor {
  height: 500px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { shikiToMonaco } from "@shikijs/monaco";
// biome-ignore lint/style/noNamespaceImport:
import * as monaco from "monaco-editor";
// @ts-expect-error
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-expect-error
import YAMLWorker from "monaco-yaml/yaml.worker?worker";
import { createHighlighter } from "shiki";
import { onMounted, ref } from "vue";
// import { YAMLCord } from "yamlcord";

const errorReference = ref<string | null>(null);
let playground: monaco.editor.IStandaloneCodeEditor | null = null;

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

  // const yamlCord = new YAMLCord();
  const editorContainer = document.getElementById("editor");

  if (editorContainer) {
    const highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["yaml"],
    });

    monaco.languages.register({
      id: "yaml",
    });

    shikiToMonaco(highlighter, monaco);

    playground = monaco.editor.create(editorContainer, {
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

    /*playground.onDidChangeModelContent(async () => {
      monaco.editor.remeasureFonts();

      if (playground) {
        await yamlCord.createSequencesFromData(playground.getValue())
          .then(async () => (errorReference.value = null))
          .catch(async (error) => {
            if (error.name === "YAMLException") {
              errorReference.value = error.message;
            }
          });
      }
    });*/
  }
});

const exportYAML = () => {
  if (playground) {
    const content = playground.getValue();
    const blob = new Blob([content], {
      type: "text/yaml",
    });
    const link = document.getElementsByTagName("a")[0];

    if (link) {
      link.href = URL.createObjectURL(blob);
      link.download = "exported-file.yaml";
      link.click();
    }
  }
};
</script>
