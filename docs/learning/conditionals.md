# Conditionals

Conditionals help us to make decisions in our code.

Conditionals are executed using Boolean expressions.

## Structure

```yml
if: # Boolean expression
then: # Array of sequences
else: # Array of sequences (Optional)
```

| Field  | Type     | Description                                                                     | Required |
| ------ | -------- | ------------------------------------------------------------------------------- | -------- |
| `if`   | `string` | The Boolean expression to be evaluated.                                         | `✅`     |
| `then` | `string` | An array of sequences that will be executed if the boolean expression is true.  | `✅`     |
| `else` | `string` | An array of sequences that will be executed if the boolean expression is false. | `❌`     |

### Boolean Expressions

Boolean expressions are composed using the following format:

```yml
variable operator value
```

:::info Example of a Boolean Expression

```yml
if: "[user_id] eq '945029082314338407'"
```

:::

#### Variables

:::info List of Available Variables
You can find a list of available variables in the [Variables](../reference/variables.md) page.
:::

#### Operators

:::info List of Available Operators
You can find a list of available operators in the [Operators](../reference/operators.md) page.
:::

#### Values

Values must be wrapped inside single quotes (`'`).

```yml
# Valid values
'Valid value' // [!code ++]
'There may also be ' inside single quotation marks' // [!code ++]

# Valores inválidos
Invalid value // [!code error]
'Invalid value // [!code error]
Invalid value' // [!code error]
```
