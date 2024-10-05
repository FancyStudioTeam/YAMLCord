---
editLink: false
layout: home
---

<!-- markdownlint-disable -->
<script setup>
import { defineAsyncComponent } from 'vue';
import { inBrowser } from 'vitepress';

const Playground = inBrowser
  ? defineAsyncComponent(() => import('./.vitepress/components/Playground.vue'))
  : () => null;
</script>
<!-- markdownlint-restore -->

:::info Interactive Editor
This is an interactive editor where you can write YAMLCord syntax and export it as a file to load into a bot.
:::

:::warning Under Construction
This playground is currently under construction and is not yet ready for use.
:::

<!-- markdownlint-disable -->
<Playground />
<!-- markdownlint-restore -->