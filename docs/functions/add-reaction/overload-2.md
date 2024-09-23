# Function: `add_reaction`

Add a reaction to the original message.

## Signature

```yml
add_reaction(): # Array [reaction]
```

### Arguments

- `reaction` (`string`): The reaction to add.

:::details Important Notes

- Emojis cannot contain spaces or other characters.
- Custom emojis must be in the format `<:NAME:ID>` or `<a:NAME:ID>`.

:::

## Examples

:::code-group

```yml [Unicode Emojis]
add_reaction(): ["👍", "👎"]
```

```yml [Custom Emojis]
add_reaction():
  ["<:custom:123456789012345678>", "<:custom_2:123456789012345678>"]
```

:::
