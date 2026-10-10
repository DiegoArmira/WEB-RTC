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

---

# Revisión de diseño v2 — D-064 (sin implementación)

## Copy público del bloque fotográfico

Eliminar el párrafo y los rótulos inferidos. El único texto visible será el título
literal de U-01: **“Evidencia visual, fotografías y marcas”**. No habrá captions
editoriales. Las alternativas de texto serán funcionales para accesibilidad, no copy
público, y se validarán con QA.

## Direcciones visuales

| Dirección | Composición | Móvil/escritorio e interacción |
|---|---|---|
| A. Dossier territorial | Titular serif; servicios en columnas; casos en lista; fotos al cierre. | Apilado móvil; sin interacción. Descartada: relega evidencia a galería. |
| B. Evidencia en recorrido **(recomendada)** | Apertura sobria; servicios en pares; cada tramo enlaza caso, logo y foto pertinente; secuencia de evidencia estática. | Banda completa en escritorio y secuencia vertical en móvil; CTA/enlaces normales. |
| C. Archivo de casos | Fichas editoriales desiguales con logo y foto contextual. | Fichas independientes en móvil. Descartada: puede leer casos como portafolio/avales, contrario a RP-02. |

### Recomendación B

Azul para apertura/cierre, crema para lectura, blanco para servicios y oro solo para
CTA/foco. Marca y titular constituyen el único gesto dominante. No se propone
carrusel: ocultaría evidencia esencial y añadiría controles sin orientar mejor cinco
activos. No hay métricas, gradientes, iconos añadidos, autoplay ni animación de
entrada.

## MA-07…MA-11: vínculo, proporción y recorte

| Activo | Relación | Regla futura |
|---|---|---|
| MA-07 | Procesos de capacitación. | Mantener 4:3 natural; actividad completa; sin `cover`, sin cortar personas o pantalla. |
| MA-08 | Líneas de base / trabajo de campo. | Mantener 4:3 natural; foco en diálogo; no recortar rostros, credenciales ni marcas. |
| MA-09 | Apertura secundaria o experiencia, nunca hero. | Mantener 4:3 natural; foco en coordinación; no cortar tablet, credenciales o participantes. |
| MA-10 | Capacitación / enfoque territorial. | Mantener 4:3 natural; encuadre comunitario completo; no cortar personas, posibles menores o contexto escolar. |
| MA-11 | Investigación y levantamiento. | Conservar orientación vertical; columna estrecha o altura automática, sin imponer 4:3; no cortar intercambio, pantalla o documento. |

RP-04 sigue siendo gate de publicación; este plan no autoriza edición ni recorte
correctivo de archivos.

## Skills: principio → decisión → descarte

| Principio | Decisión v2 | Alternativa descartada |
|---|---|---|
| `frontend-design`: gastar audacia en un lugar | Apertura tipográfica azul con marca y titular. | Hero fotográfico o métricas sin respaldo. |
| `frontend-design`: estructura informa | Secuencia caso–logo–foto y bandas por función. | Cards idénticas sin relación factual. |
| `frontend-design`: movimiento deliberado | Sin autoplay ni reveal decorativo. | Carrusel sin orientación narrativa. |
| `rtc-institutional-design`: activos desde narrativa | Cada foto se vincula a uso del manifiesto. | Galería intercambiable. |
| `rtc-institutional-design`: sin avales | Logo junto a caso factual. | Muro de logos o “aliados”. |
| `rtc-institutional-design`: responsive/foco | Horizontal estático en escritorio, vertical en móvil; foco visible. | Hover o interacción que oculte contacto. |

## Evidencia visual futura

| ID | Captura | Prueba |
|---|---|---|
| D-01 | Desktop 1440px: apertura y servicios. | Marca, titular, CTA, contraste, ausencia de hero genérico. |
| D-02 | Desktop 1440px: experiencia y evidencia. | Caso–logo–foto, proporción natural y ausencia de avales. |
| D-03 | Móvil 393px: apertura a servicios. | Orden lineal, legibilidad y CTA sin hover. |
| D-04 | Móvil 393px: evidencia a contacto. | Fotos sin recorte forzado, contacto y foco visible. |

Estas capturas se revisarán junto con E2E, Axe, teclado y contraste; no sustituyen
RP-04.

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
