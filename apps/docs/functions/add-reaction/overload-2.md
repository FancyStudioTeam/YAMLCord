# Function: `add_reaction`

Add a reaction to the original message.

## Signature

```yml
add_reaction: # Array [reaction]
```

### Arguments

- `reaction` ([`string`][String]): The reaction to add.

## Examples

:::code-group

```yml [Unicode Emojis]
add_reaction: ["👍", "👎"]
```

```yml [Custom Emojis]
add_reaction: ["<:custom:123456789012345678>", "<:custom_2:123456789012345678>"]
```

:::

[String]: /learning/data-types#text-strings-string
