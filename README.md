<!-- markdownlint-disable -->
<div align="center">
  <picture>
    <source srcset="https://yamlcord.pages.dev/banners/Dark.png" media="(prefers-color-scheme: dark)">
    <img src="https://yamlcord.pages.dev/banners/Light.png">
  </picture>
  <p>YAMLCord is an easy-to-use syntax for creating custom actions for Discord bots using YAML.</p>
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

## Support

If you need help, you can join our [Support Server][SupportServerURL] and ask your questions there.

## Security

If you believe you have found a security vulnerability, please **DO NOT make a public issue**, instead, go to our [Support Server][SupportServerURL] and contact the developers privately.

## Contributors

<!-- markdownlint-disable -->
<a href="https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20" />
</a>
<!-- markdownlint-restore -->

[CCBYSALicenseURL]: https://creativecommons.org/licenses/by-sa/4.0/
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
