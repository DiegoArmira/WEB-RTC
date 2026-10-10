# Reglas operativas para specs y agentes

## Spec-Driven Development

Cualquier trabajo técnico se ejecuta desde una carpeta `specs/NNN-titulo/` autorizada. Cada paquete contiene:

- `spec.md`: responsabilidad de Office; alcance, comportamiento esperado, criterios de aceptación, restricciones y requisitos EARS cuando apliquen.
- `plan.md`: responsabilidad de Codex; plan técnico para cumplir el spec aprobado.
- `tasks.md`: responsabilidad de Codex; actividades concretas y verificables.
- `bitacora.md`: decisiones, cambios, evidencia y contexto de ejecución.

Una ambigüedad material que impida formular un requisito preciso no se interpreta: se eleva a Office/ORQ.

## Frontera Office ↔ Codex

- El Vault sigue siendo fuente canónica de gobierno y negocio.
- Un spec aprobado es la fuente canónica de ejecución técnica de su unidad.
- `office-orchestrator` es el gestor preferente de cambios Git de Office: recupera y materializa contenido íntegro de especialistas, lo versiona y preserva su trazabilidad.
- Un especialista puede operar el repositorio solo cuando su función lo justifique y exista autorización expresa dentro del trabajo en curso.
- Codex solo trabaja en una spec autorizada; no interpreta cambios materiales de negocio, alcance, seguridad o arquitectura.

## Requisitos antes de Codex

Debe existir unidad autorizada, `spec.md` maduro, criterios de aceptación verificables, restricciones de publicación aplicables y referencias al corpus/manifiesto que M-Start-02 proveerá. Esta tarea no crea ninguna spec ejecutable ni habilita Codex.

## Estado actual

M-Bootstrap-01 materializó el scaffold React + TypeScript + Vite, el lockfile y el harness de pruebas. No hay funcionalidad RTC hasta que exista una spec autorizada.

## Documentación vigente

Context7 está configurado como MCP OAuth de Codex. Cuando una spec autorizada requiera APIs o dependencias, consultar Context7 con una consulta acotada a la versión real; si no está disponible o resulta insuficiente, usar documentación oficial compatible. No incluir secretos ni contenido sensible en consultas documentales.

## Comandos Windows PowerShell

Usar npm.cmd y npx.cmd; no modificar ExecutionPolicy:
- npm.cmd run typecheck
- npm.cmd run build
- npm.cmd run test:run
- npm.cmd run test:e2e
- npm.cmd run test:a11y
- npx.cmd playwright install chromium (solo si falta)

## Regla test-first

Para cada spec autorizada, definir primero las pruebas verificables y solo después implementar el código mínimo que las satisfaga. Elegir la prueba proporcional al cambio: chequeo estático/tipos, prueba unitaria/de componente, o prueba de navegador/a11y. Esta regla no autoriza crear una spec ni implementar funcionalidad durante Bootstrap.

El test `@a11y` de Bootstrap verifica disponibilidad de Axe sobre el scaffold. Cada spec autorizada debe añadir sus propios criterios de accesibilidad y exigir cero violaciones automáticas en la superficie que implemente.

## Diseño institucional RTC

Cuando una spec autorizada implemente o revise UI institucional RTC, usar la skill
local `.codex/skills/rtc-institutional-design/` antes de escribir código. La skill
no sustituye el spec, U-02, `knowledge/`, los activos autorizados, pruebas ni la
aprobación de Diego como QA Senior. Su revisión visual consume la evidencia ya
requerida por la spec; no añade runners, dependencias ni comandos de prueba.

## Superficies canónicas

Una spec autorizada usa docs/, knowledge/, src/assets/ y specs/AGENTS.md; no consulta el Vault ni fuentes originales para redescubrir contenido, UX o assets.

## Origen

U-03 / U03-T04 · D-023, D-024, D-027, D-029, D-046 y D-048.
