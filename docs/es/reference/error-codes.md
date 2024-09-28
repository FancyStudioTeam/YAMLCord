# Códigos de Error

## Errores Generales

- `0`: Se produce cuando ocurre un error que no ha sido documentado con un código de error.

## Errores `1xxxx`

Ocurren cuando un valor es inválido.

- `10001`: Se produce cuando se escribe un archivo YAML inválido.
- `10002`: Se produce cuando la longitud de una cadena de texto es mayor que el valor máximo permitido.
- `10003`: Se produce cuando la longitud de una cadena de texto es menor que el valor mínimo permitido.
- `10004`: Se produce cuando la longitud de un array es mayor que el valor máximo permitido.
- `10005`: Se produce cuando la longitud de un array es menor que el valor mínimo permitido.
- `10006`: Se produce cuando el tipo de dato del valor no corresponde al tipo de dato que se requiere.
- `10007`: Se produce cuando la longitud númerica de un número es mayor que el valor máximo permitido.
- `10008`: Se produce cuando la longitud númerica de un número es menor que el valor mínimo permitido.
- `10009`: Se produce cuando una cadena de texto no coincide con una expresión regular.
- `10010`: Se produce cuando una enumeración no coincide con las enumeraciones permitidas.

## Errores `2xxxx`

Ocurren cuando se encuentra una estructura desconocida.

- `20001`: Se produce cuando se encuentra un campo de nivel superior desconocido.
- `20002`: Se produce cuando se encuentra una función integrada desconocida.
