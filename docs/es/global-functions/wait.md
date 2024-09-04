# Función: `wait`

Espera un número de segundos antes de ejecutar la próxima secuencia.

## Sintaxis

```yml
wait: # Number [seconds]
```

## Argumentos

| Nombre  | Tipo               | Descripción                      |
| ------- | ------------------ | -------------------------------- |
| seconds | [`number`][Number] | El número de segundos a esperar. |

:::details Notas Importantes

- El número de segundos debe ser un número entero.
- El rango de segundos es de `1` segundo como mínimo a `500` segundos como máximo.

:::

## Ejemplo

```yml
create_message:
  content: "Esperando 5 segundos..."
wait: 5 # Espera 5 segundos...
create_message:
  content: "Ya han pasado 5 segundos"
```

[Number]: /es/learning/data-types#numeros-number
