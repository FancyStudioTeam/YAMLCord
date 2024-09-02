---
editLink: false
---

<!-- markdownlint-disable -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: "https://www.github.com/LonelyDeathVGX.png",
    links: [
      {
        icon: 'github',
        link: 'https://github.com/LonelyDeathVGX'
      }
    ],
    name: "LonelyDeathVGX",
    title: "Creador y Desarrollador Principal",
  },
]
</script>
<!-- markdownlint-restore -->

# Nuestro Equipo

¡Gracias a todas estas personas que han hecho posible FancyScript!

<!-- markdownlint-disable -->
<VPTeamMembers size="small" :members="members" />
<!-- markdownlint-restore -->
