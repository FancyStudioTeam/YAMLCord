<!-- markdownlint-disable -->
<div align="center">
  <picture>
    <source srcset="https://yamlcord.pages.dev/banners/Dark.png" media="(prefers-color-scheme: dark)">
    <img src="https://yamlcord.pages.dev/banners/Light.png">
  </picture>

[![Version][VersionBadgeURL]][NPMURL]
[![Downloads][DownloadsBadgeURL]][NPMURL]
[![Stars][StarsBadgeURL]][NPMURL]
[![Support][SupportBadgeURL]][SupportServerURL]

</div>
<!-- markdownlint-restore -->

---

# YAMLCord

YAMLCord is an easy-to-use syntax for creating custom actions for Discord bots using YAML.

## 🚀 Example

```yml
sequences:
  - if: "[message.content] eq '!hi'"
    then:
      - create_message: "Hello!"
      - add_reaction: "👋"
```

## 📄 License

[YAMLCord][YAMLCordRepositoryURL] © 2024 by [FancyStudio][FancyStudioGitHubURL] is licensed under [CC BY-SA 4.0][CCBYSAURL].

## 💻 Security

If you believe you have found a security vulnerability, please **DO NOT make a public issue**, instead, go to our [Support Server][SupportServerURL] and contact the developers privately.

## 🎏 Credits

The logo for this project uses an icon from [Lucide.dev][LucideURL], which is licensed under [ISC][ISCURL].

## 💖 Contributors

Thanks to all these people who have made YAMLCord possible!

[![All Contributors][ContributorsImageURL]][ContributorsURL]

[CCBYSAURL]: https://creativecommons.org/licenses/by-sa/4.0/
[ContributorsImageURL]: https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20
[ContributorsURL]: https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors
[DownloadsBadgeURL]: https://img.shields.io/npm/dt/yamlcord?style=for-the-badge&color=4cb699&label=Downloads&logo=npm&logoColor=white
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[ISCURL]: https://opensource.org/licenses/ISC
[LucideURL]: https://lucide.dev
[NPMURL]: https://www.npmjs.com/package/yamlcord
[StarsBadgeURL]: https://img.shields.io/github/stars/FancyStudioTeam/YAMLCord?style=for-the-badge&color=4cb699&label=Stars&logo=github&logoColor=white
[SupportBadgeURL]: https://img.shields.io/badge/Support-Support?style=for-the-badge&color=4cb699&label=Discord&logo=discord&logoColor=white
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[VersionBadgeURL]: https://img.shields.io/npm/v/yamlcord?style=for-the-badge&color=4cb699&label=Version&logo=npm&logoColor=white
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
