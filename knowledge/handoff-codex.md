# Contrato de handoff a Codex

## Precondiciones

1. Unidad Office autorizada para ejecución y spec `specs/NNN-titulo/spec.md` madura.
2. Spec enlaza alcance, AC, requisitos EARS aplicables, decisiones y evidencia de la unidad origen.
3. Se incluyen IDs C*, CT*, RP-* y MA-* pertinentes; no se da acceso amplio para inferir activos/fuentes.
4. Bootstrap materializó las rutas consumibles `src/assets/` indicadas por cada ID MA-* y registró checksum/procedencia; Codex no extrae DOCX/PPTX ni explora el Vault para localizar assets.
5. `plan.md`, `tasks.md` y `bitacora.md` se crean solo por Codex contra esa spec autorizada.
6. Codex contrasta APIs/dependencias con documentación vigente compatible con las versiones reales, usando Context7 o documentación oficial equivalente.

## Paquete mínimo

- unidad y decisión ORQ habilitante;
- alcance, exclusiones y AC verificables;
- fuentes permitidas por ID del índice;
- restricciones de publicación y manifiesto aplicables;
- rutas consumibles de assets MA-* ya materializadas por Bootstrap;
- arquitectura D-029 y documentos técnicos relevantes;
- evidencia de validación esperada y límite de acción.

## Límites

Codex no decide arquitectura, negocio, seguridad, publicación, activos ni alcance material. Una ambigüedad material se devuelve a Office/ORQ. El handoff no instala skills, habilita agentes ni autoriza despliegue.
