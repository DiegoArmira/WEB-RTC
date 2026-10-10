# Bitácora — Spec 001 Base institucional

## 2026-10-10 — Planificación D-060

**Estado:** completada únicamente la planificación autorizada. No se modificó código,
componentes, pruebas, configuración, dependencias, activos ni despliegue; tampoco se
ejecutaron comandos de prueba.

### Evidencia consultada

- `spec.md` y `specs/AGENTS.md`: D-060 permite exclusivamente los cuatro Markdown
  de esta carpeta; la spec conserva alcance local/no productivo y estrategia
  test-first.
- `docs/architecture-v1.md` y `docs/test-strategy-v1.md`: landing estática,
  accesible, responsive, sin servicios de datos ni integraciones; capas futuras de
  verificación.
- `knowledge/copy-web-v1.md`, `ux-conceptual-v1.md` y
  `recorrido-conceptual.html`: seis bloques, copy, orden, recorridos, casos y
  contacto aprobados como fuentes operativas.
- `knowledge/manifiesto-activos.md` y `restricciones-publicacion.md`: MA-01…MA-11,
  asociación exclusiva de logos a casos y RP-01…RP-06.
- `src/assets/`: presentes las rutas MA-01…MA-11 y sus checksums coinciden con
  `docs/bootstrap-assets-sha256.txt`. Los assets de scaffold no manifestados quedan
  fuera del futuro consumo de la landing.

### Decisiones de planificación

1. La composición futura preservará exactamente el orden presentación → servicios
   → capacidades → experiencia → evidencia visual → contacto; el atajo a contacto
   parte de la apertura.
2. El contenido se mantendrá como datos locales trazables, separado de la
   composición. No se añadirá contenido ni se reinterpretarán hechos.
3. Cada logo de MA-02…MA-06 aparecerá únicamente con su caso y sin lenguaje de aval.
4. Las fotos MA-07…MA-11 no son sustitutos necesarios de contenido: si no se
   aprueban sus controles, se omitirán y el bloque conservará copy autorizado.
5. La planificación adopta la propuesta visual de `design-plan.md`; sus tokens son
   candidatos de implementación sujetos a contraste y revisión QA, no cambios de
   marca.

### Riesgos y bloqueos para QA Senior Diego/ORQ

| Tipo | Hallazgo | Acción requerida |
|---|---|---|
| Privacidad/publicación — bloqueo de uso público de fotos | La inspección visual revela personas identificables en MA-07…MA-11; además hay pantallas/documentos o posibles credenciales/marcas visibles en varias imágenes. RP-04 exige revisión previa. | ORQ debe decidir/documentar consentimiento, privacidad, contexto, pantallas, ubicaciones y marcas por foto. Hasta entonces, no usar públicamente el asset afectado. |
| Contenido | `copy-web-v1.md` se clasifica como copy candidato y conserva condiciones de publicación. | QA/ORQ valida que la implementación futura no exceda textos, contactos ni condiciones del copy. |
| Accesibilidad | U-02 deja contraste, legibilidad y responsive para fase posterior. | Validar tokens implementados con contraste y ejecutar a11y/teclado antes de aceptación. |
| Integridad de marca | Logos de terceros solo son contexto de casos, no aval; CARI/USAID no tienen activo autorizado. | Verificar asociación exacta caso–logo y excluir CARI/USAID. |

No hay bloqueo de arquitectura identificado: arquitectura v1 y alcance de la spec son
compatibles. Cualquier cambio material de seguridad, alcance, arquitectura, copy o
activos se eleva antes de corregirse o implementarse.

### Supuestos controlados

- La futura implementación seguirá siendo local/no productiva hasta una autorización
  distinta.
- La ausencia de fotos habilitadas no impide cumplir R-01…R-06 si los bloques
  mantienen contenido textual autorizado; su uso no se infiere.
- La elección concreta de CSS/componentes queda fuera de D-060 y no se ha iniciado.

