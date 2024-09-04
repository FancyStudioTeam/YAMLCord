# Function: `wait`

Wait a number of seconds before executing the next sequence.

## Syntax

```yml
wait: # Number [seconds]
```

## Arguments

| Name    | Type               | Description                    |
| ------- | ------------------ | ------------------------------ |
| seconds | [`number`][Number] | The number of seconds to wait. |

:::details Important Notes

- The number of seconds must be an integer.
- The range of seconds is from `1` second minimum to `500` seconds maximum.

:::

## Example

```yml
create_message:
  content: "Waiting for 5 seconds..."
wait: 5 # Wait 5 seconds...
create_message:
  content: "5 seconds have already elapsed"
```

[Number]: /learning/data-types#numbers-number
