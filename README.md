<!-- markdownlint-disable -->
<div align="center">
  <picture>
    <source srcset="https://yamlcord.pages.dev/banners/Dark.png" media="(prefers-color-scheme: dark)">
    <img src="https://yamlcord.pages.dev/banners/Light.png">
  </picture>
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

This project is licensed under the [BSD-3-Clause][BSD3ClauseURL] license.

## 💻 Security

If you believe you have found a security vulnerability, please **DO NOT make a public issue**, instead, go to our [Support Server][SupportServerURL] and contact the developers privately.

## 💖 Contributors

Thanks to all these people who have made YAMLCord possible!

[![All Contributors][ContributorsImageURL]][ContributorsURL]

[BSD3ClauseURL]: https://opensource.org/license/bsd-3-clause/
[ContributorsImageURL]: https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20
[ContributorsURL]: https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
