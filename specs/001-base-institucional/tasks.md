# Tareas verificables — Spec 001 Base institucional

## Estado de esta unidad

T-001 a T-005 fueron completadas en planificación; T-006 a T-012 se ejecutaron bajo
D-062 para la v1 y su evidencia quedó registrada. T-020 a T-022 se completaron bajo
D-067 para la v2 local; la entrega permanece detenida para QA Senior de Diego/ORQ.

- [x] T-001 — Leer `spec.md`, `specs/AGENTS.md`, las fuentes canónicas y las skills
  requeridas; confirmar D-060 y límites de superficie.
- [x] T-002 — Inventariar MA-01…MA-11 en `src/assets/` contra el manifiesto, sin
  alterar activos; excluir los assets de scaffold no manifestados del plan.
- [x] T-003 — Preparar `design-plan.md` con propósito, concepto, wireframes,
  tokens candidatos, responsive, foco/teclado y gates.
- [x] T-004 — Registrar decisiones, fuentes, supuestos, riesgos y bloqueos en
  `bitacora.md`.

## Ejecución v1 — completada bajo D-062

- [x] T-005 — Obtener aprobación QA Senior Diego/ORQ del paquete de planificación y
  resolver el gate de fotos para la implementación local/no productiva (D-061).
- [x] T-006 — Definir pruebas de componente que fallen para R-01/R-02/R-04:
  secciones, orden, contenido esencial, asociaciones caso–logo, landmarks,
  encabezados y teclado.
- [x] T-007 — Definir prueba E2E que falle para R-03: recorrido móvil/escritorio y
  atajo de apertura a contacto sin dependencia de hover.
- [x] T-008 — Definir prueba a11y que falle para R-04/R-05 y exija cero violaciones
  automáticas en la landing.
- [x] T-009 — Implementar solo la composición y datos locales mínimos que satisfagan
  las pruebas, el plan visual y las restricciones RP-01…RP-06.
- [x] T-010 — Aplicar los assets MA autorizados: logo RTC y logos de caso; incluir
  cada foto solo tras el control documentado correspondiente o conservar el bloque
  textual sin foto.
- [x] T-011 — Ejecutar, en Windows y después de implementación,
  `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd run test:run`,
  `npm.cmd run test:e2e` y `npm.cmd run test:a11y`; registrar salida reproducible.
- [x] T-012 — Capturar evidencia móvil/escritorio, completar matriz requisito →
  prueba → resultado y solicitar revisión final de QA Senior Diego/ORQ.

## Criterios de cierre futuro

- Los seis bloques y el contacto corresponden a fuentes aprobadas; no hay copy,
  activos ni canales añadidos por inferencia.
- Las fotos cumplen su gate o se omiten sin sustitución no autorizada.
- Tipos, build, componente, E2E y a11y aportan evidencia reproducible y a11y no
  detecta violaciones.
- La entrega sigue siendo estática, local/no productiva y no incluye capacidades
  excluidas por arquitectura v1.

## Revisión v2 D-064 — solo planificación

- [x] T-013 — Comparar tres direcciones y recomendar “Evidencia en recorrido”.
- [x] T-014 — Eliminar del plan copy fotográfico inferido; usar solo título público canónico.
- [x] T-015 — Definir vínculo, proporción, foco y recorte individual MA-07…MA-11.
- [x] T-016 — Definir capturas D-01…D-04 junto con E2E/Axe futuros.
- [x] T-017 — Esperar autorización posterior antes de modificar implementación o pruebas (recibida en D-067).
- [x] T-018 — Integrar D-065 y la revisión v2 con D-066: patrones de referencia,
  límites de copy y reconciliación de carrusel/cards.
- [x] T-019 — Recibir autorización explícita D-067 para implementar la evolución
  visual v2 y actualizar pruebas/evidencia proporcionalmente.
- [x] T-020 — Definir o ajustar primero pruebas proporcionales de la dirección D-066
  antes de modificar componentes o estilos.
- [x] T-021 — Implementar la evolución visual v2 sin dependencias, assets ni copy
  adicionales; preservar accesibilidad y límites de contenido.
- [x] T-022 — Ejecutar tipos, build, componente, E2E y Axe; registrar D-01…D-04 y
  solicitar QA Senior de Diego/ORQ.

## Preview temporal D-068

- [x] T-023 — Corregir la portabilidad de `test:run` para que establezca
  `NODE_ENV=test` sin requerir sintaxis específica de Windows o Unix.
- [x] T-024 — Preparar un workflow manual de GitHub Pages que ejecute typecheck,
  pruebas de componente y build antes de desplegar el directorio `dist` con la base
  `/WEB-RTC/`.
- [ ] T-025 — Habilitar GitHub Pages, ejecutar el workflow y verificar la URL
  pública temporal con evidencia; no equivale a aceptación final ni producción.
