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
    title: "Creator and Lead Developer",
  },
]
</script>
<!-- markdownlint-restore -->

# Our Team

Thanks to all these people who have made FancyScript possible!

<!-- markdownlint-disable -->
<VPTeamMembers size="small" :members="members" />
<!-- markdownlint-restore -->