## 2026-10-10 — Implementación D-062

**Resultado:** landing estática local implementada test-first. Se crearon primero las
pruebas de componente, E2E y a11y; la primera ejecución de `test:run` falló con 3
fallos contra el scaffold (sin bloques, copy ni landmarks), antes de sustituirlo.

### Rutas modificadas

- `src/App.tsx`, `src/App.css`, `src/index.css`: seis bloques semánticos, responsive,
  CTA interno, contacto y foco visible.
- `src/content.ts`: copy trazable, casos y las rutas MA-02…MA-11 separados de la
  composición; `App.tsx` consume MA-01. No se usan assets de scaffold.
- `src/App.test.tsx`, `src/test/setup.ts`: prueba de orden/contenido, asociaciones
  caso–logo y landmarks/enlaces.
- `e2e/scaffold.spec.ts`, `e2e/a11y.spec.ts`: recorrido móvil/escritorio, teclado y
  Axe con cero violaciones.

### Requisito → prueba → resultado

| Requisito | Prueba | Resultado |
|---|---|---|
| R-01 / AC-01 | `src/App.test.tsx`: seis bloques, jerarquía y copy esencial. | Pasa: 3 pruebas de componente. |
| R-02 / AC-02 | `src/App.test.tsx`: cinco casos y su logo MA asociado; sin WhatsApp. | Pasa. |
| R-03 | `e2e/scaffold.spec.ts`: recorrido y contacto en proyectos `mobile` y `desktop`. | Pasa en ambos viewports. |
| R-04 | Componente: landmarks/enlaces; E2E: foco de teclado en CTA. | Pasa en móvil y escritorio. |
| R-05 | `e2e/a11y.spec.ts` con Axe. | Pasa: cero violaciones en móvil y escritorio. |
| R-06 / AC-03 / AC-05 | Revisión de rutas, tipo y build. | Pasa; sin dependencias ni capacidades excluidas. |

### Salidas de verificación

- `npm.cmd run typecheck`: pasa, sin salida de errores.
- `npm.cmd run build`: pasa; Vite transforma 29 módulos y genera `dist` local.
- `npm.cmd run test:run`: pasa, 1 archivo / 3 pruebas.
- `npm.cmd run test:e2e`: pasa, 6 pruebas (recorrido, teclado y a11y en móvil y escritorio).
- `npm.cmd run test:a11y`: pasa, 2 pruebas Axe (móvil y escritorio), cero violaciones.

**Evidencia responsive:** Playwright ejecutó el recorrido institucional y el contacto
en `Pixel 5` y `Desktop Chrome`; ambos proyectos pasaron. Esta entrega queda detenida
para revisión QA Senior de Diego/ORQ. Las condiciones RP-04 sobre publicación de
fotografías siguen vigentes fuera de este entorno local/no productivo.

## 2026-10-10 — Revisión de planificación visual v2, D-064

**Alcance:** se modificaron solo los cuatro Markdown autorizados. No se modificaron
código, CSS, pruebas, activos, configuración o dependencias; no se ejecutaron pruebas.

- Se compararon Dossier territorial, Evidencia en recorrido y Archivo de casos; se
  recomienda Evidencia en recorrido porque une evidencia y mensaje sin convertir
  instituciones en avales.
- Se descarta carrusel: ocultaría evidencia esencial y no aporta orientación para
  cinco activos. Se propone secuencia estática en escritorio y lineal en móvil.
- Se elimina del plan el copy fotográfico inferido: texto visible limitado a
  “Evidencia visual, fotografías y marcas”, literal de U-01.
- Se documentan reglas individuales de vínculo, proporción, foco y recorte para
  MA-07…MA-11; queda prohibido el patrón uniforme `4:3 + object-fit: cover`.
- `design-plan.md` mapea principios concretos de `frontend-design` y
  `rtc-institutional-design` a decisiones y descartes, y define D-01…D-04 como
  evidencia visual futura junto con E2E/Axe.

