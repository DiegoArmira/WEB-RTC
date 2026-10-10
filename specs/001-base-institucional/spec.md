---
id: 001-base-institucional
unit: U-04
status: approved_for_implementation
date: 2026-10-10
decision: D-062
---

# Spec 001 — Base institucional

## Propósito

Implementar en entorno no productivo la primera base institucional de la landing
RTC como aplicación estática React + TypeScript + Vite. La entrega cubre los seis
bloques aprobados: presentación, servicios, capacidades, experiencia, evidencia
visual y contacto.

## Fuentes operativas obligatorias

Usar únicamente estas superficies del repositorio:

- `docs/architecture-v1.md`
- `knowledge/copy-web-v1.md`
- `knowledge/ux-conceptual-v1.md`
- `knowledge/recorrido-conceptual.html`
- `knowledge/restricciones-publicacion.md`
- `knowledge/manifiesto-activos.md`
- `src/assets/`
- `specs/AGENTS.md`
- `.codex/skills/rtc-institutional-design/`

No consultar el Vault ni fuentes originales para reinterpretar contenido, UX o
activos. Si hay una ambigüedad material, detenerse y elevarla a Office/ORQ.

## Alcance

- Construir componentes semánticos y responsive para los seis bloques.
- Consumir solo copy y activos del manifiesto autorizado.
- Mantener contenido separado de la composición de componentes.
- Asegurar navegación por teclado, foco visible, landmarks, jerarquía de
  encabezados, alternativas contextuales y contraste verificable.
- Ejecutar tipos, build, pruebas unitarias/de componente, E2E y a11y de la
  superficie implementada.

## Fuera de alcance

No incorporar backend, API, autenticación, CMS, base de datos, área privada,
pagos, integraciones externas, hosting, dominio, DNS, preview público,
despliegue ni contenido/activos fuera del manifiesto.

## Requisitos verificables

- **R-01 — EARS:** Cuando se renderice la landing, el sistema deberá presentar los
  seis bloques institucionales en el orden y jerarquía definidos por U-02.
- **R-02 — EARS:** Cuando se renderice cada bloque, el sistema deberá usar solo
  copy y activos permitidos por las superficies operativas.
- **R-03 — EARS:** Cuando el viewport sea reducido o amplio, el contenido esencial
  y el contacto deberán estar disponibles sin depender de hover.
- **R-04:** La superficie implementada deberá usar landmarks y encabezados
  semánticos, permitir interacción por teclado y mantener foco visible.
- **R-05:** La prueba a11y de esta spec deberá informar cero violaciones
  automáticamente detectables en la superficie implementada.
- **R-06:** La implementación no deberá introducir capacidades excluidas por
  `docs/architecture-v1.md`.

## Criterios de aceptación

- **AC-01:** Los seis bloques se corresponden con la estructura y contenido
  aprobados, sin reinterpretar fuentes externas.
- **AC-02:** Los servicios prioritarios, experiencia, evidencia visual y contacto
  usan exclusivamente datos y assets autorizados.
- **AC-03:** No existen funciones o dependencias excluidas por arquitectura v1.
- **AC-04:** Tipos, build, pruebas de componente, E2E y a11y pasan con evidencia
  reproducible en Windows.
- **AC-05:** El resultado permanece local/no productivo y no contiene configuración
  de despliegue.

## Estrategia test-first

Antes de crear o modificar componentes, definir y hacer fallar las pruebas
proporcionales:

1. pruebas de componente para presencia, orden y contenido esencial de los seis
   bloques;
2. prueba E2E para carga y recorrido institucional en móvil y escritorio;
3. prueba a11y específica de esta superficie que exija cero violaciones;
4. tipo y build como controles estáticos.

Solo después implementar el código mínimo para satisfacerlas.

## Evidencia requerida

- Rutas modificadas y correspondencia requisito → prueba → resultado.
- Salida de `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd run test:run`,
  `npm.cmd run test:e2e` y `npm.cmd run test:a11y`.
