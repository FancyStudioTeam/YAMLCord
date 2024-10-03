<template>
  <VPButton :text="'Export YAML File'" style="margin-bottom: 16px; width: 100%;" @click="_exportYAML" />
  <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); max-height: 500px; height: 100%; gap: 16px;">
    <div id="editor" style="height: 500px; width: 100%; border-radius: 8px; overflow: hidden; grid-column: span 2 / span 2;" />
    <div style="background-color: var(--vp-c-bg-alt); height: 100%; width: 100%; border-radius: 8px; overflow: hidden; padding: 16px;">
      {{ errorReference }}
    </div>
  </div>
</template>

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
import { YAMLCord } from "yamlcord";

const yamlCord = new YAMLCord();
const errorReference = ref<MaybeNullish<string>>(null);
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

    playground.onDidChangeModelContent(async () => {
      monaco.editor.remeasureFonts();

      if (playground) {
        await yamlCord
          .createSequencesFromData(playground.getValue())
          .then(async () => (errorReference.value = null))
          .catch((error) => (errorReference.value = error.message));
      }
    });
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

type MaybeNullish<T> = T | null | undefined;
</script>
