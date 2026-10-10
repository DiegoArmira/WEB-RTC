# Plan visual verificable — Base institucional RTC

## Propósito, audiencia y acción

La landing permite que instituciones públicas, organizaciones y organismos de
cooperación identifiquen rápidamente quién es RTC, sus servicios prioritarios, la
experiencia factual que los respalda y cómo iniciar una conversación. La acción
principal es acceder a contacto mediante el CTA de la apertura o el bloque de cierre.
Esto procede de `knowledge/ux-conceptual-v1.md` §§1–2 y
`knowledge/copy-web-v1.md` §§1 y 6.

## Concepto visual

**Una carpeta de campo convertida en lectura institucional:** azul profundo como
soporte de confianza, oro sobrio para señalar el paso hacia contacto y superficies
claras que dan espacio a la evidencia sin convertir la trayectoria en publicidad.

La decisión evita el hero SaaS, cifras, gradientes decorativos, tarjetas idénticas y
animaciones de plantilla. El elemento memorable será la apertura oscura, donde la
marca RTC y el titular forman una cabecera institucional contenida; el resto mantiene
un ritmo editorial tranquilo y verificable.

## Sistema candidato

Estos valores proponen una implementación futura; no alteran la marca ni sustituyen
la validación de contraste requerida por U-02.

| Rol | Valor / propuesta | Uso y justificación |
|---|---|---|
| Azul institucional | `#0D1B3E` | Fondo de apertura, CTA y cierre; procede de la referencia cromática U-02. |
| Oro de énfasis | `#C9A84C` | Borde, detalle de foco/acción y acento contenido; no texto pequeño sobre blanco. |
| Crema de lectura | `#F7F5EF` | Fondo principal, procedente de U-02; amplia legibilidad para copy extenso. |
| Marfil de superficie | `#FFFFFF` | Separación mínima de casos o grupos cuando la jerarquía la necesite. |
| Tinta | `#18233B` | Texto largo sobre crema/blanco, más amable que el azul pleno sin reducir contraste. |
| Gris de apoyo | `#526078` | Metadatos estrictamente necesarios y líneas funcionales; verificar contraste en tamaño final. |
| Tipografía | Georgia para titulares; sistema sans (`Segoe UI`, Arial, sans-serif) para lectura | La serif expresa el carácter documental/institucional y la sans prioriza legibilidad local sin añadir dependencia. Propuesta a validar en QA, no fuente final impuesta. |

Escala propuesta: `h1` fluida de 2.25–4rem, `h2` de 1.6–2.25rem, cuerpo de 1rem a
1.125rem con interlineado 1.55–1.7 y líneas de 60–72 caracteres. Espaciado basado en
8px, con secciones de 64–112px según viewport. Contenedor máximo aproximado de
72rem, alineado a la izquierda; ninguna longitud visual se implementará sin comprobar
lectura, contraste y responsive.

## Jerarquía y composición

| Bloque | Jerarquía y contenido | Tratamiento |
|---|---|---|
| 1. Presentación | Marca RTC, lema, único `h1`, presentación y CTA de contacto. | Fondo azul; logo original sin redibujar; columna de copy y CTA clara. No usar foto como hero. |
| 2. Servicios | `h2` y cuatro servicios, con explicación breve que conserva sus diferencias. | Cuatro agrupaciones de lectura, no tarjetas clonadas; separación por ritmo y reglas discretas. |
| 3. Capacidades | `h2` y párrafo de respaldo. | Banda clara continua; capacidades como apoyo, no catálogo o nube de etiquetas. |
| 4. Experiencia | `h2`, introducción y cinco casos factuales. | Secuencia editorial; cada caso une nombre, alcance factual y su único logo, sin sellos ni señales de aval. |
| 5. Evidencia visual | `h2`, contexto textual y fotos autorizadas solo si superan gate. | Mosaico sobrio de proporciones naturales; si falta una foto, no se rellena ni se altera el archivo. |
| 6. Contacto | CTA, correo, teléfono y dirección. | Regreso al azul; marca RTC de cierre, acciones de contacto visibles y repetición de la vía de conversión. |

### Wireframe móvil

