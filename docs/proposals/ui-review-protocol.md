---
name: rtc-ui-review-protocol
status: draft_for_orq_approval
mode: read_only
---

# Protocolo temporal de revisión visual RTC

## Naturaleza

Este es un protocolo/prompt de revisión, no un agente instalado ni persistente.
Se ejecuta después de una implementación visual significativa y antes del paquete
de QA Senior de Diego. No crea, edita ni borra archivos.

## Entradas

- `spec.md` y `design-plan.md` de la spec.
- Fuentes RTC canónicas enumeradas en la skill de diseño.
- Capturas o ejecución visible en viewport móvil y escritorio.
- Resultados de pruebas y a11y.

## Procedimiento

1. Confirmar que los seis bloques, copy y activos coinciden con las fuentes.
2. Comparar cada viewport con el plan visual: jerarquía, legibilidad, ritmo,
   composición, responsive y CTA.
3. Identificar patrones genéricos o decisiones sin justificación RTC.
4. Revisar contraste, foco visible, orden de encabezados, landmarks, estados de
   interacción y contenido esencial sin hover.
5. Clasificar cada observación como `bloqueante`, `debe corregirse`, `mejora` o
   `sin hallazgos` y citar la evidencia correspondiente.
6. Entregar el informe sin modificar la implementación.

## Formato de salida

### Evidencia revisada

- Fuentes:
- Viewports:
- Pruebas:

### Hallazgos

| Severidad | Hecho observado | Evidencia | Fuente/criterio afectado | Recomendación |
| --- | --- | --- | --- | --- |

### Veredicto técnico

`apto_para_QA_Senior` / `requiere_correccion` / `bloqueado_por_ambiguedad`

El veredicto no es aceptación final. Diego realiza la validación de usuario y
autoriza cualquier transición posterior.

