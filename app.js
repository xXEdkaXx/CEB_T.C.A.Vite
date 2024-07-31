import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

// Variables para resolver __dirname y __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configurar Handlebars como el motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static('public'));

// Datos dinámicos para la plantilla
const data = {
    title: "CEB Tiburcio Carias Andino",
    icon: "./CentroBasico/imagenes/Logo.ico",
    styles: {
        plantilla: "./less/plantilla.less",
        slider_panel: "./less/slider_panel.less",
        cards: "./less/cards.less",
        custom: "./css/custom.css"
    },
    scripts: {
        nav: "./js/nav.js",
        carrusel: "./js/carrusel.js"
    },
    images: {
        logo: "./CentroBasico/imagenes/Logo.png"
    },
    navLinks: [
        {
            url: "./html/acercade.html",
            text: "Acerca de",
            submenu: [
                { url: "./html/quienessomos.html", text: "¿Quiénes Somos?" },
                { url: "./html/valores.html", text: "Valores" },
                { url: "./html/galeria.html", text: "Galería" }
            ]
        },
        { url: "./html/propuestas.html", text: "Propuestas" },
        { url: "./html/biblioteca.html", text: "Biblioteca" },
        { url: "./html/noticias.html", text: "Noticias" },
        { url: "./html/admisiones.html", text: "Admisiones" }
    ],
    links: {
        home: "./index.html",
        contact: "./html/contacto.html"
    },
    main: {
        title: "Bienvenido a Nuestra Escuela",
        mision: {
            title: "Misión",
            text: "El Centro de Educación Básica 'Tiburcio Carias Andino' es una institución educativa comprometida con la transformación educativa de los niños y niñas del municipio. Nuestra misión es proporcionar una educación básica de alta calidad con sensibilidad hacia los niños con necesidades especiales, creando un ambiente de respeto y compañerismo."
        },
        vision: {
            title: "Visión",
            text: "Para el año 2023, el Centro de Educación Básica 'Tiburcio Carias Andino' se convertirá en una institución con una infraestructura física que satisface las necesidades básicas de la población escolar. Nuestros alumnos se graduarán con sólidos valores morales y espirituales, preparados para enfrentar los desafíos y oportunidades que ofrece la sociedad, con el objetivo de mejorar su calidad de vida. Contaremos con un personal altamente capacitado, dinámico, creativo y comprometido."
        }
    },
    slider: {
        images: [
            { src: "./CentroBasico/imagenes/Diseño sin título.png", alt: "Referencia 1" },
            { src: "./CentroBasico/imagenes/nosotros_07.webp", alt: "Referencia 2" },
            { src: "./CentroBasico/imagenes/actividades_07.webp", alt: "Referencia 3" },
            { src: "./CentroBasico/imagenes/desfile_05.webp", alt: "Referencia 4" },
            { src: "./CentroBasico/imagenes/cuadro_danza_04.webp", alt: "Referencia 5" },
            { src: "./CentroBasico/imagenes/nosotros_05.webp", alt: "Referencia 6" }
        ]
    },
    news: [
        {
            image: "./CentroBasico/imagenes/usaid.jpg",
            title: "Cabildo Abierto",
            text: "CEB Tiburcio Carías Andino participa activamente en el Cabildo Abierto 2023 de la Mujer, Niñez y Juventud, expresando sus opiniones sobre temas clave para estos sectores y fortaleciendo la colaboración con las autoridades gubernamentales.",
            date: "6 de noviembre de 2023"
        },
        {
            image: "./CentroBasico/imagenes/cuadro_danza_03.jpg",
            title: "Festival de Danza",
            text: "Felicidades al CEB Tiburcio Carías Andino por obtener el primer lugar en danzas, segundo ciclo, y el tercer lugar en tercer ciclo en el concurso patrocinado por el grupo folklórico Quelala. Reconocemos al Prof. Rómulo Antonio Perdomo como Mejor Instructor del segundo ciclo y a la Mejor Bailarina en básica, segundo ciclo. ¡Excelente desempeño y logros destacados!",
            date: "6 de noviembre de 2023"
        },
        {
            image: "./CentroBasico/imagenes/desfile_09.jpg",
            title: "Desfile de la independencia",
            text: "El CEB Tiburcio Carías Andino se destacó en el desfile del 14 de septiembre, celebrando con fervor patrio nuestra independencia. Felicitamos a maestros, padres y alumnos de nuestra prestigiosa institución por su empeño y dedicación, contribuyendo al éxito de este importante evento cívico.",
            date: "15 de septiembre del 2023"
        }
    ],
    footer: {
        text1: "CEB TIBURCIO CARIAS ANDINO, Jesús de Otoro",
        text2: "Tel. 7568-3698",
        text3: "Whatsapp +50495-9668",
        text4: "cebtiburciocarias85andino@gmail.com",
        year: "2023",
        rights: "Todos los Derechos Reservados PW"
    }
};

// Ruta para renderizar la página principal
app.get('/', (req, res) => {
    res.render('home', data);
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
