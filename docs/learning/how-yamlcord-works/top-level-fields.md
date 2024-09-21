# Top Level Fields

The top level fields are fields where YAMLCord will get the input data.

:::warning Top Level Fields
Top level fields are required in YAMLCord.
:::

## List of Top Level Fields

| Name        | Description            |
| ----------- | ---------------------- |
| `sequences` | An array of sequences. |

### Top Level Field: `sequences`

Because YAMLCord is executed by sequences, YAML files must have a top-level field called `sequences`. This field is an array where the sequences to be executed are indicated.

```yml
sequences: # Sequences array
```

:::info Example

```yml
sequences:
  - if: "[message.content] eq '!hello'"
    then:
      - create_message: "Hello, world!"
      - add_reaction: "👋"
```

:::

:::info Learning
You can learn more about sequences in the section [Sequences and Flows][SequencesAndFlows].
:::

[SequencesAndFlows]: ./sequences-and-flows.md
