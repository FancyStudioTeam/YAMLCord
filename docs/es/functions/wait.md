# Función: `wait`

Espera un número de segundos antes de ejecutar la próxima secuencia.

## Firma

```yml
wait(): # Number [seconds]
```

### Argumentos

- `seconds` (`number`): El número de segundos a esperar.

:::details Notas Importantes

- El número de segundos debe ser un número entero.
- El rango de segundos es de `1` segundo como mínimo a `300` segundos como máximo.

:::

## Ejemplo

```yml
create_message(): "Esperando 5 segundos..."
wait(): 5 # Espera 5 segundos...
create_message(): "Ya han pasado 5 segundos"
```