**Gate:** D-064 no autoriza implementar. Dirección B, copy literal, fotos y capturas
quedan detenidos para QA Senior de Diego/ORQ.

## 2026-10-10 — QA de planificación y autorización de implementación

- Diego/ORQ aceptó el QA del paquete de planificación (D-061).
- Diego/ORQ habilitó MA-07…MA-11 para la implementación local/no productiva tras su
  revisión de privacidad, consentimiento, contexto, pantallas/documentos y marcas.
  No autoriza despliegue ni producción.
- D-062 autoriza la implementación test-first, incluidas las pruebas, los componentes
  mínimos y los cinco comandos de verificación previstos por la spec.
- No se han creado o modificado todavía componentes, pruebas, configuración,
  dependencias ni activos como resultado de D-061/D-062.

## 2026-10-10 — Reparto de QA D-063

- Diego/ORQ realizará el QA Senior visual y de experiencia: ejecución local,
  recorridos, botones, enlaces y comportamiento en desktop/móvil.
- Office revisará de forma técnica el código, alcance, diffs, mensajes, evidencias,
  resultados de pruebas y trazabilidad, y preparará la guía de validación visual.
- La revisión técnica no sustituye la aceptación visual, funcional ni final de
  Diego/ORQ; toda entrega de Codex permanece detenida hasta su decisión explícita.

## 2026-10-10 — QA visual v1 y corrección de planificación D-064

- Diego/ORQ no acepta visualmente la implementación v1 como dirección final:
  identifica una composición estática, tratamiento insuficiente de las imágenes y
  falta de riqueza visual contemporánea.
- La auditoría de Office confirma que el texto de contexto de fotografías escrito
  en `App.tsx` no procede de una fuente de copy pública canónica; se clasifica como
  copy no autorizado para una futura versión pública.
- La auditoría retrospectiva de Codex confirma que todas las fotos se fuerzan a
  `aspect-ratio: 4/3` y `object-fit: cover`, pese a que el plan requería
  proporciones naturales. Su corrección debe decidirse por activo, no aplicarse de
  manera uniforme.
- Existe evidencia de lectura declarada y aplicación parcial de las skills de
  diseño, pero no una trazabilidad persistente de alternativas creativas ni de su
  impacto. La próxima planificación debe registrar esa relación explícitamente.
- D-064 autoriza solo alinear la planificación de diseño v2; ningún cambio de
  código queda autorizado hasta una nueva aprobación explícita de Diego/ORQ.

## 2026-10-10 — Referencias visuales v2 D-065

- Diego/ORQ aporta KAMBEA y D4Act como referencias visuales prioritarias para
  explorar la v2: composición de portada, jerarquía, cards de servicios, secuencia
  de proceso, logos/casos, fotografía con texto y cierre de contacto.
- Las referencias no autorizan reutilizar copy, marca, imágenes, código ni
  componentes de terceros. El texto de contacto de KAMBEA funciona como intención
  de diseño, no como copy autorizado de RTC.
- Todo copy RTC nuevo, genérico o abstraído que no sea literal de fuente canónica
  queda como propuesta pendiente de revisión de Diego/ORQ; no podrá llegar a la
  interfaz por inferencia.

## 2026-10-10 — Integración v2 D-066

- Se reconcilian la recomendación «Evidencia en recorrido» de D-064 y los patrones
  KAMBEA/D4Act de D-065: la secuencia estática conserva la evidencia primaria;
  cards, hero fotográfico responsable y una banda manual secundaria pueden aportar
  jerarquía sin ocultar información.
- Se corrige la trazabilidad de `plan.md` y `tasks.md`: la implementación y pruebas
  v1 de D-062 ya ocurrieron; lo pendiente es únicamente autorización para una
  implementación visual v2.
- El patrón «Cómo trabajamos» queda como posibilidad de diseño, no como sección
  autorizada: requiere proceso RTC y copy explícitamente aprobados.
