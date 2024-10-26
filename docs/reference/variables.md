# Variables

:::info Variables
Variables in YAMLCord are wrapped in square brackets (`[]`).
:::

## Date / Time Variables

| Variable     | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| `[date_now]` | Returns the number of milliseconds elapsed since 1 January 1970 UTC. |

## Message Variables

| Variable            | Description                         |
| ------------------- | ----------------------------------- |
| `[message_content]` | Returns the content of the message. |

## User Variables

| Variable      | Description            |
| ------------- | ---------------------- |
| `[user_id]`   | Returns the user ID.   |
| `[user_name]` | Returns the user name. |

## Server Variables

| Variable       | Description              |
| -------------- | ------------------------ |
| `[guild_id]`   | Returns the server ID.   |
| `[guild_name]` | Returns the server name. |
| `[owner_id]`   | Returns the owner ID.    |
| `[owner_name]` | Returns the owner name.  |

:::caution Owner Variables
`[owner_id]` and `[owner_name]` may be undefined. Use at your own risk.
:::
