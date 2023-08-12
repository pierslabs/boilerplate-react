# React BoilerPlate

## Descripción

Este es un proyecto boilerplate que está diseñado para trabajar con React y TypeScript utilizando Vite como herramienta de desarrollo. Proporciona una configuración inicial con las dependencias y scripts necesarios para comenzar a desarrollar rápidamente aplicaciones web modernas con React.

- React
- Tailwind
- Vitest
- Testing Library
- Axios
- Framer-motion
- Moment
- React-hot
- React icons
- React router

## Inicio rápido

Si deseas comenzar a usar este repositorio, aquí tienes dos formas de hacerlo:

### Opción 1: Instalación Directa desde NPM

Puedes instalar y configurar tu aplicación directamente desde NPM utilizando el siguiente comando en tu terminal:

```bash
npx @pierslabs/boilerplate-react <nombre-de-tu-app>
```

Sustituye `<nombre-de-tu-app>` por el nombre que desees para tu aplicación. Esto creará una nueva instancia de tu aplicación con la configuración predeterminada.

### Opción 2: Clonar desde GitHub

Si prefieres tener más control sobre la configuración inicial, puedes clonar el repositorio desde GitHub y luego realizar los pasos de instalación manualmente:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu_usuario/boilerplate.git
```

2. Navega al directorio del proyecto:

```bash
cd boilerplate
```

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

## Scripts

- `dev`: Ejecuta el servidor de desarrollo Vite.
- `build`: Realiza una compilación del código fuente utilizando TypeScript y genera una versión optimizada para producción.
- `lint`: Ejecuta ESLint para verificar el cumplimiento de las reglas de codificación en los archivos TypeScript y TypeScript React.
- `preview`: Ejecuta Vite en modo de vista previa.
- `test`: Ejecuta las pruebas utilizando "vitest".
- `coverage`: Ejecuta las pruebas con cobertura utilizando "vitest".

## Dependencias principales

- `axios`: Biblioteca para realizar solicitudes HTTP.
- `react`: Biblioteca principal de React.
- `react-dom`: Biblioteca para interactuar con el DOM en aplicaciones React.
- `react-icons`: Conjunto de iconos para React.
- `react-router-dom`: Enrutador para aplicaciones React.

# Desinstalar dependencias

Para desinstalar una dependencia que no quieras utilizar en tu proyecto, puedes seguir estos pasos generales:

1. Abre una terminal o línea de comandos en el directorio de tu proyecto.

2. Utiliza el administrador de paquetes de tu elección (npm o yarn) para desinstalar la dependencia. Aquí te muestro cómo hacerlo para ambas opciones:

   - **Usando npm:**

     Para desinstalar una dependencia con npm, debes utilizar el siguiente comando:

     ```bash
     npm uninstall nombre_de_la_dependencia
     ```

     Por ejemplo, para desinstalar "framer-motion", ejecuta:

     ```bash
     npm uninstall framer-motion
     ```

   - **Usando yarn:**

     Para desinstalar una dependencia con yarn, debes utilizar el siguiente comando:

     ```bash
     yarn remove nombre_de_la_dependencia
     ```

     Por ejemplo, para desinstalar "framer-motion", ejecuta:

     ```bash
     yarn remove framer-motion
     ```

3. Una vez que hayas ejecutado el comando, el paquete se eliminará de las dependencias de tu proyecto.

4. Asegúrate de guardar los cambios en tu archivo `package.json`. Si utilizaste npm, esto ya se habrá hecho automáticamente. Si utilizaste yarn, puedes ejecutar el siguiente comando para actualizar el archivo `yarn.lock`:

   ```bash
   yarn install --force
   ```

Con estos pasos, habrás desinstalado la dependencia que no deseas utilizar en tu proyecto. Puedes repetir el proceso para eliminar cualquier otra dependencia que no necesites.

## Contribución

¡Gracias por considerar contribuir al proyecto! Si tienes alguna mejora, nueva función o corrección de errores, siéntete libre de abrir un "issue" o enviar una "pull request".

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## Contacto

Si tienes alguna pregunta o comentario, puedes ponerte en contacto conmigo a través de mi correo electrónico: pedrolosasp@gmail.com

¡Espero que este boilerplate te sea útil para tus proyectos! ¡Feliz codificación!
