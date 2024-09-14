# Campos Opcionales

Algunos objetos tienen campos que son requeridos, y otros que son opcionales.

## Diferencia entre Campos Requeridos y Opcionales

- `Requeridos`: Son campos que deben estar presentes dentro del objeto. De lo contrario, se retonará un error.
- `Opcionales`: Son campos que se pueden omitir dentro del objeto. Los campos opcionales se marcan con un `?` al final de su nombre.

### Ejemplo

Vamos a tomar como ejemplo este objeto llamado `example`.

```yml
example: # Object
```

El objeto `example` admite estos campos:

- `required_field` ([`string`][String]): Un campo requerido.
- `other_required_field` ([`string`][String]): Un campo requerido.
- `optional_field?` ([`string`][String]): Un campo opcional. (Marcado con `?`)

:::info Ejemplos mezclando campos

:::code-group

```yml [Objeto 1 (Válido)]
example:
  required_field: "..." // [!code highlight]
  other_required_field: "..." // [!code highlight]

# El campo "required_field", que es requerido, está presente
# Y el campo "other_required_field", que es requerido, está presente
# Por lo que es un objeto válido
```

```yml [Objeto 2 (Válido)]
example:
  required_field: "..." // [!code highlight]
  other_required_field: "..." // [!code highlight]
  optional_field: "..." // [!code ++]

# El campo "required_field", que es requerido, está presente
# El campo "other_required_field", que es requerido, está presente
# Y el campo "optional_field", que es opcional, está presente
# Por lo que es un objeto válido
```

```yml [Objeto 3 (Inválido)]
example:
  optional_field: "..." // [!code ++]

# El campo "optional_field", que es opcional, está presente
# El campo "required_field", que es requerido, no está presente
# Y el campo "other_required_field", que es requerido, no está presente
# Por lo que no es un objeto válido
```

```yml [Objeto 4 (Inválido)]
example:
  required_field: "..." // [!code highlight]
  optional_field: "..." // [!code ++]

# El campo "optional_field", que es opcional, está presente
# El campo "required_field", que es requerido, está presente
# Y el campo "other_required_field", que es requerido, no está presente
# Por lo que no es un objeto válido
```

```yml [Objeto 5 (Inválido)]
example:
  other_required_field: "..." // [!code highlight]
  optional_field: "..." // [!code ++]

# El campo "optional_field", que es opcional, está presente
# El campo "required_field", que es requerido, no está presente
# Y el campo "other_required_field", que es requerido, está presente
# Por lo que no es un objeto válido
```

:::

[String]: /es/learning/data-types#cadenas-de-texto-string
