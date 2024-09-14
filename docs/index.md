<!-- markdownlint-disable -->
<div align="center">
  <img src="https://yamlcord.pages.dev/banners/Light.png#light" />
  <img src="https://yamlcord.pages.dev/banners/Dark.png#dark" />
  <p>YAMLCord is an easy-to-use syntax for creating custom actions for Discord bots using YAML</p>
  <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
    <a url="https://www.npmjs.com/package/yamlcord">
      <img src="https://img.shields.io/npm/v/yamlcord?style=for-the-badge&color=5865f2&label=Version&logo=npm&logoColor=white">
    </a>
    <a url="https://www.npmjs.com/package/yamlcord">
      <img src="https://img.shields.io/npm/dt/yamlcord?style=for-the-badge&color=5865f2&label=Downloads&logo=npm&logoColor=white">
    </a>
    <a url="https://github.com/FancyStudioTeam/YAMLCord">
      <img src="https://img.shields.io/github/stars/FancyStudioTeam/YAMLCord?style=for-the-badge&color=5865f2&label=Stars&logo=github&logoColor=white">
    </a>
    <a url="https://discord.gg/yWjeDA6ewJ">
      <img src="https://img.shields.io/badge/Support-Support?style=for-the-badge&color=5865f2&label=Discord&logo=discord&logoColor=white">
    </a>
  </div>
</div>
<!-- markdownlint-restore -->

---

## Example

```yml
sequences:
  - if: "[message.content] eq '!hi'"
    then:
      - create_message: "Hello!"
      - add_reaction: "👋"
```

## License

[YAMLCord][YAMLCordRepositoryURL] © 2024 by [FancyStudio][FancyStudioGitHubURL] is licensed under [CC BY-SA 4.0][CCBYSALicenseURL].

## Security

If you believe you have found a security vulnerability, please **DO NOT make a public issue**, instead, go to our [Support Server][SupportServerURL] and contact the developers privately.

## Contributors

Thanks to all these people who have made YAMLCord possible!

[![All Contributors][ContributorsImageURL]][ContributorsURL]

[CCBYSALicenseURL]: https://creativecommons.org/licenses/by-sa/4.0/
[ContributorsImageURL]: https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20
[ContributorsURL]: https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors
[DownloadsBadgeURL]: https://img.shields.io/npm/dt/yamlcord?style=for-the-badge&color=5865f2&label=Downloads&logo=npm&logoColor=white
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[NPMURL]: https://www.npmjs.com/package/yamlcord
[StarsBadgeURL]: https://img.shields.io/github/stars/FancyStudioTeam/YAMLCord?style=for-the-badge&color=5865f2&label=Stars&logo=github&logoColor=white
[SupportBadgeURL]: https://img.shields.io/badge/Support-Support?style=for-the-badge&color=5865f2&label=Discord&logo=discord&logoColor=white
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[VersionBadgeURL]: https://img.shields.io/npm/v/yamlcord?style=for-the-badge&color=5865f2&label=Version&logo=npm&logoColor=white
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
