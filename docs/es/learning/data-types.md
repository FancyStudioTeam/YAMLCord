# Tipos de Datos

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

El tipo `string` es un tipo de dato que representa una secuencia de caracteres como letras, números y símbolos.

:::info Representación de Strings en YAML

::: code-group

```yml [Una línea]
content: "Esto es una string de una línea"
```

```yml [Múltiples líneas]
# Para hacer textos con salto de línea, puedes usar "|-"
# Cuando haces saltos de línea, no necesitas usar comillas dobles
# Si incluyes las comillas dobles, estas formarán parte del texto

content: |-
  Esto es un string
  con saltos de línea
```

:::

---

### Números (`Number`)

El tipo `number` es un tipo de dato que representa a cualquier valor numérico. Los números pueden ser enteros o decimales.

:::info Representación de Números en YAML

```yml
stock: 10 # Números Enteros
price: 3.99 # Números Decimales (Con punto decimal)
```

:::

---

### Booleanos (`Boolean`)

El tipo `boolean` es un tipo de dato que representa si un valor es verdadero o falso. Los valores de los booleanos son `true` o `false`.

:::info Representación de Booleanos en YAML

```yml
is_enabled: true
use_index: false
```

:::

---

### Listas (`Array`)

El tipo `array` es un tipo de dato que representa una lista de valores. En YAML, existen dos formas para representar una lista.

:::info Representación de Listas en YAML

:::code-group

```yml [Elementos de una línea]
# Este tipo de array puede ser útil para almacenar elementos de una línea
# Los elementos se separan mediante una coma
# Puede ser útil para almacenar elementos simples

numbers: [1, 2, 3, 4, 5]
```

```yml [Elementos de múltiples líneas]
# Este tipo de array puede ser útil para almacenar elementos de múltiples líneas
# Los elementos se definen con un "-" al inicio y se separan con una nueva línea
# Puede ser útil para almacenar elementos complejos

workers:
  - person:
      name: "John Doe"
      age: 30
  - person:
      name: "Jane Doe"
      age: 25
```

:::tip Tipos de Datos
Los elementos pueden ser de cualquier tipo de dato.
:::

---

### Objetos (`Object`)

El tipo `object` es un tipo de dato que representa un conjunto de pares `clave-valor`.

:::info Conjunto de pares `clave-valor`

```yml
# El nombre de la clave es "key" (string)
# El valor de la clave es "value" (string)

key: value
```

:::tip Tipos de Datos
El nombre de las claves suelen ser de tipo `string`, mientras que los valores pueden ser de cualquier tipo de dato.
:::

Los pares se definen usando `:` para separar las claves de los valores, y cada par se separa con una nueva línea.

:::info Representación de Objetos en YAML

```yml
person:
  name: "John Doe"
  age: 30
```

:::

Las claves deben ser únicas y no pueden ser duplicadas dentro del mismo padre.

:::info Jerarquía de Padres e Hijos

:::code-group

```yml [Objeto Inválido]
parent_object:
  content: "Contenido 1" # Hijo de "parent_object"
  content: "Contenido 2" // [!code error] # Hijo de "parent_object" [Clave Duplicada en el mismo Padre]
```

```yml [Objeto Válido]
parent_object:
  content: "Contenido 1" # Hijo de "parent_object"

  sub_parent_object: # Hijo de "parent_object"
    content: "Contenido 2" # Hijo de "sub_parent_object"
```

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
  hobbies: ["Leer", "Programar", "Atletismo"]
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

:::
