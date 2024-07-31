import { defineConfig } from 'vite'
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';
import handlerBarsContext from './variables.js';

export default defineConfig(
    {
        appType: 'mpa',
        base: "/CEB_T.C.A.Vite/",
        build: {
            rollupOptions: {
                input: Object.fromEntries(
                    [
                        ...glob.sync('./!(dist)/*.html').map(
                            file => [
                                file.slice(0, file.length - path.extname(file).length),
                                resolve(__dirname, file)
                            ]
                        ),
                        ...glob.sync('./*.html').map(
                            file => [
                                file.slice(0, file.length - path.extname(file).length),
                                resolve(__dirname, file)
                            ]
                        )
                    ]
                )
            }
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(__dirname, 'partials'), // Directorio de plantillas parciales de Handlebars
                context: handlerBarsContext, // Contexto para las plantillas de Handlebars
                order: 'pre', // Define el orden de ejecución de los plugins
                handler: (content) => { // Personalización del contenido, si es necesario
                    // Código de transformación, actualmente no modifica el contenido
                    return content;
                },
                helpers: {
                    // Helper personalizado para filtrar imágenes por tipo
                    filtrarPorTipo: function (imagenes, tipo, options) {
                        var result = '';
                        imagenes.forEach(function (imagen) {
                            if (imagen.tipo === tipo) {
                                result += options.fn(imagen);
                            }
                        });
                        return result;
                    }
                }
            }),
            htmlPurge({
                // Opciones para purgar CSS no utilizado
                content: ['./src/**/*.html'], // Archivos HTML a analizar para purga de CSS
                safelist: ['safe-class'], // Clases CSS que deben mantenerse
            }),
            ViteMinifyPlugin({
                // Opciones para la minificación de JavaScript y CSS
            }),
        ],
    });
