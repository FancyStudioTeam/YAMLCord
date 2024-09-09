# Optional Fields

Some objects have fields that are required, and others that are optional.

## Difference between Required and Optional Fields

- `Required`: These are fields that must be present within the object. Otherwise, an error will be returned.
- `Optional`: These are fields that can be omitted within the object. Optional fields are marked with a `?` at the end of their name.

### Example

Let's take as an example this object called `example`.

```yml
example: # Object
```

The `example` object supports these fields:

| Name                 | Type               | Description                          |
| -------------------- | ------------------ | ------------------------------------ |
| required_field       | [`string`][String] | A required field.                    |
| other_required_field | [`string`][String] | A required field.                    |
| optional_field`?`    | [`string`][String] | An optional field. (Marked with `?`) |

:::info Examples mixing fields

:::code-group

```yml [Object 1 (Valid)]
example:
  required_field: "..." // [!code highlight]
  other_required_field: "..." // [!code highlight]

# The “required_field” field, which is required, is present.
# And the field “other_required_field”, which is required, is present
# So it is a valid object
```

```yml [Object 2 (Valid)]
example:
  required_field: "..." // [!code highlight]
  other_required_field: "..." // [!code highlight]
  optional_field: "..." // [!code ++]

# The “required_field” field, which is required, is present.
# The “other_required_field” field, which is required, is present
# And the field “optional_field”, which is optional, is present
# So it is a valid object
```

```yml [Object 3 (Invalid)]
example:
  optional_field: "..." // [!code ++]

# The “optional_field” field, which is optional, is present.
# The “required_field” field, which is required, is not present.
# And the field “other_required_field”, which is required, is not present
# So it is not a valid object
```

```yml [Object 4 (Invalid)]
example:
  required_field: "..." // [!code highlight]
  optional_field: "..." // [!code ++]

# The “optional_field” field, which is optional, is present.
# The “required_field” field, which is required, is present
# And the field “other_required_field”, which is required, is not present
# So it is not a valid object
```

:::

[String]: /learning/data-types#text-strings-string