- Esta integración no modifica implementación, pruebas, activos, configuración,
  dependencias, despliegue ni publicación.

## 2026-10-10 — Autorización de implementación visual v2 D-067

- Diego/ORQ autoriza implementar test-first la dirección D-066, sin dependencias,
  assets o copy no aprobados y sin despliegue.
- La ejecución debe partir de pruebas proporcionales, conservar los seis bloques y
  los límites de contenido, y entregar los cinco controles técnicos más D-01…D-04
  para QA Senior.
- Ninguna aceptación visual, funcional, de publicación o producción se infiere de
  esta autorización.

## 2026-10-10 — Entrega visual v2 local D-067

**Estado:** implementada «Evidencia en recorrido enriquecida» bajo D-067, sin commit,
publicación ni despliegue. Detenida para QA Senior de Diego/ORQ. Esta verificación
no equivale a aceptación visual, funcional ni final.

## 2026-10-10 — Preview temporal externa D-068

- Diego/ORQ autoriza explícitamente avanzar con la corrección de portabilidad de
  pruebas y con una preview temporal pública sin dominio mediante GitHub Pages.
- El script `test:run` establece `NODE_ENV=test` mediante un wrapper Node
  multiplataforma; así evita que una variable de entorno heredada en producción
  cargue la variante no apta de React para pruebas.
- El workflow `.github/workflows/pages-preview.yml` es manual (`workflow_dispatch`),
  ejecuta typecheck, pruebas de componente y build antes de publicar `dist`; usa la
  base `/WEB-RTC/` solo dentro de ese build.
- La preview externa incluye MA-07…MA-11 conforme a D-061. Es pública, no sustituye
  la QA Senior ni constituye producción. T-025 queda pendiente hasta que GitHub
  Pages esté habilitado y el despliegue sea verificable.

### Fuentes y alcance ejecutado

Se leyeron spec, design-plan, plan, tasks, esta bitácora y specs/AGENTS.md; se aplicaron
`.codex/skills/rtc-institutional-design/SKILL.md` y la skill global
`C:/Users/diego/.agents/skills/frontend-design/SKILL.md`. Contenido, UX, restricciones
y activos proceden exclusivamente de `knowledge/copy-web-v1.md`,
`knowledge/ux-conceptual-v1.md`, `knowledge/recorrido-conceptual.html`,
`knowledge/manifiesto-activos.md`, `knowledge/restricciones-publicacion.md`,
`docs/architecture-v1.md` y `src/assets/`.

La concreción visual se añadió a design-plan antes de modificar componentes/estilos.
D-066/D-067 prevalecen sobre las prohibiciones históricas de v1. No se consultaron
Vault ni referencias externas para redescubrir diseño/copy/assets. Context7 se consultó
solo para la API screenshot/clip de Playwright instalada (1.64): documentación primaria
`/microsoft/playwright`, sin cambiar paquetes ni configuración.

- Apertura: MA-08 completa en panel junto al bloque tipográfico azul, sin overlay;
  rostros, diálogo y dispositivos permanecen en el encuadre original.
- Servicios: base amplia, evaluaciones en par, capacitación amplia con MA-07;
  cuatro cards con copy completo, índice visual 01–04 y recursos CSS prescindibles
  bajo `aria-hidden`. Los números indican orden de catálogo, no un proceso RTC.
- Capacidades: MA-11 vertical junto al texto canónico de investigación/enfoques.
- Experiencia: MA-09 acompaña la introducción general, nunca la apertura. Cinco
  cards estáticas, cada una con su logo MA-02…MA-06 y alcance factual completo.
- No hay vínculo documental foto–proyecto concreto. Por ello no se atribuyen fotos
  a casos particulares; sí se mantienen los vínculos contextuales autorizados.
- Evidencia: MA-10 completa, con el único copy visible «Evidencia visual,
  fotografías y marcas»; se eliminaron el párrafo y todos los captions inferidos.
