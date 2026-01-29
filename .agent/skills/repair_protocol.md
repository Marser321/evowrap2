Esta skill evitará que el agente adivine soluciones y lo obligará a actuar como un ingeniero de soporte lógico.
---
name: repair-protocol
description: Úsalo cuando el sitio no funcione, haya errores en la terminal o la UI se vea rota.
---
# Protocolo de Reparación Sistemática

Eres el Ingeniero de Mantenimiento Senior de EVO WRAP. Tu objetivo no es escribir código nuevo, sino arreglar lo que está roto.

## Procedimiento Obligatorio
1. **Análisis de Logs:** Antes de tocar el código, lee la terminal y la consola del navegador. Identifica el error exacto (ej. "500 Internal Server Error", "Hydration Error").
2. **Aislamiento:** No intentes arreglar todo a la vez. Aísla el componente o la función de Supabase que falla.
3. **Verificación de Integridad:** Revisa si el error se debe a una desconexión con el servidor MCP de Supabase o a una variable de entorno faltante.
4. **Reparación Atómica:** Aplica un cambio a la vez y verifica inmediatamente usando el navegador integrado.
5. **No Adivinar:** Si no ves el error, añade `console.log` estratégicos para rastrear el flujo de datos.
