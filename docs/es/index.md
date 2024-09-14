<!-- markdownlint-disable -->
<div align="center">
  <img src="https://yamlcord.pages.dev/banners/Light.png#light" />
  <img src="https://yamlcord.pages.dev/banners/Dark.png#dark" />
  <p>YAMLCord es una sintaxis fácil de usar para crear acciones personalizadas para bots de Discord utilizando YAML</p>
  <div style="display: flex; justify-content: center; gap: 5px; flex-wrap: wrap;">
    <a href="https://www.npmjs.com/package/yamlcord" style="text-decoration: none;">
      <img src="https://img.shields.io/npm/v/yamlcord?style=for-the-badge&color=5865f2&label=Version&logo=npm&logoColor=white">
    </a>
    <a href="https://www.npmjs.com/package/yamlcord" style="text-decoration: none;">
      <img src="https://img.shields.io/npm/dt/yamlcord?style=for-the-badge&color=5865f2&label=Downloads&logo=npm&logoColor=white">
    </a>
    <a href="https://github.com/FancyStudioTeam/YAMLCord" style="text-decoration: none;">
      <img src="https://img.shields.io/github/stars/FancyStudioTeam/YAMLCord?style=for-the-badge&color=5865f2&label=Stars&logo=github&logoColor=white">
    </a>
    <a href="https://discord.gg/yWjeDA6ewJ" style="text-decoration: none;">
      <img src="https://img.shields.io/badge/Support-Support?style=for-the-badge&color=5865f2&label=Discord&logo=discord&logoColor=white">
    </a>
  </div>
</div>
<!-- markdownlint-restore -->

## Ejemplo

```yml
sequences:
  - if: "[message.content] eq '!hi'"
    then:
      - create_message: "Hello!"
      - add_reaction: "👋"
```

## Licencia

[YAMLCord][YAMLCordRepositoryURL] © 2024 por [FancyStudio][FancyStudioGitHubURL] está licenciado bajo [CC BY-SA 4.0][CCBYSALicenseURL].

## Seguridad

Si crees que has encontrado una vulnerabilidad de seguridad, por favor **NO hagas una incidencia pública**, en su lugar, dirígete a nuestro [Servidor de Soporte][SupportServerURL] y contacta con los desarrolladores en privado.

## Contribuidores

¡Gracias a todas estas personas que han hecho posible YAMLCord!

<!-- markdownlint-disable -->
<a href="https://github.com/FancyStudioTeam/YAMLCord/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FancyStudioTeam/YAMLCord&max=500&columns=20" />
</a>
<!-- markdownlint-restore -->

[CCBYSALicenseURL]: https://creativecommons.org/licenses/by-sa/4.0/
[FancyStudioGitHubURL]: https://github.com/FancyStudioTeam
[SupportServerURL]: https://discord.gg/yWjeDA6ewJ
[YAMLCordRepositoryURL]: https://github.com/FancyStudioTeam/YAMLCord
