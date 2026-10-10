---
name: rtc-institutional-design
description: Diseña o revisa una interfaz RTC institucional cuando una spec autorizada requiera UI. Usa exclusivamente las fuentes canónicas RTC, produce un plan visual verificable antes de código y evita patrones genéricos no justificados.
---

# RTC Institutional Design

## Cuándo usar esta skill

Usar solo al planificar, implementar o revisar UI de una spec RTC autorizada. No
usar para cambiar copy, seleccionar activos no autorizados, definir marca nueva,
instalar dependencias, desplegar ni reinterpretar fuentes externas.

## Fuentes obligatorias y precedencia

1. El `spec.md` autorizado para alcance, requisitos y aceptación.
2. `specs/AGENTS.md` para reglas de operación.
3. `knowledge/ux-conceptual-v1.md`, `knowledge/copy-web-v1.md`,
   `knowledge/recorrido-conceptual.html`, `knowledge/manifiesto-activos.md` y
   `knowledge/restricciones-publicacion.md` para contenido, UX y activos.
4. `docs/architecture-v1.md` para límites técnicos.

No consultar el Vault ni fuentes originales. Ante una ambigüedad material,
registrarla y detenerse para elevarla a Office/ORQ.

## Antes de escribir código

Crear o actualizar en la carpeta de la spec un `design-plan.md` con:

1. propósito de la página, audiencia y acción principal, citando las fuentes;
2. concepto visual de una frase, específico de RTC y no intercambiable con otra
   organización;
3. jerarquía y composición de los seis bloques, incluyendo un wireframe ASCII
   sencillo para móvil y escritorio;
4. propuesta justificada de tipografía, color, espaciado, contraste, densidad,
   contenedores y tratamiento de cada activo autorizado;
5. comportamiento responsive y de foco/teclado de cada elemento interactivo;
6. lista de decisiones que requieren aprobación ORQ, si existe alguna.

No escribir código hasta que el plan no contradiga las fuentes y la spec permita
ejecución. Si la spec exige aprobación del plan, esperar dicha aprobación.

## Reglas anti-genéricas

- No adoptar por defecto gradientes morados, tipografía Inter, tarjetas idénticas,
  una grilla de métricas o un hero de plantilla sin justificación RTC.
- No convertir todos los bloques en cards ni usar iconos/ilustraciones no
  autorizados para rellenar contenido.
- No simular marca, casos, cifras, testimonios, aliados ni resultados inexistentes.
- Hacer que el hero, ritmo editorial, evidencia visual y CTA procedan de la
  narrativa, activos y prioridades institucionales aprobadas.
- Preferir pocas decisiones visuales coherentes y justificadas a muchos efectos
  decorativos.

## Implementación y verificación

1. Definir primero las pruebas de la spec y comprobar que fallan cuando aplique.
2. Implementar el mínimo necesario para satisfacer plan visual, spec y pruebas.
3. Ejecutar tipos, build, pruebas de componente, E2E y a11y indicadas.
4. Capturar evidencia móvil y escritorio.
5. Ejecutar el protocolo `ui-review` si la spec lo exige; no corregir hallazgos
   materiales sin la siguiente autorización aplicable.

## Salida requerida

Reportar fuentes usadas, decisiones visuales, rutas modificadas, pruebas y
capturas. Separar hechos de recomendaciones y listar cualquier desviación o
ambigüedad para Office/ORQ.
