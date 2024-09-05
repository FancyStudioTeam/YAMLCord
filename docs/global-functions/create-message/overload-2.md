# Function: `create_message`

Create a message.

## Syntax

```yml
create_message: # String [content]
```

## Arguments

| Name    | Type               | Description                 |
| ------- | ------------------ | --------------------------- |
| content | [`string`][String] | The content of the message. |

:::info Important Notes

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

[String]: /learning/data-types#text-strings-string
