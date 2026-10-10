---
id: 001-base-institucional
unit: U-04
status: approved_for_planning
date: 2026-10-10
decision: D-060
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

## Activación Codex

Este spec está aprobado solamente para los artefactos de planificación indicados
en D-060. Usar este único texto en una conversación nueva de Codex/VS Code:

> Lee `specs/001-base-institucional/spec.md`, `specs/AGENTS.md`, `.codex/skills/rtc-institutional-design/` y la skill global `frontend-design`. D-060 autoriza únicamente crear `plan.md`, `tasks.md`, `bitacora.md` y `design-plan.md` dentro de `specs/001-base-institucional/`. No escribas ni modifiques código, componentes, pruebas, configuración, dependencias ni activos; no ejecutes comandos de pruebas; no despliegues. Usa solo `docs/`, `knowledge/` y `src/assets/` como superficies fuente. Detente para elevar cualquier ambigüedad material, cambio de alcance, seguridad o arquitectura. Al finalizar, informa rutas creadas, supuestos, riesgos y bloqueos para la revisión de QA Senior de Diego/ORQ.
