# Data Types

:::warning Before You Begin
If you are new to YAML, we recommend that you watch a tutorial to learn the basics of YAML before using YAMLCord.

We recommend you to watch this tutorial: <https://www.youtube.com/watch?v=0fbnyS_lHW4>
:::

Data types are a way to differentiate the data we have by its type.

In this page will give a quick overview of the data types used in YAMLCord.

## Basic Data Types

### Text Strings (`String`)

The `string` type is a data type that represents a sequence of characters such as letters, numbers and symbols.

:::info String Representation in YAML

::: code-group

```yml [One line]
content: "This is a one-line string"
```

```yml [Multiple lines]
# To make texts with line breaks, you can use “|-”
# When you make line breaks, you do not need to use double quotes
# If you include double quotes, they will be part of the text

content: |-
  This is a string
  with line breaks
```

:::

---

### Numbers (`Number`)

The `number` type is a data type that represents any numeric value. Numbers can be integers or decimals.

:::info Number Representation in YAML

```yml
stock: 10 # Integers
price: 3.99 # Decimal Numbers (With decimal point)
```

:::

---

### Booleans (`Boolean`)

The `boolean` type is a data type that represents whether a value is true or false. Boolean values are `true` or `false`.

:::info Boolean Representation in YAML

```yml
is_enabled: true
use_index: false
```

:::

---

### Lists (`Array`)

The `array` type is a data type that represents a list of values. In YAML, there are two ways to represent a list.

:::info Array Representation in YAML

:::code-group

```yml [Single line elements]
# This type of array can be useful for storing single-line elements
# Elements are separated by a comma
# Can be useful for storing simple elements

numbers: [1, 2, 3, 4, 5]
```

```yml [Multiple line elements]
# This type of array can be useful for storing multiple line elements
# Elements are defined with a “-” at the beginning and separated by a new line
# Can be useful for storing complex elements

workers:
  - person:
      name: "John Doe"
      age: 30
  - person:
      name: "Jane Doe"
      age: 25
```

:::tip Data Types
The elements can be of any data type.
:::

---

### Objects (`Object`)

The `object` type is a data type that represents a set of `key-value` pairs.

:::info Set of `key-value` pairs

```yml
# Key name is “key” (string)
# Key value is “value” (string)

key: value
```

:::tip Data Types
The name of the keys are usually of type `string`, while the values can be of any data type.
:::

Pairs are defined using `:` to separate keys from values, and each pair is separated by a new line.

:::info Object Representation in YAML

```yml
person:
  name: "John Doe"
  age: 30
```

:::

Keys must be unique and cannot be duplicated within the same parent.

:::info Parent-Child Hierarchy

:::code-group

```yml [Invalid Object]
parent_object:
  content: "Content 1" # Child of “parent_object”
  content: "Content 2" // [!code error] # Child of “parent_object” [Duplicate Key in the same Parent]
```

```yml [Valid Object]
parent_object:
  content: "Content 1" # Child of “parent_object”

  sub_parent_object: # Child of “parent_object”
    content: "Contenido 2" # Child of “sub_parent_object”
```

:::

## Nesting

YAML structures can be nested to create more complex structures. This is achieved through the use of indentation.

:::warning Indentation
YAML is sensitive to indentation, which is used to define the hierarchy of elements.
:::

:::info Nesting Example

```yml
person:
  name: "John Doe"
  age: 30
  is_underage: false
  hobbies: ["Reading", "Programming", "Athletics"]
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
