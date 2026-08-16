# Mi-Primer-Videojuego
<!-- README.md -->
# Piedra, Papel o Tijera

Aplicación web interactiva construida con JavaScript, Sigue una arquitectura modular orientada a componentes.

## Arquitectura de Carpetas

* **`src/app.js`**: Punto de entrada de la aplicación.
* **`src/components/`**: Funciones encargadas de construir el DOM virtualmente e insertarlo.
* **`src/config/`**: Archivos de constantes y configuración general (Reglas, Identificadores).
* **`src/store/`**: Manejo del estado global de la aplicación, persistido en LocalStorage.
* **`src/utils/`**: Funciones puras (Lógica de negocio y manipuladores genéricos del DOM).

## Instrucciones de Ejecución

### Desarrollo Local (VS Code)
1. Clona el repositorio: `git clone <tu-repo-url>`
2. Abre la carpeta en VS Code.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

### Despliegue en Vercel
1. Instala Vercel CLI o conecta tu repositorio de GitHub en el dashboard de Vercel.
2. Si usas CLI, ejecuta el comando `vercel` en la raíz del proyecto.
3. Acepta las configuraciones predeterminadas (Framework Preset: "Other", Build Command: "None").

