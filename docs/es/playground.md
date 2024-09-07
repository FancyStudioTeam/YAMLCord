---
editLink: false
layout: home
---

<!-- markdownlint-disable -->
<script setup>
import { defineAsyncComponent } from 'vue';
import { inBrowser } from 'vitepress';

const Playground = inBrowser
  ? defineAsyncComponent(() => import('../.vitepress/components/Playground.vue'))
  : () => null;
</script>
<!-- markdownlint-restore -->

:::info Editor interactivo
Este es un editor interactivo donde puedes escribir la sintaxis de YAMLCord y exportarlo como un archivo para cargarlo en un bot.
:::

<!-- markdownlint-disable -->
<Playground />
<!-- markdownlint-restore -->
