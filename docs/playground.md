<script setup>
import { defineAsyncComponent } from 'vue';
import { inBrowser } from 'vitepress';

const Playground = inBrowser
  ? defineAsyncComponent(() => import('./.vitepress/components/Playground.vue'))
  : () => null;
</script>

# Playground

<Playground />
