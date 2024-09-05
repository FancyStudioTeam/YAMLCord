<!-- markdownlint-disable -->

![Light](/banners/Light.png#light)
![Dark](/banners/Dark.png#dark)

<!-- markdownlint-restore -->

---

FancyScript is an easy-to-use syntax for creating custom actions for Discord bots using YAML.

:::warning Before You Begin
If you are new to YAML, we recommend that you watch a tutorial to learn the basics of YAML before using FancyScript.

We recommend you to watch this tutorial: <https://www.youtube.com/watch?v=0fbnyS_lHW4>
:::

## Example

```yml
# Array of Sequences
sequences:
  # Checks if the content of the message is equal to “!hi”
  - if: "[message.content] eq '!hi'"
    then:
      # The bot creates a message
      - create_message:
          content: "Hello! 👋"
```