- Se conservan seis bloques, landmarks, un h1, orden DOM, CTA, contacto canónico,
  teclado, foco visible y reduced motion. No carrusel: no aporta orientación adicional
  a esta secuencia estática. No «Cómo trabajamos» ni nuevo copy público.

### Rutas modificadas / creadas

| Ruta | Cambio |
|---|---|
| `src/App.tsx` | Composición semántica v2; fotografía contextual por bloque, cards, contacto enfocable; eliminación de copy inferido. |
| `src/App.css` | Panel de apertura, jerarquía de cards, casos amplios, proporciones naturales, responsive y foco. |
| `src/content.ts` | Fotos como datos trazables MA con dimensiones originales y alt funcional; sin captions. Servicios/casos conservan copy. |
| `src/App.test.tsx` | Dos pruebas v2 además de las tres vigentes. |
| `e2e/scaffold.spec.ts` | Geometría de cinco fotos, no cover, reflow, reduced motion y outline del CTA; conserva recorrido/teclado. |
| `design-plan.md`, `plan.md`, `tasks.md`, `bitacora.md` | Concreción previa, estado D-067, tareas completadas y trazabilidad de entrega. |
| `evidence/capture.mjs` | Captura reproducible con Playwright existente; recorrido de teclado a correo, sin modificar la página ni las imágenes. |
| `evidence/D-01.png`…`D-04.png`, `capacidades-desktop.png`, `capacidades-mobile.png` | Evidencia de QA; no son assets consumidos por la aplicación. |
| `evidence/typecheck.txt`, `build.txt`, `test-run.txt`, `test-e2e.txt`, `test-a11y.txt`, `assets-integrity.txt` | Salidas finales de controles y verificación SHA-256. |

Todas las rutas documentales y de evidencia anteriores son relativas a
`specs/001-base-institucional/`, salvo las rutas explícitas `src/` y `e2e/`.
No cambios en dependencias, lockfile, configuración, activos originales, backend,
integraciones, formularios, WhatsApp ni despliegue.

### Test-first: fallo comprobado antes de componentes/estilos

1. Se añadieron dos pruebas a `src/App.test.tsx` y el E2E de geometría/contexto.
2. `npm.cmd run test:run` contra v1: **exit 1**, 3 pasan / 2 fallan. La primera
   falla porque `#presentacion img[src*="rtc-campo-01"]` no existe; la segunda
   recibe el párrafo/captions inferidos en lugar del único título canónico.
3. `npm.cmd run test:e2e -- --grep "v2 preserves"` contra v1: **exit 1**, dos fallos
   (mobile/desktop), por ausencia de la fotografía de apertura. Esa ejecución se
   detuvo en dicha aserción; todavía no alcanzó la comprobación de proporciones.
4. Solo entonces se modificaron contenido/composición/CSS. Las mismas pruebas pasan.
   Axe vigente se conservó como regresión proporcional; no se fabricó un fallo a11y
   en una v1 que ya cumplía su comprobación automática.

### Requisito → prueba → resultado final

