# Tareas verificables — Spec 001 Base institucional

## Estado de esta unidad

Solo T-001 a T-004 fueron autorizadas por D-060 y quedan documentadas en este
paquete. T-005 en adelante son trabajo futuro y requieren autorización posterior;
no se ejecutaron.

- [x] T-001 — Leer `spec.md`, `specs/AGENTS.md`, las fuentes canónicas y las skills
  requeridas; confirmar D-060 y límites de superficie.
- [x] T-002 — Inventariar MA-01…MA-11 en `src/assets/` contra el manifiesto, sin
  alterar activos; excluir los assets de scaffold no manifestados del plan.
- [x] T-003 — Preparar `design-plan.md` con propósito, concepto, wireframes,
  tokens candidatos, responsive, foco/teclado y gates.
- [x] T-004 — Registrar decisiones, fuentes, supuestos, riesgos y bloqueos en
  `bitacora.md`.

## Trabajo futuro — no autorizado por D-060

- [ ] T-005 — Obtener aprobación QA Senior Diego/ORQ del paquete de planificación y
  resolver el gate de fotos antes de cualquier publicación.
- [ ] T-006 — Definir pruebas de componente que fallen para R-01/R-02/R-04:
  secciones, orden, contenido esencial, asociaciones caso–logo, landmarks,
  encabezados y teclado.
- [ ] T-007 — Definir prueba E2E que falle para R-03: recorrido móvil/escritorio y
  atajo de apertura a contacto sin dependencia de hover.
- [ ] T-008 — Definir prueba a11y que falle para R-04/R-05 y exija cero violaciones
  automáticas en la landing.
- [ ] T-009 — Implementar solo la composición y datos locales mínimos que satisfagan
  las pruebas, el plan visual y las restricciones RP-01…RP-06.
- [ ] T-010 — Aplicar los assets MA autorizados: logo RTC y logos de caso; incluir
  cada foto solo tras el control documentado correspondiente o conservar el bloque
  textual sin foto.
- [ ] T-011 — Ejecutar, en Windows y después de implementación,
  `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd run test:run`,
  `npm.cmd run test:e2e` y `npm.cmd run test:a11y`; registrar salida reproducible.
- [ ] T-012 — Capturar evidencia móvil/escritorio, completar matriz requisito →
  prueba → resultado y solicitar revisión final de QA Senior Diego/ORQ.

## Criterios de cierre futuro

- Los seis bloques y el contacto corresponden a fuentes aprobadas; no hay copy,
  activos ni canales añadidos por inferencia.
- Las fotos cumplen su gate o se omiten sin sustitución no autorizada.
- Tipos, build, componente, E2E y a11y aportan evidencia reproducible y a11y no
  detecta violaciones.
- La entrega sigue siendo estática, local/no productiva y no incluye capacidades
  excluidas por arquitectura v1.
