<!-- markdownlint-disable -->

![Light](/banners/Light.png#light)
![Dark](/banners/Dark.png#dark)

<!-- markdownlint-restore -->

---

FancyScript es una sintaxis fácil de usar para crear acciones personalizadas para bots de Discord utilizando YAML.

:::warning Antes de Empezar
Si eres nuevo en YAML, te recomendamos que veas un tutorial para aprender lo básico de YAML antes de usar FancyScript.

<!-- markdownlint-disable -->
<iframe allowfullscreen src="https://www.youtube.com/embed/0fbnyS_lHW4?si=MwdX3onyJgq-E03K" />
<!-- markdownlint-restore -->
:::

## Ejemplo

```yml
# Lista de condiciones.
conditions:
  # Comprueba si el contenido del mensaje es igual a "!hi".
  - if: "[message.content] eq '!hi'"
    then:
      # El bot crea un mensaje.
      - create_message:
          content: "¡Hola! 👋"
```
