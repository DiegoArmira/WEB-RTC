# WEB-RTC — Constitución técnica derivada

> **Estado:** derivado técnico de la Constitución vigente del Vault.  
> **Fuente canónica de gobierno y negocio:** `Agentic Software Office/03-Proyectos/pagina-web-rtc/constitucion.md`.

## Propósito técnico

Soportar la primera versión de la landing institucional de RTC Consultoría como sitio estático por componentes, manteniendo separados contenido, composición y activos autorizados.

## Decisión técnica vigente

Por decisión ORQ D-029, la versión inicial usa **React + TypeScript + Vite**. La landing modela seis bloques conceptuales aprobados: presentación, servicios, capacidades, experiencia, evidencia visual y contacto.

## Límites de v1

No incluye backend, API propia, autenticación, CMS, base de datos, área privada, pagos ni integraciones externas. Dominio, hosting, DNS, titularidad de cuentas, política preview/producción y despliegue son decisiones posteriores de Diego/ORQ. Solo reabren esta arquitectura si imponen incompatibilidad con un build estático de Vite.

## Canonicidad y trazabilidad

- El Vault es canónico para gobierno, negocio, contenido, decisiones y trazabilidad de Office.
- Este repositorio es canónico para artefactos técnicos transferidos, specs autorizados, planes técnicos, tareas de ejecución, bitácoras, código y pruebas.
- Cada transferencia desde Office debe conservar vínculo a la unidad y decisión aplicable.
- Los activos se referenciarán mediante un manifiesto curado por M-Start-02; no se copian ni se infieren aquí.

## Estructura SDD

- `specs/AGENTS.md`: reglas operativas técnicas para agentes y Codex.
- `specs/NNN-titulo/`: paquete de una unidad Office autorizada (`spec.md`, `plan.md`, `tasks.md`, `bitacora.md`).
- `knowledge/`: corpus técnico curado futuro; no se puebla en esta tarea.
- `src/`: código de la aplicación cuando una spec autorizada llegue a implementación.

## Origen

U-03 / U03-T04 · D-029 · 2026-10-08.
