# Arquitectura v1 — decisión aprobada

## Decisión

Landing estática por componentes con React, TypeScript y Vite. El build objetivo produce contenido estático (`dist`) para un destino de hosting compatible que Diego/ORQ decidirá posteriormente.

## Organización conceptual

La aplicación futura representará los seis bloques aprobados por U-02: presentación, servicios, capacidades, experiencia, evidencia visual y contacto. El contenido editorial permanecerá separado de la composición y los activos se consumirán solo desde un manifiesto autorizado.

## Criterios técnicos iniciales

- **Responsive:** el contacto y el contenido esencial estarán disponibles en viewport reducido y amplio, sin depender de hover.
- **Accesibilidad:** HTML semántico, jerarquía de encabezados, teclado, foco visible, texto alternativo contextual y contraste verificable.
- **Performance:** sin dependencias no justificadas; imágenes dimensionadas y carga diferida cuando no afecte contenido esencial.
- **Datos:** contenido local trazable; sin persistencia ni servicios de datos en v1.

## Exclusiones

No se incorpora backend, API, autenticación, CMS, base de datos, área privada, pagos ni integraciones externas. Esta decisión no selecciona proveedor, plan, dominio, DNS, cuentas, preview/producción ni despliegue.

## Origen

U-03 / U03-T03–T04 · D-029 · U-01 y U-02 aprobadas.
