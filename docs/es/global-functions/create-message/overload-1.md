# Función: `create_message`

Crea un mensaje.

## Sintaxis

```yml
create_message: # Object
```

## Argumentos

| Nombre        | Tipo                       | Descripción                                            |
| ------------- | -------------------------- | ------------------------------------------------------ |
| channel_id`?` | [`string`][String]         | El ID del canal a enviar el mensaje.                   |
| content       | [`string`][String]         | El contenido del mensaje.                              |
| reply`?`      | [`ping`/`no_ping`][String] | Si se debería hacer una respuesta al mensaje original. |

:::info Notas Importantes

- El rango de caracteres del contenido es de `1` carácter como mínimo a `2000` caracteres como máximo.
- Si la propiedad `reply` está establecida como `no_ping`, el bot no hará una mención al autor original. De lo contrario, el bot si hará una mención al autor original.

:::

## Ejemplos

:::code-group

```yml [Mensaje Básico]
create_message:
  content: "Esto es un mensaje básico"
```

```yml [Saltos de Línea]
create_message:
  content: |-
    Esto es un mensaje
    con múltiples líneas
```

```yml [Como una Respuesta]
create_message:
  content: "Esto es un mensaje básico"
  # Si quieres hacer una mención al autor original, usa "ping"
  reply: "no_ping"
```

:::

[String]: /es/learning/data-types#cadenas-de-texto-string
