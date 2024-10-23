# Proposal: `Custom Variables`

Custom Variables are useful to store data that can be used in multiple places in your script. They can store any kind of data, including strings, numbers, arrays and more.

## Defining Custom Variables

To declare a custom variable, each custom variable name must start with the `$` symbol, followed by the variable name, and they can have any kind of data type.

> [!CAUTION]
> Custom variables names can not contain special characters (like blank spaces, dots...) and they are case sensitive.

### Example

```yaml
$name: "John Doe"
$age: 25
$activeWorker: true
```

There are two ways about where you can define your custom variables:

1. **Declaring them in the `variables` top level property. (Recommended)**

The `variables` top level property is an array that only contains all the custom variables you want to define.

Declaring your custom variables in the `variables` top level property is the recommended way to define custom variables, because they are easier to read and maintain.

```yml
variables:
  - $message: "Hello, world!" # This is a custom variable

sequences:
  - create_message(): "[message]"
```

2. **Declaring them in the `sequences` top level property.**

Declaring your custom variables in the `sequences` top level property can be quite messy, because they are mixed with all the sequences of the script, and can be hard to read and maintain.

> [!CAUTION]
> You need to declare your custom variable before using it.

```yml
sequences:
  - $message: "Hello, world!" # This is a custom variable
  - create_message(): "[message]"
```
