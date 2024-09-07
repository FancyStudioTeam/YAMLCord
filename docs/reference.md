# Reference

## Optional Fields

Some functions have fields/arguments that are optional. These fields are marked with a `?` at the end of the name.

| Name              | Description                          |
| ----------------- | ------------------------------------ |
| required_field    | A required field.                    |
| optional_field`?` | An optional field. (Marked with `?`) |

### Difference between required and optional fields

- `Required`: These fields must be present in the functions. Otherwise, the function will return a requirement error.
- `Optional`: These fields do not need to be present.

## Overloaded Functions

Overloaded functions are functions that have the ability to accept different types of arguments.

Overloaded functions are indicated by the `⚡` emoji at the end of the function name.

:::info Example of an Overloaded Function (`create_message`)

:::code-group

```yml [Overload 1]
create_message:
  content: "Hello, World!"
```

```yml [Overload 2]
create_message: "Hello, World!"
```

:::info Explanation
The `create_message` function is an overloaded function, which has 2 overloads.

- `Overload 1`:
  :::
