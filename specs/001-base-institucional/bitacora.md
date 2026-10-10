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
