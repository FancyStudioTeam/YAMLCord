# Secuencias y Flujos

:::info Término de `Secuencia`
En YAMLCord, el término de `secuencia` se refiere a las estructuras condicionales o funciones.
:::

YAMLCord se ejecuta mediante secuencias, las cuales, se ejecutan uno tras otro, teniendo que esperar a que se finalice la anterior secuencia antes de iniciar la siguiente.

:::warning Indicando las Secuencias
Todas las secuencias se indican dentro del campo de nivel superior [`sequences`][SequencesTopLevelField].
:::

Las secuencias pueden ser lineales o bifurcadas.

## Secuencias Lineales

En las secuencias lineales, las secuencias se ejecutan uno tras otro sin interrupciones o bifurcaciones que alteren el flujo.

Las secuencias lineales son las más simples, teniendo una mayor predicción del flujo y siendo la manera más común de ejecutar flujos.

### Ejemplo y Representación de Secuencias Lineales

```yml
sequences:
  - create_message(): "😃 ¡Hola @User! ¿Cómo te va el día?"
  - add_reaction(): "👋"
```

<!-- markdownlint-disable -->
<div style="width: 100%; padding: 20px; background-color: var(--vp-c-bg-alt); border-radius: 8px; box-sizing: border-box; display: flex; justify-content: center; align-items: center;">
  <img src="/assets/LinealSequences.png" style="width: auto; max-height: 500px;" />
</div>
<!-- markdownlint-restore -->

Desde el principio hasta el final, el flujo es lineal, por lo que todas las secuencias se ejecutarán una tras otra, sin interrupciones o bifurcaciones.

## Secuencias Bifurcadas

En las secuencias bifurcadas, el flujo se puede alterar tomando distintos flujos dependiendo del resultado de una condicional.

Las secuencias bifurcadas son las más complejas, teniendo una menor predicción del flujo y siendo la manera más dinámica de ejecutar flujos.

### Ejemplo y Representación de Secuencias Bifurcada

```yml
sequences:
  - if: "[user_id] eq '945029082314338407'"
    then:
      - create_message(): "✅ ¡Eres el propietario del servidor!"
    else:
      - create_message(): "❌ ¡No eres el propietario del servidor!"
```

<!-- markdownlint-disable -->
<div style="width: 100%; padding: 20px; background-color: var(--vp-c-bg-alt); border-radius: 8px; box-sizing: border-box; display: flex; justify-content: center; align-items: center;">
  <img src="/assets/ForkedSequences.png" style="width: auto; max-height: 500px;" />
</div>
<!-- markdownlint-restore -->

Desde el principio hasta la condicional, el flujo es lineal, por lo que todas las secuencias se ejecutarán una tras otra, sin interrupciones o bifurcaciones.

Cuando llega a la condicional, el flujo cambia a un flujo bifurcado, y dependiendo del resultado de la condicional, se ejecutará un flujo u otro, pero nunca se ejecutarán ambos flujos.

- Si el resultado es `true`, solo se ejecutarán las secuencias dentro de `True Result Sequences`.
- Si el resultado es `false`, solo se ejecutarán las secuencias dentro de `False Result Sequences`.

[SequencesTopLevelField]: ./top-level-fields.md#top-level-field-sequences
