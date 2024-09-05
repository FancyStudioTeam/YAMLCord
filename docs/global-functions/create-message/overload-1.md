# Function: `create_message`

Create a message.

## Syntax

```yml
create_message: # Object
```

## Arguments

| Name          | Type                       | Description                                        |
| ------------- | -------------------------- | -------------------------------------------------- |
| channel_id`?` | [`string`][String]         | The ID of the channel to send the message.         |
| content       | [`string`][String]         | The content of the message.                        |
| reply`?`      | [`ping`/`no_ping`][String] | If a reply to the original message should be made. |

:::info Important Notes

- The content character range is from `1` character minimum to `2000` characters maximum.
- If the `reply` property is set to `no_ping`, the bot will not make a mention of the original author. Otherwise, the bot will mention the original author.

:::

## Examples

:::code-group

```yml [Basic Message]
create_message:
  content: "This is a basic message"
```

```yml [Line Breaks]
create_message:
  content: |-
    This is a message
    with multiple lines
```

```yml [As a Reply]
create_message:
  content: "This is a basic message"
  # If you want to make a mention of the original author, use "ping"
  reply: "no_ping"
```

:::

[String]: /learning/data-types#text-strings-string