# Function: `add_reaction`

Add a reaction to the original message.

## Syntax

```yml
add_reaction: # String [reaction]
```

## Arguments

| Name     | Type               | Description          |
| -------- | ------------------ | -------------------- |
| reaction | [`string`][String] | The reaction to add. |

## Examples

:::code-group

```yml [Unicode Emoji]
add_reaction: "👍"
```

```yml [Custom Emoji]
add_reaction: "<:custom:123456789012345678>"
```

:::

[String]: /learning/data-types#text-strings-string
