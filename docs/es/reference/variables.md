# Variables

:::info Variables
Las variables en YAMLCord están envueltas dentro de corchetes (`[]`).
:::

## Variables de Fecha / Tiempo

| Variable     | Descripción                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `[date_now]` | Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 UTC. |

## Variables de Mensajes

| Variable            | Descripción                        |
| ------------------- | ---------------------------------- |
| `[message_content]` | Devuelve el contenido del mensaje. |

## Variables de Usuarios

| Variable      | Descripción                    |
| ------------- | ------------------------------ |
| `[user_id]`   | Devuelve el ID del usuario.    |
| `[user_name]` | Devuelve el nombre de usuario. |

## Variables de Servidor

| Variable       | Descripción                         |
| -------------- | ----------------------------------- |
| `[guild_id]`   | Devuelve el ID del servidor.        |
| `[guild_name]` | Devuelve el nombre del servidor.    |
| `[owner_id]`   | Devuelve el ID del propietario.     |
| `[owner_name]` | Devuelve el nombre del propietario. |

:::caution Variables de Propietario
`[owner_id]` y `[owner_name]` pueden ser indefinidos. Úselos bajo su propio riesgo.
:::