- Capturas o evidencia de comportamiento móvil/escritorio si la prueba no lo
  expresa suficientemente.
- Registro de cualquier ambigüedad o desviación material en `bitacora.md`.

## Activación Codex D-062 — histórica, completada para v1

Este spec está aprobado para la implementación test-first indicada en D-062. Usar
este único texto en una conversación nueva de Codex/VS Code:

> Lee `specs/001-base-institucional/spec.md`, `specs/AGENTS.md`, `plan.md`, `tasks.md`, `bitacora.md`, `design-plan.md`, `.codex/skills/rtc-institutional-design/` y la skill global `frontend-design`. D-062 autoriza la implementación test-first completa de esta spec. Primero crea y ejecuta pruebas que fallen; después implementa solo el código mínimo que las satisfaga. Usa exclusivamente `docs/`, `knowledge/` y `src/assets/` como superficies fuente y consume únicamente MA-01 a MA-11. Ejecuta `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd run test:run`, `npm.cmd run test:e2e` y `npm.cmd run test:a11y`. No despliegues ni añadas backend, integraciones, capacidades excluidas, dependencias o activos no autorizados. Al finalizar, actualiza `bitacora.md` con rutas modificadas, requisito → prueba → resultado y salidas de verificación; entrega también evidencia móvil/escritorio. Detente ante cualquier ambigüedad material, cambio de alcance, seguridad o arquitectura y, tras entregar la evidencia, espera la revisión QA Senior de Diego/ORQ.

Esta activación queda consumida por la implementación v1 y no autoriza cambios
posteriores. Para la revisión v2 rige exclusivamente D-064.

## Corrección de diseño v2 — D-064

La implementación v1 conserva evidencia técnica satisfactoria, pero Diego/ORQ no
aceptó su resultado visual. Antes de cualquier nueva modificación de código, Codex
debe elaborar una revisión de diseño v2 **sin implementar** y responder a estos
criterios:

- El copy visible al público procede literalmente de `knowledge/copy-web-v1.md` u
  otra fuente canónica indicada; se elimina el lenguaje interno, inferido o de
  gobernanza que no esté aprobado como copy público.
- Cada fotografía MA-07…MA-11 recibe una decisión explícita de proporción,
  focalización, contexto y relación con el servicio/caso que apoya. No se permite
  un recorte uniforme que contradiga las proporciones naturales del activo o
  oculte información relevante.
- La propuesta debe presentar dos o tres direcciones visuales distinguibles, con
  una recomendación motivada. Puede usar cards, carrusel, secuencia horizontal u
  otros elementos contemporáneos si sirven a la narrativa y no son decoración
  genérica. Ningún contenido esencial puede depender de hover, autoplay o un
  carrusel; los controles deben ser utilizables por teclado, táctil y con reducción
  de movimiento.
- La bitácora debe mapear de forma concreta los principios de `frontend-design` y
  `rtc-institutional-design` a decisiones visuales, alternativas descartadas y
  evidencia de QA propuesta. Declarar lectura de una skill no constituye evidencia
  suficiente de aplicación.
- La revisión debe definir capturas desktop y móvil como evidencia visual futura,
  además de los controles de tipo, E2E y a11y vigentes.

D-064 autoriza solo esta corrección de planificación. Una implementación v2
requerirá una autorización posterior y explícita de Diego/ORQ.

## Referencias de patrón v2 — D-065

KAMBEA (`https://www.kambea.com/es` y `/es/ao`) y D4Act
(`https://d4act.com/`) son referencias visuales autorizadas únicamente para
analizar composición, jerarquía, ritmo, cards, tratamiento de imagen, presentación
de logos/casos, proceso y contacto. No son fuentes de copy, assets, marca, código
ni componentes reutilizables.

La revisión v2 deberá documentar qué patrón adopta, adapta o descarta de cada
referencia. Cuando una dirección necesite copy que no exista literalmente en una
fuente RTC canónica, deberá marcarlo como propuesta pendiente de aprobación de
Diego/ORQ: no se permite texto genérico de relleno ni inferir una afirmación
pública.
