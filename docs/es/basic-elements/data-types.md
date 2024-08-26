# Tipos de Datos

:::warning Antes de Empezar
Si eres nuevo en YAML, te recomendamos que veas un tutorial para aprender lo básico de YAML antes de usar FancyScript.

<!-- markdownlint-disable -->
<iframe allowfullscreen src="https://www.youtube.com/embed/0fbnyS_lHW4?si=MwdX3onyJgq-E03K" />
<!-- markdownlint-restore -->
:::

Los tipos de datos son una forma de diferenciar los datos que tenemos por su tipo.

En esta página se hará un resumen rápido sobre los tipos de datos que se usan en FancyScript.

## Cadenas de Texto (`String`)

Un string es un tipo de dato que representa una secuencia de caracteres como letras, números y símbolos. Se usa para almacenar y manipular textos.

En YAML, se puede representar así:

```yml
content: "¡Hola, mundo! Esto es un string de una línea."
```

Para hacer textos con saltos de líneas, puedes usar `|-`

```yml
content: |- # No necesitas usar comillas dobles.
  ¡Hola,
  mundo!
  Esto es un string de varias líneas.
```

## Booleanos (`Boolean`)

Un booleano es un tipo de dato que representa si un valor es verdadero o falso. Los valores de los booleanos son `true` o `false`.

En YAML, se puede representar así:

```yml
is_enabled: true
use_index: false
```