| Requisito | Prueba / revisión | Resultado |
|---|---|---|
| R-01 / AC-01: seis bloques, orden y jerarquía | Componente: ids, un h1 y cinco h2; E2E: seis bloques. | Pasa; mismo recorrido conceptual. |
| R-02 / AC-02 / D-066: apertura fotográfica y cards | Componente: MA-08 en apertura, cuatro cards, copy completo, numeración oculta semánticamente y MA-07 en capacitación. | Pasa; D-01 / D-03. |
| R-02 / RP-02/03: caso–logo y solo MA-01…MA-11 | Componente: cinco asociaciones exactas, lista de imágenes permitidas, ausencia de fotos atribuidas a casos. SHA-256 contra `docs/bootstrap-assets-sha256.txt`. | Pasa; 11/11 activos íntegros; D-02. |
| R-02 / D-064: copy fotográfico literal | Componente: texto completo del bloque igual a título canónico, ningún figcaption ni «Cómo trabajamos». | Pasa; D-02 / D-04. |
| D-066: reglas MA-07…MA-11 | E2E: cinco fotos cargadas/visibles, relación ancho/alto renderizada igual a natural (tolerancia <0.01), ningún object-fit cover. | Pasa mobile/desktop; 07/08/09/10 en 4:3, 11 en 3:4, sin recorte. |
| R-03: responsive/contacto sin hover | E2E: recorrido, CTA y canales visibles, documento sin overflow horizontal. | Pasa Pixel 5 393px y Desktop Chrome 1280px; capturas adicionales 1440px. |
| R-04: landmarks/teclado/foco/movimiento | Componente: banner/main/contentinfo y enlaces; E2E: primer Tab enfoca CTA con outline sólido, scroll auto bajo reduced motion. Capturador: Tab → Enter → Tab enfoca correo. | Pasa ambos proyectos; foco de correo documentado en D-04. |
| R-05: accesibilidad automática | Axe de página completa, mobile y desktop. | Cero violaciones detectables en ambos. |
| Contraste efectivo de paleta | Cálculo WCAG de luminancia sRGB de pares CSS y revisión de capturas; texto fuera de fotos. | Blanco/azul 16.89:1; tinta/crema 14.35:1; gris/crema 5.83:1; gris/blanco 6.36:1; marfil/azul 12.33:1; azul/oro CTA 7.39:1; tinta/banda 11.42:1. |
| R-06 / AC-03/05 | Tipos/build, revisión de diff, integridad de assets y ausencia de cambios en paquetes/configuración. | Pasa; estático, local/no productivo. |
| AC-04 | Cinco comandos Windows, salidas en `evidence/*.txt`. | Todos exit 0. |

### Salidas finales de los cinco controles

| Comando | Resultado | Salida persistida |
|---|---|---|
| `npm.cmd run typecheck` | exit 0; sin errores | [typecheck.txt](evidence/typecheck.txt) |
| `npm.cmd run build` | exit 0; 29 módulos; dist local generado | [build.txt](evidence/build.txt) |
| `npm.cmd run test:run` | exit 0; 1 archivo, 5 pruebas pasan | [test-run.txt](evidence/test-run.txt) |
| `npm.cmd run test:e2e` | exit 0; 8 pruebas pasan en mobile/desktop, incluidas dos Axe | [test-e2e.txt](evidence/test-e2e.txt) |
| `npm.cmd run test:a11y` | exit 0; 2 pruebas, cero violaciones Axe | [test-a11y.txt](evidence/test-a11y.txt) |

### Skills: principio → aplicación verificable → descarte → evidencia

| Skill / principio | Aplicación concreta | Descarte motivado | Evidencia |
|---|---|---|---|
| frontend-design: apertura propia del tema; audacia concentrada | Titular serif de alta jerarquía + diálogo RTC completo en panel azul, texto separado de la foto. | Fondo genérico, overlay que comprometa contraste, MA-09 como hero. | `.opening-grid`, `.opening-photo`; D-01 / D-03. |
| frontend-design: tipografía intencional, líneas breves | Georgia para títulos, Segoe UI para lectura; longitudes limitadas por bloque; sin etiquetas nuevas ni mayúsculas decorativas. | Nueva fuente/dependencia, destacar una palabra arbitraria, copy de relleno. | Reglas h1/h2/.reading; D-01…D-04. |
| frontend-design: estructura informa | Base amplia, par de evaluaciones comparables y capacitación con contexto; índice 01–04 solicitado, sin insinuar método. | Cuatro cards clonadas, métricas ficticias o secuencia «Cómo trabajamos». | `.service-1`…`.service-4`, prueba de cards; D-01 / D-03. |
| frontend-design: moderación y autocrítica visual | Sin animaciones/reveals; revisión de las seis capturas; ajuste de separación número/recurso de base en móvil antes de controles finales. | Carrusel secundario sin utilidad, icon library, accesorios/efectos extra. | `.service-1 .service-marker` móvil, E2E reduced motion, D-03 final. |
| rtc-institutional-design: fuentes/plan antes del código | Concreción D-067 añadida tras pruebas rojas y antes de componentes/CSS; copy literal. | Inferencia de copy o reutilización de terceros. | design-plan §Concreción, prueba de texto del bloque, registro rojo/verde. |
| rtc-institutional-design: evidencia narrativa y proporción | 07 capacitación, 08 campo/apertura, 09 experiencia general, 10 territorio, 11 investigación vertical; logo junto al único caso. | Fotos por proyecto sin sustento, recorte uniforme, muro de avales. | `content.ts`, `Photo`, asociaciones de componente, E2E geométrico, D-02 y capturas de capacidades. |
| rtc-institutional-design: responsive/foco/QA | Secuencia estática, contacto accesible, foco contrastante y pruebas móviles; entrega detenida para QA Senior. | Contenido dependiente de hover/autoplay, aceptación visual inferida de Axe. | E2E/Axe y D-04 con foco. |

