# Condicionales

Las condicionales nos ayudan a tomar decisiones en nuestro código.

Las condicionales se ejecutan mediante expresiones booleanas.

## Estructura

```yml
if: # Expresión booleana
then: # Array de secuencias
else: # Array de secuencias (Opcional)
```

| Campo  | Tipo     | Descripción                                                                    | Requerido |
| ------ | -------- | ------------------------------------------------------------------------------ | --------- |
| `if`   | `string` | La expresión booleana que se evaluará.                                         | `✅`      |
| `then` | `string` | Un array de secuencias que se ejecutará si la expresión booleana es verdadera. | `✅`      |
| `else` | `string` | Un array de secuencias que se ejecutará si la expresión booleana es falsa.     | `❌`      |

### Expresiones Boleanas

Las expresiones booleanas se componen mediante el siguiente formato:

```yml
variable operador valor
```

:::info Ejemplo de una Expresión Booleana

```yml
if: "[user_id] eq '945029082314338407'"
```

:::

#### Variables

:::info Lista de Variables
Puedes encontrar la lista de variables disponibles en la página [Variables](../reference/variables.md).
:::

#### Operadores

:::info Lista de Operadores
Puedes encontrar la lista de operadores disponibles en la página [Operadores](../reference/operators.md).
:::

#### Valores

Los valores tienen que estar envueltos dentro de comillas simples (`'`).

```yml
# Valores válidos
'Valor válido' // [!code ++]
'También pueden haber ' dentro de las comillas simples' // [!code ++]

# Valores inválidos
Valor inválido // [!code error]
'Valor inválido // [!code error]
Valor inválido' // [!code error]
```
