---
title: Tipos de Datos
---

<!-- markdownlint-disable MD025 -->

# {{ $frontmatter.title }}

<!-- markdownlint-enable MD025 -->

:::warning Antes de Empezar
Si eres nuevo en YAML, te recomendamos que veas un tutorial para aprender lo básico de YAML antes de usar FancyScript.

<!-- markdownlint-disable -->
<iframe allowfullscreen src="https://www.youtube.com/embed/0fbnyS_lHW4?si=MwdX3onyJgq-E03K" />
<!-- markdownlint-restore -->
:::

Los tipos de datos son una forma de diferenciar los datos que tenemos por su tipo.

En esta página se hará un resumen rápido sobre los tipos de datos que se usan en FancyScript.

## Tipos de Datos Básicos

### Cadenas de Texto (`String`)

Un string es un tipo de dato que representa una secuencia de caracteres como letras, números y símbolos. Se usa para almacenar y manipular textos.

:::info Representación de Cadenas de Texto en YAML

```yml
content: "¡Hola, mundo! Esto es un string de una línea."
```

Para hacer textos con saltos de líneas, puedes usar `|-`

```yml
content: |- # No necesitas usar comillas dobles
  ¡Hola,
  mundo!
  Esto es un string de varias líneas.
```

:::

### Números (`Number`)

Un número es un tipo de dato que representa a cualquier valor numérico. Los números pueden ser enteros o decimales.

:::info Representación de Números en YAML

```yml
quantity: 10 # Enteros
price: 3.99 # Decimales (Con punto decimal)
```

:::

### Objetos (`Object`)

Un objeto es un tipo de dato que representa un conjunto de pares `clave-valor`.

:::info Conjunto de pares `clave-valor`

```yml
key: value # El nombre de la clave es "key" y el valor es "value"
```

:::

Las claves son únicas y no pueden ser duplicadas dentro del mismo objeto. Los pares se definen usando `:` para separar las claves de los valores, y cada par se separa con una nueva línea.

:::info Representación de Objetos en YAML

```yml
person:
  name: "John Doe"
  age: 30
```

:::

:::warning Tipos de Datos en los pares
Las claves suelen ser de tipo `String`, mientras que los valores pueden ser de cualquier tipo de dato.
:::

### Booleanos (`Boolean`)

Un booleano es un tipo de dato que representa si un valor es verdadero o falso. Los valores de los booleanos son `true` o `false`.

:::info Representación de Booleanos en YAML

```yml
is_enabled: true
use_index: false
```

:::

### Listas (`Array`)

Un array es un tipo de dato que representa una lista de valores. Los elementos dentro del array se definen usando `-` antes del elemento.

:::info Representación de Listas en YAML

```yml
numbers:
  - 1
  - 2
  - 3
```

:::

:::warning Tipos de Datos en los elementos
Los elementos pueden ser de cualquier tipo de dato.
:::

## Anidaciones

Las estructuras YAML pueden ser anidadas para crear estructuras más complejas. Esto se logra mediante el uso de indentación.

:::warning Indentación
YAML es sensible a la indentación, que se usa para definir la jerarquía de los elementos.
:::

:::info Ejemplo de Anidación

```yml
person:
  name: "John Doe"
  age: 30
  is_underage: false
  hobbies:
    - "Leer"
    - "Programar"
    - "Atletismo"
  active_worker: true
  company:
    name: "FancyStudio"
    location: "Anytown, Spain"
    workers: 2
  children:
    - name: "Dylan"
      age: 12
      is_underage: true
    - name: "Isabella"
      age: 19
      is_underage: false
```

### Explicación

:::
