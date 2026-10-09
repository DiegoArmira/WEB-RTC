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

La estructura es documental. No hay instalación, comandos, tests ejecutables, dependencias, configuración de build ni código hasta que una spec autorizada los defina.

## Origen

U-03 / U03-T04 · D-023, D-024, D-027 y D-029.

## Documentación vigente
Cuando una spec autorizada requiera APIs o dependencias, usar documentación oficial compatible con las versiones reales. Context7 MCP está pendiente de remediación OAuth; no asumir que está disponible.

## Comandos Windows PowerShell
Usar npm.cmd y npx.cmd; no modificar ExecutionPolicy:
- npm.cmd run typecheck
- npm.cmd run build
- npm.cmd run test:run
- npm.cmd run test:e2e
- npm.cmd run test:a11y
- npx.cmd playwright install chromium (solo si falta)

## Superficies canónicas
Una spec autorizada usa docs/, knowledge/, src/assets/ y specs/AGENTS.md; no consulta el Vault ni fuentes originales para redescubrir contenido, UX o assets.

## Documentación vigente
Cuando una spec autorizada requiera APIs o dependencias, usar documentación oficial compatible con las versiones reales. Context7 MCP está pendiente de remediación OAuth; no asumir que está disponible.

## Comandos Windows PowerShell
Usar npm.cmd y npx.cmd; no modificar ExecutionPolicy:
- npm.cmd run typecheck
- npm.cmd run build
- npm.cmd run test:run
- npm.cmd run test:e2e
- npm.cmd run test:a11y
- npx.cmd playwright install chromium (solo si falta)

## Superficies canónicas
Una spec autorizada usa docs/, knowledge/, src/assets/ y specs/AGENTS.md; no consulta el Vault ni fuentes originales para redescubrir contenido, UX o assets.
