Si tu sitio se ve "barato" o desalineado, esta skill forzará el estándar visual de EVO WRAP,.
---
name: luxury-ui-fixer
description: Úsalo para corregir problemas visuales, de alineación o cuando el sitio no se sienta "Premium".
---
# Estándar de UI "Dark Luxury"

Tu objetivo es pulir la interfaz para que coincida con un servicio de detailing de alta gama (Ferraris, Porsches).

## Reglas de Estilo (Tailwind CSS)
1. **Fondo y Contraste:** Usa `bg-slate-950` o `bg-black` como base. Nunca uses gris por defecto.
2. **Tipografía:** Asegúrate de que los títulos usen una fuente sans-serif limpia (Inter/Geist) con `tracking-tight`.
3. **Espaciado:** Si los elementos están pegados, aumenta el `padding` y `gap`. El lujo requiere espacio negativo.
4. **Imágenes:** Todas las imágenes de autos deben tener `object-cover` y bordes sutiles o sombras difuminadas (`shadow-2xl`, `shadow-primary/20`).
5. **Vidrio:** Aplica efectos de Glassmorphism (`backdrop-blur-md`, `bg-white/10`) en tarjetas sobre fondos complejos.
3. Skill de Backend: supabase_integrity.md
Para solucionar problemas de datos que no cargan o errores de conexión,.
---
name: supabase-integrity
description: Úsalo cuando no carguen los datos, el login falle o las reservas no se guarden.
---
# Guardián de Datos Supabase

1. **Verificar RLS:** Revisa si las políticas de Row Level Security en Supabase están bloqueando las lecturas/escrituras. (El error más común).
2. **Tipado:** Asegúrate de que los tipos de TypeScript coincidan con las columnas reales de la base de datos.
3. **Manejo de Errores:** Envuelve todas las llamadas a Supabase en bloques `try/catch` y muestra un mensaje amigable al usuario si falla (ej. "No pudimos cargar tus citas").