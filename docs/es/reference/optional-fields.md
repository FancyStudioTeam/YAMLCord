# Campos Opcionales

Algunos objetos tienen campos que son obligatorios, y otros que son opcionales.

## Diferencia entre Campos Obligatorios y Opcionales

- `Obligatorios`: Son campos que deben estar presentes dentro del objeto. De lo contrario, se retonará un error.
- `Opcionales`: Son campos que se pueden omitir dentro del objeto. Los campos opcionales se marcan con un `?` al final de su nombre.

### Ejemplo Práctico

Vamos a tomar como ejemplo este objeto llamado `profile`.

```yml
profile: # Object
```

El objeto `profile` admite estos campos:

- `username` (`string`): El nombre del usuario.
- `email` (`string`): El correo electrónico del usuario.
- `about_me?` (`string`): El sobre mí del usuario.

:::info Ejemplos Prácticos

:::code-group

```yml [Objeto 1 (Válido)]
profile:
  username: "John Doe" // [!code highlight]
  email: "johndoe@example.com" // [!code highlight]

# Los dos campos "username" y "email", que son obligatorios, están presentes
# Como resultado, el objeto es válido
```

```yml [Objeto 2 (Válido)]
profile:
  username: "John Doe" // [!code highlight]
  email: "johndoe@example.com" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# Los dos campos "username" y "email", que son obligatorios, están presentes
# Pero el campo "about_me", que es opcional, está presente
# Como resultado, el objeto es válido
```

```yml [Objeto 3 (Inválido)]
profile:
  about_me: "I am a software developer" // [!code ++]

# El campo "about_me", que es opcional, está presente
# Pero los dos campos "username" y "email", que son obligatorios, no están presentes
# Como resultado, el objeto no es válido
```

```yml [Objeto 4 (Inválido)]
profile:
  username: "John Doe" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# El campo "username", que es obligatorio, está presente
# El campo "about_me", que es opcional, está presente
# Pero el campo "email", que es obligatorio, no está presente
# Como resultado, el objeto no es válido
```

```yml [Objeto 5 (Inválido)]
profile:
  email: "johndoe@example.com" // [!code highlight]
  about_me: "I am a software developer" // [!code ++]

# El campo "email", que es obligatorio, está presente
# El campo "about_me", que es opcional, está presente
# Pero el campo "username", que es obligatorio, no está presente
# Como resultado, el objeto no es válido
```

:::

Todos los campos obligatorios (`username` y `email`) deben estar presentes dentro del objeto `profile`. De lo contrario, el objeto no es válido.
