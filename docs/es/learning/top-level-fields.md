# Campos de Nivel Superior

Los campos de nivel superior son campos donde YAMLCord obtendrá los datos de entrada.

## Lista de Campos de Nivel Superior

- `sequences` (`array`): Un array de secuencias.

### Campo Superior: `sequences`

Debido que YAMLCord se ejecuta mediante secuencias, los archivos YAML deben tener un campo de nivel superior llamado `sequences`. Este campo es un array donde se indican las secuencias a ejecutar.

```yml
sequences: # Array de secuencias
```

:::info Ejemplo de Secuencias

```yml
sequences:
  - create_message(): "¡Hola, mundo!"
  - add_reaction(): "👋"
```

:::

:::info Aprendiendo
Puedes aprender más sobre las secuencias en la sección [Secuencias y Flujos][SequencesAndFlows].
:::

[SequencesAndFlows]: ./sequences-and-flows.md
