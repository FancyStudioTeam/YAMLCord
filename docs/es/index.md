<!-- markdownlint-disable -->

![Light](/banners/Light.png#light)
![Dark](/banners/Dark.png#dark)

<!-- markdownlint-restore -->

---

FancyScript es una sintaxis fácil de usar para crear acciones personalizadas para bots de Discord utilizando YAML.

:::warning Antes de Empezar
Si eres nuevo en YAML, te recomendamos que veas un tutorial para aprender lo básico de YAML antes de usar FancyScript.

Te recomendamos ver este tutorial: <https://www.youtube.com/watch?v=0fbnyS_lHW4>
:::

## Ejemplo

```yml
# Array de Secuencias
sequences:
  # Comprueba si el contenido del mensaje es igual a "!hi"
  - if: "[message.content] eq '!hi'"
    then:
      # El bot crea un mensaje
      - create_message:
          content: "¡Hola! 👋"
```

## Contribuidores

¡Gracias a todas estas personas que han hecho posible FancyScript!

[![All Contributors][ContributorsImageURL]][ContributorsURL]

[ContributorsImageURL]: https://contrib.rocks/image?repo=FancyStudioTeam/FancyScript&max=500&columns=20
[ContributorsURL]: https://github.com/FancyStudioTeam/FancyScript/graphs/contributors
