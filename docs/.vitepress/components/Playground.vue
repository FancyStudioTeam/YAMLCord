<template>
  <div v-if="_errorReference" class="danger custom-block">
    <p class="custom-block-title">Error</p>
    <p>{{ _errorReference }}</p>
  </div>
  <VPButton :text="'Export'" style="margin-bottom: 16px; width: 100%;" @click="_exportYAML" />
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
// biome-ignore lint/style/noNamespaceImport:
import * as monaco from "monaco-editor";
// @ts-expect-error
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-expect-error
import YAMLWorker from "monaco-yaml/yaml.worker?worker";
// biome-ignore lint/correctness/noUnusedImports:
import { VPButton } from "vitepress/theme";
import { onMounted, ref } from "vue";
// import { YAMLCord } from "yamlcord";

const _errorReference = ref<string | null>(null);
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
      theme: "vs-dark",
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

const _exportYAML = () => {
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