```text
┌──────────────────────────────┐
│ [logo RTC]                   │
│ Lema                         │
│ H1 + presentación            │
│ [Ir a contacto]              │
├──────────────────────────────┤
│ Servicios                    │
│ Línea de base                │
│ Evaluación intermedia        │
│ Evaluación final             │
│ Capacitación                 │
├──────────────────────────────┤
│ Capacidades y enfoques       │
├──────────────────────────────┤
│ Experiencia: caso + logo     │
│ (repetir cinco en secuencia) │
├──────────────────────────────┤
│ Evidencia: texto + foto*     │
│ (*solo si gate aprobado)     │
├──────────────────────────────┤
│ CTA + correo + tel. + dir.   │
│ [logo RTC]                   │
└──────────────────────────────┘
```

### Wireframe escritorio

```text
┌──────────────────────────────────────────────────────────────────┐
│ [logo RTC]      lema                                               │
│ H1 y presentación                    [CTA: ir a contacto]         │
├──────────────────────────────────────────────────────────────────┤
│ Servicios: línea de base | evaluación intermedia                  │
│            evaluación final | capacitación                         │
├──────────────────────────────────────────────────────────────────┤
│ Capacidades y enfoques (columna editorial de lectura)             │
├──────────────────────────────────────────────────────────────────┤
│ Experiencia: caso factual + logo asociado (ritmo vertical)        │
│              caso factual + logo asociado                          │
├──────────────────────────────────────────────────────────────────┤
│ Evidencia textual          │ fotografía MA aprobada*              │
│ fotografías adicionales en composición asimétrica, si habilitadas │
├──────────────────────────────────────────────────────────────────┤
│ CTA, correo, teléfono, dirección                    [logo RTC]    │
└──────────────────────────────────────────────────────────────────┘
```

## Activos: tratamiento y condición

| ID | Tratamiento futuro | Condición inviolable |
|---|---|---|
| MA-01 | Logo RTC en apertura y cierre, proporción original, sin recorte/redibujo. | Solo identificación institucional. |
| MA-02…MA-06 | Logo pequeño, con tamaño visual contenido junto a su único caso. | Referencia contextual, nunca aval; no CARI/USAID. |
| MA-07 capacitación | Apoyo eventual de capacitación, proporción natural. | Personas y pantalla visibles: gate RP-04 antes de publicación. |
| MA-08 campo | Apoyo eventual para líneas de base/campo. | Personas, prendas/marcas y contexto: gate RP-04. |
| MA-09 experiencia | Nunca como hero; apoyo eventual de coordinación/experiencia. | Personas, credenciales y pantallas: gate RP-04. |
| MA-10 territorio | Apoyo eventual de capacitación/territorialidad. | Personas identificables, incluidas posibles menores, y contexto escolar: gate RP-04. |
| MA-11 investigación | Apoyo eventual de investigación/levantamiento. | Personas y pantalla/documento: gate RP-04. |

No se contempla `hero.png`, `react.svg` ni `vite.svg`: no están en el manifiesto.

## Responsive, interacción y accesibilidad

- Móvil conserva el orden de seis bloques y una sola columna; ningún detalle de
  servicio, caso o contacto queda oculto tras hover, carrusel o acordeón obligatorio.
- Escritorio puede distribuir servicios y evidencia en columnas, sin alterar el orden
  del DOM ni romper la asociación caso–logo.
- El CTA de apertura es un enlace interno a contacto; correo y teléfono son enlaces
  con destino explícito. No se propone formulario, chat, WhatsApp o integración.
- Todo control muestra foco visible de alto contraste, tiene orden de tabulación
  lógico y es operable por teclado. Usar landmarks semánticos y un solo `h1`.
- Las imágenes informativas reciben alternativa contextual; logos se anuncian como
  identidad del caso, no validación. Si un activo es puramente decorativo se marca
  acorde, sin perder evidencia textual.
- No hay movimiento no solicitado. Cualquier transición futura debe responder a una
  acción, respetar reducción de movimiento y no ser condición de comprensión.

## Revisión de singularidad

Se descartaron las soluciones genéricas de hero fotográfico, cuadrícula de métricas,
cards repetidas, gradientes y etiquetas en mayúsculas. La propuesta deriva su ritmo
de una institución que necesita demostrar trazabilidad: titular y marca abren, los
casos se leen como evidencia factual y el oro solo conduce hacia una conversación.

## Decisiones que requieren aprobación ORQ