### Evidencia D-01…D-04 y revisión realizada

| ID / archivo | Viewport y superficie | Observación de revisión local (no aceptación QA Senior) |
|---|---|---|
| [D-01](evidence/D-01.png) | Desktop 1440×1000; captura de apertura a fin de servicios (1440×2145). | Marca, bloque tipográfico, foto completa sin superposición de texto, cuatro cards con jerarquía diferenciada y copy íntegro. |
| [D-02](evidence/D-02.png) | Desktop 1440×1000; experiencia y evidencia (1440×2593). | MA-09 fuera de casos; cinco casos con su logo; MA-10 completa; solo título canónico en evidencia. |
| [D-03](evidence/D-03.png) | Pixel 5, 393×851; apertura y servicios (393×3033). | Orden lineal; CTA antes de foto; cards legibles con índice separado; capacitación con foto completa. |
| [D-04](evidence/D-04.png) | Pixel 5, 393×851; evidencia a contacto (393×1101). | MA-10 íntegra, canales visibles y correo con foco de teclado contrastante. |

Complementos: [capacidades desktop](evidence/capacidades-desktop.png) (1440×602) y
[capacidades móvil](evidence/capacidades-mobile.png) (393×903) muestran MA-11 vertical
completa junto a su contexto canónico. Se inspeccionaron visualmente los originales
y las seis capturas; no se editaron imágenes. Los 11 hashes coinciden:
[assets-integrity.txt](evidence/assets-integrity.txt).

Reproducción local: `npm.cmd run dev -- --host 127.0.0.1 --port 4173`; con ese servidor
activo ejecutar `node specs/001-base-institucional/evidence/capture.mjs`. El capturador
usa reduced motion, carga/decodifica imágenes y conserva la página real sin máscaras,
CSS de captura ni contenido añadido. Las capturas de tramo se extienden más allá del
viewport para mostrar todo el bloque; no son una sola pantalla de altura fija.

### Revisión pendiente de Diego/ORQ

En `http://127.0.0.1:4173/`, revisar apertura → servicios → capacidades → experiencia
→ evidencia → contacto en 1440px y 393px. Validar adecuación visual, asociación de
logos, encuadres, legibilidad, enlaces y recorrido por teclado; desde el CTA usar
Tab → Enter → Tab para llegar al correo. Confirmar aceptación o registrar ajustes.
Las imágenes originales conservan su peso (sin transformaciones autorizadas); la
carga diferida se aplica fuera de apertura. RP-04 continúa vigente para cualquier
publicación futura. No se identificaron ambigüedades materiales nuevas ni desviaciones
de alcance. No se incorpora foto por caso por ausencia de vínculo factual, de acuerdo
con la condición «solo cuando sea factual» de D-066/D-067.

**Gate final:** trabajo detenido para QA Senior de Diego/ORQ; sin commit ni publicación.
