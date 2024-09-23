# Function: `wait`

Wait a number of seconds before executing the next sequence.

## Signature

```yml
wait(): # Number [seconds]
```

### Arguments

- `seconds` (`number`): The number of seconds to wait.

:::details Important Notes

- The number of seconds must be an integer.
- The range of seconds is from `1` second minimum to `300` seconds maximum.

:::

## Example

```yml
create_message(): "Waiting for 5 seconds..."
wait(): 5 # Wait 5 seconds...
create_message(): "5 seconds have already elapsed"
```
