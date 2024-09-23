# Función: `add_reaction`

Añade una reacción al mensaje original.

## Firma

```yml
add_reaction(): # String [reaction]
```

### Argumentos

- `reaction` (`string`): La reacción a añadir.

:::details Notas Importantes

- Los emojis no pueden contener espacios u otros caracteres.
- Los emojis personalizados deben estar en el formato `<:NOMBRE:ID>` o `<a:NOMBRE:ID>`.

:::

## Ejemplos

:::code-group

```yml [Emoji Unicode]
add_reaction(): "👍"
```

```yml [Emoji Personalizado]
add_reaction(): "<:custom:123456789012345678>"
```

:::
