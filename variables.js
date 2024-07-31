import {
    navegacion,
    subMenu,
    mobileMenu,
    historia,
    carrusel,
    cardIndex,
    cardAcerca,
    AcercaImg,
    TipoPropuesta,
    propuestaImg,
    bibliotecaImg,
    tipoBiblioteca,
    noticiasCard,
    quienesImg,
    tipoQuines, valoresCard,
    tipoGaleria,
    galeriaImg

} from "./js/data";
const handlerBarsContext = {
    "/index.html": {
        title: "Inicio",
        logo: "/img/libro_abierto.webp",
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        historia: historia,
        carrusel: carrusel,
        cardIndex: cardIndex,



    },
    "/page/acercade.html": {
        title: "CEB T.C.A - Acerca de Acerca",
        logo: "/CentroBasico/imagenes/Logo.ico",
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        cardAcerca: cardAcerca,
        AcercaImg: AcercaImg

    },
    "/page/propuestas.html": {
        title: "CEB T.C.A - Propuesta",
        logo: "/CentroBasico/imagenes/Logo.ico",
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        TipoPropuesta: TipoPropuesta,
        propuestaImg: propuestaImg

    },
    "/page/biblioteca.html": {
        title: "CEB T.C.A - Biblioteca",
        logo: "/CentroBasico/imagenes/Logo.ico",
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        tipoBiblioteca: tipoBiblioteca,
        bibliotecaImg: bibliotecaImg


    },
    "/page/noticias.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Noticia",
        logo: "/CentroBasico/imagenes/Logo.ico",
        noticiasCard: noticiasCard
    },
    "/page/admisiones.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Admisiones",
        logo: "/CentroBasico/imagenes/Logo.ico",
    },
    "/page/contacto.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Admisiones",
        logo: "/CentroBasico/imagenes/Logo.ico",
    },
    "/page/quienessomos.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Quiénes Somos",
        logo: "/CentroBasico/imagenes/Logo.ico",
        tipoQuines: tipoQuines,
        quienesImg: quienesImg
    },
    "/page/valores.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Valores",
        logo: "/CentroBasico/imagenes/Logo.ico",
        valoresCard: valoresCard
    },
    "/page/galeria.html": {
        navegacion: navegacion,
        subMenu: subMenu,
        mobileMenu: mobileMenu,
        title: "CEB T.C.A - Galería",
        logo: "/CentroBasico/imagenes/Logo.ico",
        galeriaImg: galeriaImg,
        tipoGaleria: tipoGaleria

    }
};

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] };
    return context;
};
export default pageContext;
