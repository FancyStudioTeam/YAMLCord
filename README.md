<!-- markdownlint-disable -->
<div align="center">
  <picture>
    <source srcset="https://yamlcord.pages.dev/banners/Dark.png" media="(prefers-color-scheme: dark)">
    <img src="https://yamlcord.pages.dev/banners/Light.png">
  </picture>
  <p>YAMLCord is an easy-to-use syntax for creating custom actions for Discord bots using YAML</p>
  <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
    <a href="https://www.npmjs.com/package/yamlcord">
      <img src="https://img.shields.io/npm/v/yamlcord?style=for-the-badge&color=5865f2&label=Version&logo=npm&logoColor=white">
    </a>
    <a href="https://www.npmjs.com/package/yamlcord">
      <img src="https://img.shields.io/npm/dt/yamlcord?style=for-the-badge&color=5865f2&label=Downloads&logo=npm&logoColor=white">
    </a>
    <a href="https://github.com/FancyStudioTeam/YAMLCord">
      <img src="https://img.shields.io/github/stars/FancyStudioTeam/YAMLCord?style=for-the-badge&color=5865f2&label=Stars&logo=github&logoColor=white">
    </a>
    <a href="https://discord.gg/yWjeDA6ewJ">
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

<!-- markdownlint-disable -->
<a href="https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20" />
</a>
<!-- markdownlint-restore -->

[CCBYSALicenseURL]: https://creativecommons.org/licenses/by-sa/4.0/
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
