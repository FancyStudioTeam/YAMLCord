---
editLink: false
title: Our Team
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
  ],
};
</script>
<!-- markdownlint-restore -->

<!-- markdownlint-disable MD025 -->

# {{ $frontmatter.title }}

<!-- markdownlint-enable MD025 -->

Thanks to all these people who have made FancyScript possible!

## Developers

<!-- markdownlint-disable -->
<VPTeamMembers size="small" :members="members.developers" />
<!-- markdownlint-restore -->
