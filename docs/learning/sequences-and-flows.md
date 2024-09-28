# Sequences and Flows

:::info `Sequence` Term
In YAMLCord, the term `sequence` refers to conditional structures or functions.
:::

YAMLCord is executed in sequences, which are executed one after the other, having to wait for the previous sequence to finish before starting the next one.

:::warning Indicating Sequences
All sequences are indicated within the top-level [`sequences`][SequencesTopLevelField] field.
:::

Sequences can be linear or forked.

## Linear Sequences

In linear sequences, sequences are executed one after the other without interruptions or bifurcations that alter the flow.

Linear sequences are the simplest, having the best flow predictability and being the most common way of executing flows.

### Example and Representation of Linear Sequences

```yml
sequences:
  - create_message(): "😃 Hello @User! How is your day going on?"
  - add_reaction(): "👋"
```

<!-- markdownlint-disable -->
<div style="width: 100%; padding: 20px; background-color: var(--vp-c-bg-alt); border-radius: 8px; box-sizing: border-box; display: flex; justify-content: center; align-items: center;">
  <img src="/assets/LinealSequences.png" style="width: auto; max-height: 500px;" />
</div>
<!-- markdownlint-restore -->

From the beginning to the end, the flow is linear, so all sequences will be executed one after the other, without interruptions or bifurcations.

## Forked Sequences

In forked sequences, the flow can be altered by taking different flows depending on the result of a conditional.

Forked sequences are the most complex, having less flow predictability and being the most dynamic way to execute flows.

### Example and Representation of Forked Sequences

```yml
sequences:
  - if: "[user_id] eq '945029082314338407'"
    then:
      - create_message(): "✅ You are the owner of the server!"
    else:
      - create_message(): "❌ You are not the owner of the server!"
```

<!-- markdownlint-disable -->
<div style="width: 100%; padding: 20px; background-color: var(--vp-c-bg-alt); border-radius: 8px; box-sizing: border-box; display: flex; justify-content: center; align-items: center;">
  <img src="/assets/ForkedSequences.png" style="width: auto; max-height: 500px;" />
</div>
<!-- markdownlint-restore -->

From the beginning to the conditional, the flow is linear, so all sequences will be executed one after the other, without interruptions or bifurcations.

When it reaches the conditional, the flow changes to a forked flow, and depending on the result of the conditional, one flow or the other will be executed, but never both flows will be executed.

- If the result is `true`, only the sequences within `True Result Sequences` will be executed.
- If the result is `false`, only sequences within `False Result Sequences` will be executed.

[SequencesTopLevelField]: ./top-level-fields.md#top-level-field-sequences
