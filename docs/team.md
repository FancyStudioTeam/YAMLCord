---
editLink: false
---

<!-- markdownlint-disable -->
<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = {
  developers: [
    {
      avatar: "https://www.github.com/LonelyDeathVGX.png",
      links: [
        {
          icon: "github",
          link: "https://github.com/LonelyDeathVGX",
        },
      ],
      name: "LonelyDeathVGX",
      title: "Creator and Lead Developer",
    },
    {
      avatar: "https://www.github.com/hozhai.png",
      links: [
        {
          icon: "github",
          link: "https://github.com/hozhai",
        },
      ],
      name: "Zhai",
      title: "Developer",
    },
  ],
};
</script>
<!-- markdownlint-restore -->

# Our Team

Thanks to all these people who have made YAMLCord possible!

## Developers

<!-- markdownlint-disable -->
<VPTeamMembers size="small" :members="members.developers" />
<!-- markdownlint-restore -->
