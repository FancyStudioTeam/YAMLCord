<!-- markdownlint-disable -->
<div align="center">
  <picture>
    <source srcset="assets/images/Dark.png" media="(prefers-color-scheme: dark)" width="150" height="150">
    <img src="assets/images/Light.png" width="150" height="150">
  </picture>
  <h1>YAMLCord</h1>
  <p>YAMLCord is an easy-to-use syntax for creating custom actions for Discord bots using YAML.</p>
  <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
    <a href="https://creativecommons.org/licenses/by-sa/4.0/" style="text-decoration: none;">
      <img src="https://img.shields.io/badge/CC BY--SA 4.0-_?style=for-the-badge&color=5865f2&label=License&logo=creative-commons&logoColor=white">
    </a>
    <a href="https://discord.gg/yWjeDA6ewJ" style="text-decoration: none;">
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
      - create_message(): "Hello!"
      - add_reaction(): "👋"
```

## License

[YAMLCord][YAMLCordRepositoryURL] © 2024 by [FancyStudio][FancyStudioGitHubURL] is licensed under [CC BY-SA 4.0][CCBYSALicenseURL].

## Support

If you need help, you can join our [Support Server][SupportServerURL] and ask your questions there.

## Security

If you believe you have found a security vulnerability, please **DO NOT make a public issue**, instead, go to our [Support Server][SupportServerURL] and contact the developers privately.7

## Contributors

Thanks to all these people who have made YAMLCord possible!

<!-- markdownlint-disable -->
<a href="https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord" />
</a>
<!-- markdownlint-restore -->

[CCBYSALicenseURL]: https://creativecommons.org/licenses/by-sa/4.0/
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
