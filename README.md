## Configuraciones de instalacion


```npm i eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier -D ```

Se debe crear un archivo **.eslintrc.js** para añadir configuraciones y otro archivo llamado **prettier.config.js**

En los Scripts del **package.json** añadir

```
"lint:fix": "eslint src/ --fix"
```

Si se va a utilizar tailwind se puede jecutar el comando

`npm install tailwindcss postcss autoprefixer`

Adicional a esto se debe ejecutar `npx tailwindcss init -p`, este comando crea dos archivos necesarios para inicializar las configuraciones de tailwind
 
Tambien agregamos un archivo de entorno virtual **.env.local**

Agregamos otro archivo que se llama **jsconfig.json** donde se agregan las configuraciones para establecer alias o path para el acceso a los archivos o estilos de los repositorios

Haremos uso de varias herramientas de iconos que utiliza tailwind UI, asi que instalamos `npm install @heroicons/react`
Otro recurso que utilizaremos con tailwind UI es el siguiente `npm install @headlessui/react`

Instalamos tambien `npm install js-cookie axios` esta libreria es para setear cookies en la aplicacion y hacer peticiones con axiones

Instalamos `npm install chart.js react-chartjs-2` esta libreria es para crear graficos