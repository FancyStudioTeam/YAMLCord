# Function: `create_message`

Create a message.

## Signature

```yml
create_message: # String [content]
```

### Arguments

- `content` (`string`): The content of the message.

:::details Important Notes

- The content character range is from `1` character minimum to `2000` characters maximum.

:::

## Examples

:::code-group

```yml [Basic Message]
create_message: "This is a basic message"
```

```yml [Line Breaks]
create_message: |-
  This is a message
  with multiple lines
```

:::
