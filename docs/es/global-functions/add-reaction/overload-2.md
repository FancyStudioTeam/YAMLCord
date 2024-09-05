# Función: `add_reaction`

Añade una reacción al mensaje original.

## Sintaxis

```yml
add_reaction: # Array [reaction]
```

## Argumentos

| Nombre   | Tipo               | Descripción           |
| -------- | ------------------ | --------------------- |
| reaction | [`string`][String] | La reacción a añadir. |

## Ejemplo

:::code-group

```yml [Emojis Unicode]
add_reaction: ["👍", "👎"]
```

```yml [Emojis Personalizado]
add_reaction: ["<:custom:123456789012345678>", "<:custom_2:123456789012345678>"]
```

:::

[String]: /es/learning/data-types#cadenas-de-texto-string
