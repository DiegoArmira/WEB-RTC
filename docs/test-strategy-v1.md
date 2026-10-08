# Estrategia de pruebas v1

## Alcance

Esta estrategia define la futura verificación técnica de la landing; no configura herramientas ni ejecuta pruebas.

## Capas de verificación

1. **Build estático:** confirmar que la aplicación construye el artefacto estático esperado.
2. **Comportamiento y contenido:** contrastar cada spec autorizada con sus criterios de aceptación y el contenido aprobado por Office.
3. **Responsive y visual:** revisar viewports reducido y amplio contra el diseño conceptual aprobado, sin sustituir la aceptación ORQ.
4. **Accesibilidad:** revisar semántica, encabezados, teclado, foco, texto alternativo y contraste.
5. **Activos y publicación:** comprobar que logo, logos de terceros, fotografías y datos de contacto proceden del manifiesto autorizado y respetan sus restricciones.

## Evidencia y gates

Las pruebas y sus resultados se registrarán en la `bitacora.md` de la spec correspondiente. Hallazgos que impliquen cambio de alcance, arquitectura, seguridad, contenido publicado o decisión ORQ se elevan antes de corregirse.

## Origen

U-03 / U03-T04 · AC-03 y AC-05 · D-029.
