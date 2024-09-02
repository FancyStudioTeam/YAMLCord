<template>
  <div id="editor" />
</template>

<style>
#editor {
  height: 500px;
  width: 100%;
}
</style>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { configureMonacoYaml } from "monaco-yaml";
import { onMounted } from "vue";

onMounted(() => {
  window.MonacoEnvironment = {
    getWorker(_, label) {
      switch (label) {
        case "editorWorkerService": {
          return new Worker(new URL("monaco-editor/esm/vs/editor/editor.worker?worker", import.meta.url));
        }
        case "yaml": {
          return new Worker(new URL("monaco-yaml/yaml.worker", import.meta.url));
        }
        default: {
          throw new Error(`Unknown worker: ${label}`);
        }
      }
    },
  };

  configureMonacoYaml(monaco);

  const editorContainer = document.getElementById("editor");

  if (editorContainer) {
    monaco.editor.create(editorContainer, {
      language: "yaml",
      theme: "vs-dark",
      fontSize: 16,
      // fontFamily: "JetBrains Mono Variable",
      padding: {
        top: 25,
        bottom: 25,
      },
      minimap: {
        enabled: false,
      },
      tabSize: 2,
    });
  }
});
</script>
