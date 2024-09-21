# Función: `create_message`

Crea un mensaje.

## Firma

```yml
create_message: # String [content]
```

### Argumentos

- `content` (`string`): El contenido del mensaje.

:::details Notas Importantes

- El rango de caracteres del contenido es de `1` carácter como mínimo a `2000` caracteres como máximo.

:::

## Ejemplos

:::code-group

```yml [Mensaje Básico]
create_message: "Esto es un mensaje básico"
```

```yml [Saltos de Línea]
create_message: |-
  Esto es un mensaje
  con múltiples líneas
```

:::
