# pemex-vue-template
Plantilla para proyectos de frontend basados en Nuxt.js.

## Requisitos
* [Node.js](https://nodejs.org/en/)
* Node Version Manager (opcional para instalar múltiples versiones de Node.js)
  * Linux/Mac: [nvm-sh](https://github.com/nvm-sh/nvm)
  * Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
* Docker (compilación de la imagen y pruebas locales)
  * Linux: [Install Docker Engine](https://docs.docker.com/engine/install/)
  * Mac/Windows: [Docker Desktop](https://www.docker.com/get-started)

## Preparación
### 1. Clonar repositorio con el nombre del nuevo proyecto
```shell
git clone https://remote.git.server.io/path/to/this/repo my-web-app
cd my-web-app
```
### 2. Personalizar
#### Linux/Mac
```shell
# Copiar plantillas
cp .env.template .env.dev
cp compose.template.yml compose.dev.yml

# Personalizar para ambiente local
vi .env.dev
vi compose.dev.yml
```
#### Windows
```powershell
# Copiar plantillas
copy .env.template .env.dev
copy compose.template.yml compose.dev.yml

# Personalizar para ambiente local
notepad .env.dev
notepad compose.dev.yml
```

## Desarrollo
### Edición con Hot Reload
```shell
# Instalar dependencias
npm install
# Servidor local con hot reload
npm run dev
```
### Ejecución en contenedor
```shell
# Compilar la imagen Docker localmente
docker build --build-arg APP_NAME=my-web-app -t my-web-app:dev .
# Ejecutar contenedor
docker-compose -f compose.dev.yml up -d
```

## Producción
```shell
# Compilar y optimizar recursos
npm run build

# Compilar la imagen Docker localmente incluyendo el
# host del repositorio remoto y el nombre y versión
# de la aplicación en el tag de la imagen
docker build --build-arg APP_NAME=my-web-app -t remote.registry.io/my-web-app:1.0.0 .

# Subir la imagen Docker al repositorio remoto
docker login remote.registry.io -u
docker push remote.registry.io/my-web-app:1.0.0
```
# nuxt-gus
