import { defineConfig } from "vite";
import * as glob from "glob";
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import path, { resolve } from "node:path";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(
    {
        appType: "mpa",
        base: "https://xxedkaxx.github.io/CEB_T.C.A.Vite/",
        build: {
            rollupOptions: {
                input: Object.fromEntries(
                    [
                        // Genera entradas para todos los archivos HTML excepto los del directorio 'dist'
                        ...glob.sync('./!(dist)/*.html').map(file => [
                            file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                        ]),
                        // Genera entradas para todos los archivos HTML en la raíz del proyecto
                        ...glob.sync('./*.html').map(file => [
                            file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                        ])
                    ]
                ),
            },
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(__dirname, 'partials'), // Directorio de plantillas parciales de Handlebars
                context: (pagePath) => {
                    console.log(pagePath);
                    const contextVariable = getPageContext(pagePath);
                    console.log(contextVariable);
                    return contextVariable;
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
