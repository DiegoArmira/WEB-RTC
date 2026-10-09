# Manifiesto de assets v0.2

## Regla de consumo futuro

Codex no debe extraer imágenes desde DOCX/PPTX ni redescubrir fotografías. Bootstrap, cuando sea autorizado, deberá copiar **sin transformar** cada recurso desde su fuente original a la ruta consumible indicada y registrar checksum, fecha y resultado. La fuente original permanece canónica en el Vault; la copia en `WEB-RTC/src/assets/` será el derivado técnico consumible para la implementación.

| ID | Fuente original canónica | Ruta consumible que Bootstrap deberá materializar en `WEB-RTC` | Uso permitido / bloque U-02 | Restricción |
|---|---|---|---|---|
| MA-01 | F-003 — `02_PERFIL_FODIGUA_REFERENCIA.pptx::ppt/media/image1.png` | `src/assets/brand/rtc-consultoria.png` | Identificación institucional / presentación | No redibujar ni alterar; preservar proporción. |
| MA-02 | F-002 — `01_PERFIL_EMPRESA_RTC_2026.docx::word/media/image8.png` | `src/assets/experience/swisscontact.png` | E-01 / experiencia | Solo junto al caso; no implica aval. |
| MA-03 | F-002 — `01_PERFIL_EMPRESA_RTC_2026.docx::word/media/image1.png` | `src/assets/experience/save-the-children.png` | E-02 / experiencia | Solo junto al caso; no implica aval. |
| MA-04 | F-002 — `01_PERFIL_EMPRESA_RTC_2026.docx::word/media/image6.png` | `src/assets/experience/global-communities.png` | E-03 / experiencia | Solo junto al caso; no implica aval. |
| MA-05 | F-002 — `01_PERFIL_EMPRESA_RTC_2026.docx::word/media/image12.png` | `src/assets/experience/helvetas.png` | E-04 / experiencia | Solo junto al caso; no implica aval. |
| MA-06 | F-002 — `01_PERFIL_EMPRESA_RTC_2026.docx::word/media/image9.jpeg` | `src/assets/experience/creative-associates.jpeg` | E-05 / experiencia | No usar CARI/USAID; no implica aval. |
| MA-07 | F-008 — `fuentes/fotos-rtc-originales/IMG_1578.JPG` | `src/assets/photos/rtc-capacitacion-01.jpg` | Capacitación | Revisar personas, contexto y marcas antes de publicación. |
| MA-08 | F-008 — `fuentes/fotos-rtc-originales/IMG_9348.JPG` | `src/assets/photos/rtc-campo-01.jpg` | Líneas de base / campo | Revisar datos sensibles antes de publicación. |
| MA-09 | F-008 — `fuentes/fotos-rtc-originales/IMG_8014.JPG` | `src/assets/photos/rtc-experiencia-01.jpg` | Presentación / experiencia | Revisar participantes/pantallas antes de publicación. |
| MA-10 | F-008 — `fuentes/fotos-rtc-originales/IMG_7241.JPG` | `src/assets/photos/rtc-territorio-01.jpg` | Capacitación / territorialidad | Revisar consentimiento antes de publicación. |
| MA-11 | F-008 — `fuentes/fotos-rtc-originales/1a153582-c224-49de-8268-270021970a63.JPG` | `src/assets/photos/rtc-investigacion-01.jpg` | Investigación / campo | Revisar privacidad, ubicación y marcas antes de publicación. |

## Límites

- Bootstrap no debe añadir, seleccionar ni sustituir assets fuera de MA-01 a MA-11.
- La copia técnica no elimina controles RP-*; las fotografías siguen condicionadas a revisión de privacidad/contexto antes de publicar.
- Si una fuente no puede extraerse conservando su integridad, Bootstrap debe detener ese asset, registrar la excepción y elevarla a Office; no debe buscar un sustituto por inferencia.
