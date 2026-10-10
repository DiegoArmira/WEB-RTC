---
status: partially_approved
unit: U-04
spec: 001-base-institucional
date: 2026-10-10
---

# Propuesta de capacidad de diseño para RTC v0.1

## Decisión solicitada

Autorizar o rechazar, de forma independiente:

1. la activación de la skill local propuesta `rtc-institutional-design`;
2. la incorporación controlada de la skill externa `frontend-design` mediante
   instalación desde catálogo;
3. el protocolo temporal de revisión visual.

No crea agentes persistentes ni autoriza la ejecución de Codex ni la implementación
de la spec 001. La instalación externa queda pendiente de evidencia de la terminal
Windows de Diego.

## Brecha que resuelve

El Bootstrap deja disponibles React, TypeScript, pruebas, Playwright, Axe y
Context7. Esas capacidades verifican calidad técnica y accesibilidad, pero no
constituyen un flujo especializado para decidir una dirección visual institucional
distintiva. La propuesta cubre esa brecha sin sustituir U-02 ni la revisión de
Diego como QA Senior.

## Paquete híbrido propuesto

| Pieza | Tipo | Estado | Propósito | Permisos |
| --- | --- | --- | --- | --- |
| `rtc-institutional-design` | Skill local de proyecto | Borrador; no activada | Traducir las fuentes RTC en un plan visual verificable antes de código. | Lectura del repositorio; sin red, scripts ni MCP. |
| `frontend-design` de `anthropics/skills` | Skill externa de instrucciones | Evaluada; no instalada | Aportar método de dirección estética, tipografía, color y composición que evite resultados genéricos. | Por definir tras aprobar origen y modalidad. |
| Protocolo `ui-review` | Perfil temporal de revisión | Borrador; no activado | Evaluar visualmente una entrega ya implementada y preparar evidencia para QA Senior. | Solo lectura de archivos y capturas; no modifica código. |
| Accessibility Auditor | Perfil temporal opcional | No incorporado | Complementar Axe con revisión manual especializada cuando la superficie exista. | Solo con autorización específica. |

## Fuentes y evaluación

### Skill local

La skill local deriva de U-02, `knowledge/`, el manifiesto de activos, las
restricciones de publicación y la spec. Es la capa que evita que una guía externa
invente una identidad ajena a RTC.

### `frontend-design`

- Origen candidato: `anthropics/skills`, ruta `skills/frontend-design/SKILL.md`.
- Fuente de descubrimiento: <https://www.skills.sh/anthropics/skills/frontend-design>.
- Aptitud: alta para esta brecha. Sus instrucciones priorizan una dirección estética
  explícita, decisiones deliberadas de tipografía/color/composición y evitan
  convenciones visuales genéricas.
- Límite: es una guía general; no es fuente de contenido, assets, marca ni UX de
  RTC. Las fuentes canónicas de la spec prevalecen siempre.
- Revisión pendiente antes de incorporación: commit SHA exacto, licencia vigente,
  contenido completo, archivos adicionales y mecanismo reproducible de instalación.

### `UI reviewer`

No procede de un producto o agente existente. Es un perfil de trabajo limitado
propuesto por Office, inspirado en la etapa de *design QA* y *developer handoff*
del perfil `UI Designer` de `agency-agents`:
<https://github.com/msitarzewski/agency-agents/blob/main/design/design-ui-designer.md>.

No se copiará el perfil completo: contiene supuestos de producto genérico (por
ejemplo, biblioteca extensa, dark mode y tokens predeterminados) que no están
aprobados para RTC. El protocolo local queda reducido a una revisión de una
entrega existente y no se presenta como una auditoría independiente de Diego.

## Modalidades para la skill externa

### A. Importación reproducible — no seleccionada

Tras aprobación ORQ, incorporar una copia atribuida del `SKILL.md` revisado en el
repositorio, junto con licencia y SHA del origen. Codex la descubre como skill
local. Ventajas: contenido revisable, trazable y estable por commit. Riesgo:
requiere mantener atribución y decidir manualmente futuras actualizaciones.

### B. Instalación desde catálogo — seleccionada por ORQ

Usar el instalador de `skills.sh` para añadir únicamente `frontend-design`. Se
debe registrar la salida que indique versión y ubicación, y no se debe confiar en
una rama móvil sin registrar el resultado. Ventaja: operación más corta y
capacidad reutilizable en proyectos futuros. Riesgo: menor control sobre cambios
del catálogo y su ubicación local.

No se instalará un paquete inicial completo ni una skill de descubrimiento como
dependencia permanente: no soluciona directamente la dirección visual de RTC.

## Secuencia de trabajo si se aprueba

1. Aprobar el contenido del borrador local y la modalidad A o B para la externa.
2. Materializar la skill local en `.codex/skills/rtc-institutional-design/` y
   actualizar `specs/AGENTS.md` con su precedencia y límites.
3. Incorporar la skill externa conforme a la modalidad elegida, registrando origen,
   licencia y versión.
4. Actualizar `specs/001-base-institucional/spec.md` para exigir: plan visual antes
   de código, pruebas primero, capturas y protocolo de revisión antes del QA Senior.
5. Publicar el commit y solicitar a Diego sincronizar `main`.
6. Solo tras la autorización de ejecución de la spec, Codex puede usar las skills.

## Criterios de aceptación de la capacidad

- Cada decisión visual se vincula a una fuente RTC autorizada o se eleva a ORQ.
- Ninguna skill puede introducir copy, activos, dependencias o alcance no aprobados.
- La revisión visual usa capturas móvil y escritorio y separa hallazgos de hechos.
- La a11y de la spec exige cero violaciones automáticamente detectables; la skill
  no sustituye Axe, pruebas ni revisión manual.
- Diego conserva la aceptación final como QA Senior.
