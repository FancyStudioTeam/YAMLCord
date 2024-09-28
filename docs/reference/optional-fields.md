# Optional Fields

Some objects have fields that are required, and others that are optional.

## Difference Between Required and Optional Fields

- `Required`: These fields must be present in the object. If they are not, an error will be returned.
- `Optional`: These fields can be omitted from the object.

### Practical Example

Let's take as an example this object called `profile`.

```yml
profile: # Object
```

#### Arguments

| Field      | Type     | Description                    | Required |
| ---------- | -------- | ------------------------------ | -------- |
| `username` | `string` | The username of the user.      | `✅`     |
| `email`    | `string` | The email address of the user. | `✅`     |
| `about_me` | `string` | The user's about me.           | `❌`     |

:::info Practical Examples

:::code-group

```yml [Object 1 (Valid)]
profile:
  username: "John Doe" // [!code highlight]
  email: "johndoe@example.com" // [!code highlight]

# Both "username" and "email" fields, which are required, are present
# As a result, the object is valid
```

```yml [Object 2 (Valid)]
profile:
  username: "John Doe" // [!code highlight]
  email: "johndoe@example.com" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# Both "username" and "email" fields, which are required, are present
# And the "about_me" field, which is optional, is also present
# As a result, the object is valid
```

```yml [Object 3 (Invalid)]
profile:
  about_me: "I am a software developer" // [!code ++]

# The "about_me" field, which is optional, is present
# But the "username" and "email" fields, which are required, are not present
# As a result, the object is invalid
```

```yml [Object 4 (Invalid)]
profile:
  username: "John Doe" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# The "username" field, which is required, is present
# The "about_me" field, which is optional, is present
# But the "email" field, which is required, is not present
# As a result, the object is invalid
```

```yml [Object 5 (Invalid)]
profile:
  email: "johndoe@example.com" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# The "email" field, which is required, is present
# The "about_me" field, which is optional, is present
# But the "username" field, which is required, is not present
# As a result, the object is invalid
```

:::

All required fields (`username` and `email`) must be present in the `profile` object. Otherwise, the object is invalid.
