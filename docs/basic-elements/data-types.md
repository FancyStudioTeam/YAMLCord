# Data Types

:::warning Before You Begin
If you are new to YAML, we recommend that you watch a tutorial to learn the basics of YAML before using FancyScript.

<!-- markdownlint-disable -->
<iframe allowfullscreen src="https://www.youtube.com/embed/0fbnyS_lHW4?si=MwdX3onyJgq-E03K" />
<!-- markdownlint-restore -->
:::

The data types are a way to differentiate the data we have by its type.

This page will give a quick overview of the data types used in FancyScript.

## Text Strings (`String`)

A string is a data type that represents a sequence of characters such as letters, numbers and symbols. It is used to store and manipulate text.

In YAML, it can be represented as follows:

```yml
content: "Hello, world! This is a one line string."
```

To make texts with line breaks, you can use `|-`

```yml
content: |- # No need to use double quotes.
  Hello,
  world!
  This is a multi-line string.
```

## Booleans (`Boolean`)

A boolean is a data type that represents whether a value is true or false. The boolean values are `true` or `false`.

In YAML, it can be represented as follows:

```yml
is_enabled: true
use_index: false
```
