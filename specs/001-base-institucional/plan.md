# Plan técnico — Spec 001 Base institucional

## Estado y frontera

La planificación inicial fue autorizada por D-060 y la implementación v1 se ejecutó
bajo D-062. D-067 autorizó la ejecución local de la evolución visual D-066;
implementación y evidencia constan en `bitacora.md`. La entrega v2 queda detenida
para QA Senior de Diego/ORQ, sin autorización de publicación.

La futura entrega será una landing estática React + TypeScript + Vite, local y no
productiva, con contenido local separado de la composición y activos consumidos solo
desde MA-01 a MA-11. No incorporará backend, API, autenticación, CMS, persistencia,
pagos, integraciones externas, hosting, dominio, DNS, preview público ni despliegue.

## Resultado previsto

Una única página con seis bloques, en este orden: presentación, servicios,
capacidades, experiencia, evidencia visual y contacto. El recorrido principal será
presentación → servicios → capacidades → experiencia → evidencia → contacto, con un
atajo visible desde presentación a contacto. El detalle visual se rige por
[design-plan.md](design-plan.md).

## Límites de contenido y activos

| Superficie | Uso futuro permitido |
|---|---|
| `knowledge/copy-web-v1.md` | Copy literal y condiciones de cada bloque; no añadir cifras, impactos, cobertura, fechas ni canales. |
| `knowledge/ux-conceptual-v1.md` y `recorrido-conceptual.html` | Orden, jerarquía, recorridos y contexto de los activos. |
| `knowledge/manifiesto-activos.md` | Solo MA-01…MA-11: logo RTC, cinco logos de caso y cinco fotografías. |
| `knowledge/restricciones-publicacion.md` | Aplicar RP-01…RP-06, en especial no presentar terceros como aval ni usar WhatsApp. |
| `docs/architecture-v1.md` | Límites estáticos, accesibilidad, responsive, rendimiento y ausencia de servicios de datos. |

Se excluyen expresamente `src/assets/hero.png`, `react.svg` y `vite.svg`, pues no
pertenecen al manifiesto MA-01…MA-11. No se transformarán ni redibujarán los assets
autorizados. Cada logo tercero quedará asociado únicamente con su caso factual.

## Diseño e implementación futura propuesta

1. Definir datos locales trazables por bloque, con copy y ruta/condición de asset
   separados de la estructura visual.
2. Construir primero las pruebas que describen el orden de los seis bloques, el copy
   esencial, la relación caso–logo, el atajo a contacto y las restricciones de
   contenido.
3. Implementar una única composición semántica: `header` para apertura, `main` con
   secciones identificables para los seis bloques y `footer`/cierre institucional.
   Usar una jerarquía de un `h1` y encabezados descendentes; enlaces reales para
   correo/teléfono y el atajo interno de contacto.
4. Aplicar el plan responsive: una columna y orden conceptual invariable en móvil;
   agrupaciones editoriales de dos o más columnas solo cuando el ancho lo permita.
   Ningún contenido esencial, contacto o detalle de caso dependerá de hover.
5. Incorporar MA-01 y MA-02…MA-06 conforme al manifiesto. Tratar MA-07…MA-11 como
   condicionales: si el control de privacidad/contexto/marcas no está documentado,
   omitir la foto afectada sin sustituirla por otro activo y conservar su texto.
6. Añadir alternativas textuales contextuales para imágenes informativas; las marcas
   de casos describirán su función de referencia, no aprobación.
7. Verificar foco visible, orden de tabulación, operabilidad por teclado, landmarks,
   contraste y preferencia de movimiento reducido si se agrega movimiento. No usar
   carrusel, formulario, navegación compleja ni animación decorativa.

## Verificación futura: requisito → prueba → evidencia

| Requisito / AC | Prueba prevista antes de componentes | Evidencia posterior |
|---|---|---|
| R-01, AC-01 | Componente: seis secciones, orden y jerarquía aprobada. | Resultado de prueba y rutas afectadas. |
| R-02, AC-02 | Componente: copy esencial, cinco casos y asociación exclusiva caso–logo; lista permitida de rutas MA. | Aserciones de contenido/activos y revisión de manifiesto. |
| R-03 | E2E móvil y escritorio: contenido y contacto disponibles, atajo de apertura funcional, sin hover obligatorio. | Capturas o trazas de ambos viewports. |
| R-04 | Componente/E2E: landmarks, un `h1`, encabezados, enlaces operables y foco visible. | Resultado y revisión de teclado. |
| R-05 | Prueba a11y específica de la landing con cero violaciones detectables. | Salida de `npm.cmd run test:a11y`. |
| R-06, AC-03, AC-05 | Revisión de alcance y controles estáticos. | `npm.cmd run typecheck`, `npm.cmd run build` y revisión de cambios. |
| AC-04 | Ejecución de las capas acordadas. | Salida reproducible de `test:run`, `test:e2e`, `test:a11y`, tipos y build en Windows. |

La secuencia obligatoria será: hacer fallar pruebas de componente, E2E y a11y
proporcionales; implementar el mínimo; ejecutar los cinco comandos indicados por la
spec; registrar resultados y evidencia visual móvil/escritorio en `bitacora.md`.
La planificación D-060 no ejecutó estos controles; D-062 los ejecutó después para
la v1 y su evidencia consta en `bitacora.md`.

## Gates antes de implementación/publicación

- QA Senior Diego/ORQ revisa y acepta este paquete de planificación.
- Antes de un uso público de MA-07…MA-11, ORQ debe contar con control documentado de
  personas identificables, consentimiento cuando aplique, pantallas/documentos,
  ubicaciones y marcas visibles. Sin ese control, se excluye cada foto afectada.
- Cualquier cambio a copy, canales de contacto, casos, logos, arquitectura o alcance
  se eleva a Office/ORQ antes de implementarse.

## Fuentes usadas

`spec.md`, `specs/AGENTS.md`, `docs/architecture-v1.md`,
`docs/test-strategy-v1.md`, `knowledge/copy-web-v1.md`,
`knowledge/ux-conceptual-v1.md`, `knowledge/recorrido-conceptual.html`,
`knowledge/restricciones-publicacion.md`, `knowledge/manifiesto-activos.md` y
`src/assets/`.

## Revisión v2 D-064

Sin autorización de implementación. La siguiente autorización deberá partir de la
dirección B de `design-plan.md`, retirar copy fotográfico inferido y aplicar la matriz
individual MA-07…MA-11. La evidencia futura será D-01…D-04 más E2E móvil/escritorio,
teclado, Axe y contraste. La secuencia estática mantiene todo el contenido esencial
disponible.

## Integración D-066

La secuencia estática sigue siendo la fuente primaria de evidencia, pero D-066
permite una banda/carrusel manual secundario de casos o logos si se proporciona la
misma información en una presentación estática accesible. La dirección de
implementación futura se rige por «Evidencia en recorrido enriquecida» en
`design-plan.md`: apertura fotográfica responsable, cards de servicios, caso–logo–
foto relacionados y cierre de contacto canónico. No se añade «Cómo trabajamos» ni
copy derivado sin aprobación separada.