1. Habilitación individual de MA-07…MA-11 tras revisión de consentimiento, privacidad,
   pantallas, documentos, ubicaciones y marcas. Hasta entonces son un bloqueo de uso
   público, no una licencia para editar/ocultar elementos.
2. QA Senior debe validar contraste efectivo y conveniencia de la pareja tipográfica
   candidata cuando exista una implementación; U-02 no fijó tipografías finales.

No se solicita aprobación para añadir contenido, activos, funciones o arquitectura:
esas acciones están fuera de alcance y se deben elevar si se proponen.

## Corrección requerida antes de una v2 — D-064

Diego/ORQ no aceptó visualmente la implementación v1. Este plan conserva sus
restricciones de contenido y accesibilidad, pero no impone ya una prohibición
general de cards, carrusel, secuencias horizontales ni elementos visuales
contemporáneos. Su uso futuro debe justificarse por jerarquía, narrativa o
orientación del usuario, no por decoración.

La siguiente revisión de diseño deberá:

1. eliminar del copy público cualquier explicación interna, inferida o de
   gobernanza no presente en una fuente de copy canónica;
2. proponer dos o tres direcciones visuales comparables, incluyendo composición,
   tipografía, jerarquía y comportamiento móvil/escritorio;
3. definir el tratamiento individual de MA-07…MA-11; conservar proporciones
   naturales por defecto y documentar cualquier recorte/foco justificado;
4. enlazar las imágenes a servicios o casos cuando aporten evidencia narrativa, en
   vez de reunirlas como galería independiente sin relación contextual;
5. si se propone un carrusel o interacción, asegurar controles visibles, teclado,
   táctil, reducción de movimiento y acceso al contenido sin autoplay ni hover;
6. documentar la aplicación concreta de `frontend-design` y
   `rtc-institutional-design`, las alternativas descartadas y las capturas futuras
   de evidencia visual.

Esta sección corrige la planificación; no autoriza código, activos nuevos,
dependencias, despliegue ni publicación.

## Referencias de patrón para exploración v2 — D-065

Las referencias aportadas por Diego/ORQ se usan como lenguaje visual, no como
material reutilizable. La propuesta debe distinguir el patrón observado de su
adaptación propia para RTC.

| Referencia | Patrón a estudiar | Adaptación permitida para RTC | Límite |
|---|---|---|---|
| KAMBEA, inicio | Hero fotográfico con titular de alta jerarquía, overlay legible y composición de portada. | Considerar una sola fotografía RTC como apertura solo con su gate RP-04, foco documentado y contraste verificable; mantener el logo RTC y copy canónico. | No copiar imagen, marca, texto, estructura ni afirmaciones de KAMBEA. |
| KAMBEA, servicios | Cards con icono, numeración, bordes y jerarquía escaneable. | Presentar los cuatro servicios RTC mediante cards diferenciadas; cualquier icono deberá ser propio, semánticamente prescindible y no exigir una dependencia/asset nuevo. | No convertir las cards en un patrón repetitivo sin prioridad o contenido. |
| KAMBEA, proceso y contacto | Secuencia visual de método y cierre editorial de contacto. | Proponer una secuencia solo si puede sustentarse con proceso RTC canónico; conservar el cierre de contacto como conversación visible y accesible. | “¿Comenzamos a colaborar?” es referencia de intención, no copy autorizado para RTC. |
| KAMBEA, logos | Logos tratados con escala y alineación uniformes. | Crear una secuencia horizontal o carrusel manual de casos RTC, con logo y texto factual más amplio; controles visibles, teclado/táctil, sin autoplay. | Cada logo sigue asociado exclusivamente a su caso; no implica aval. |
| D4Act, sectores | Card que une imagen, etiqueta, título y texto breve relacionado. | Enlazar cada foto RTC a un servicio/caso solo cuando el vínculo factual esté documentado; priorizar proporción natural y foco por activo. | No crear sectores, impactos, estadísticas o copy genérico no documentados. |

### Criterios de selección de dirección v2

La propuesta deberá comparar dos o tres direcciones y, para cada una, mostrar cómo
resuelve: apertura, servicios, experiencia/logos, evidencia fotográfica, contacto,
mobile y accesibilidad. La recomendación no se implementará sin aprobación de
Diego/ORQ.
