# Bitácora — Spec 001 Base institucional

## 2026-10-09 — Planificación D-060

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
