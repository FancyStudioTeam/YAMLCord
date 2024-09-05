# Función: `create_message`

Crea un mensaje.

## Sintaxis

```yml
create_message: # String [content]
```

## Argumentos

| Nombre  | Tipo               | Descripción               |
| ------- | ------------------ | ------------------------- |
| content | [`string`][String] | El contenido del mensaje. |

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

[String]: /es/learning/data-types#cadenas-de-texto-string
