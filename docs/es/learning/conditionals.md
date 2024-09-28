# Condicionales

Las condicionales nos ayudan a tomar decisiones en nuestro código. Las condicionales se ejecutan mediante expresiones booleanas.

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

:::info Usando Variables o Valores Literales
Los valores pueden admitir variables o valores literales.
:::

##### Usando Variables

Cuando se usan variables como valores, la variable se puede poner tal como se ve en la página [Variables](../reference/variables.md).

:::info Ejemplo de Variables

```yml
if: "[user_id] eq [owner_id]" // [!code ++]
```

:::warning Uso de Comillas Simples
Cuando se usan variables, las comillas simples se tienen que omitir. Si se incluyen, el valor se interpretará como un Valor Literal.
:::

##### Usando Valores Literales

Cuando se usan valores literales como valores, el valor tiene que estar envuelto dentro de comillas simples (`'`).

:::info Ejemplo de Valores Literales

```yml
if: "[user_id] eq '945029082314338407'" // [!code ++]

if: "[user_id] eq 945029082314338407" # Faltan ambas comillas simples // [!code error]
if: "[user_id] eq '945029082314338407" # Falta una comilla simple al final // [!code error]
if: "[user_id] eq 945029082314338407'" # Falta una comilla simple al inicio // [!code error]
```

:::warning Uso de Comillas Simples
Cuando se usan variables, las comillas simples son obligatorias. Si no se incluyen, se retornará un error.
:::
