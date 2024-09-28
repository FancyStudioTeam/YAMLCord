# Conditionals

Conditionals help us to make decisions in our code. Conditionals are executed using Boolean expressions.

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

:::info Using Variables or Literal Values
Values can support variables or literal values.
:::

##### Using Variables

When variables are used as values, the variable can be set as seen in the [Variables](../reference/variables.md) page.

:::info Example of Variables

```yml
if: "[user_id] eq [owner_id]" // [!code ++]
```

:::warning Use of Single Quotation Marks
When using variables, single quotes must be omitted. If they are included, the value will be interpreted as a Literal Value.
:::

##### Using Literal Values

When literal values are used as values, the value must be wrapped inside single quotes (`'`).

:::info Example of Literal Values

```yml
if: "[user_id] eq '945029082314338407'" // [!code ++]

if: "[user_id] eq 945029082314338407" # Both single quotation marks are missing // [!code error]
if: "[user_id] eq '945029082314338407" # A single quotation mark is missing at the end // [!code error]
if: "[user_id] eq 945029082314338407'" # A single quotation mark is missing at the beginning // [!code error]
```

:::warning Use of Single Quotation Marks
When variables are used, single quotes are mandatory. If they are not included, an error will be returned.
:::
