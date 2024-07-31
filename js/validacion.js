const formInputs = {
    "nombre": null,
    "apellido": null,
    "identidad": null,
    "padre": null,
    "madre": null,
    "escuela": null,
    "masculino": null,
    "femenino": null,
    "direccion": null,
    "fecha_nacimiento": null,
    "email": null,
    "telefono": null,
    "grado": null,
    "motivo": null,
};

document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});


document.addEventListener("DOMContentLoaded", () => {
    initPageLoad();
});

function initPageLoad() {
    formInputs.nombre = document.getElementById("nombre");
    formInputs.apellido = document.getElementById("apellido");
    formInputs.identidad = document.getElementById("identidad");
    formInputs.padre = document.getElementById("padre");
    formInputs.madre = document.getElementById("madre");
    formInputs.direccion = document.getElementById("direccion");
    formInputs.masculino = document.getElementById("masculino");  
    formInputs.femenino = document.getElementById("femenino");  
    formInputs.email = document.getElementById("email");
    formInputs.escuela = document.getElementById("escuela");
    formInputs.telefono = document.getElementById("telefono");
    formInputs.grado = document.getElementById("grado");
    formInputs.motivo = document.getElementById("motivo");
    formInputs.fecha = document.getElementById("nacimiento");
    console.log("Formulario Cargado", formInputs);

    document.getElementById("admiciones").addEventListener("submit", (e) => {
        const [errors, isValid] = validateForm();
        if (!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}



function validateForm() {
    let errors = [];

    if (isEmpty(formInputs.nombre.value)) {
        errors.push("El campo nombre no puede estar vacío");
    }
 
    if (isEmpty(formInputs.apellido.value)) {
        errors.push("El campo apellido no puede estar vacío");
    }

    if (!isValidIdentidad(formInputs.identidad.value)) {
        errors.push("Ingrese un número de identidad válido (13 dígitos)");
    } 
    if (isEmpty(formInputs.direccion.value)) {
        errors.push("El campo dirección no puede estar vacío");
    }

    const fechaNacimiento = formInputs.fecha.value;
    if (isEmpty(fechaNacimiento) || !dateIsNotBeforeToday(fechaNacimiento)) {
        errors.push("Ingrese una fecha de nacimiento válida");
    }

    if (!isValidEmail(formInputs.email.value)) {
        errors.push("Ingrese un correo electrónico válido");
    }

    if (!isValidTelefono(formInputs.telefono.value)) {
        errors.push("Ingrese un número de teléfono válido");
    }

    if (isEmpty(formInputs.grado.value)) {
        errors.push("El campo grado no puede estar vacío");
    }

    if (isEmpty(formInputs.motivo.value)) {
        errors.push("El campo motivo de admisión no puede estar vacío");
    }


    if (isEmpty(formInputs.padre.value)) {
        errors.push("El campo nombre del padre no puede estar vacío");
    }

    if (isEmpty(formInputs.madre.value)) {
        errors.push("El campo nombre de la madre no puede estar vacío");
    }

    if (!formInputs.masculino.checked && !formInputs.femenino.checked) {
        errors.push("Seleccione una opción para el género");
    }

    if (formInputs.escuela.value === "escuela") {
        errors.push("Seleccione una escuela válida");
    }

    return [errors, errors.length == 0];
}

// Validadores
function isEmpty(value) {
    return /^\s*$/.test(value);
}

function isPhone(value) {
    const phoneRegex = /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/;
    return phoneRegex.test(value);
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function isValidIdentidad(value) {
    return /^\d{13}$/.test(value);
}

function isValidEmail(value) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
}

function isValidTelefono(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}


function dateIsNotBeforeToday(value) {
    const date = inputValueToDate(value);
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    console.log("Date", date, today);
    return date >= today;
}

function dateToInputValue(date) {
    return date.toISOString().split('T')[0];
}



function inputValueToDate(value) {
    const [year, month, day] = value.split("-");
    let d = new Date();
    d.setFullYear(Number(year));
    d.setMonth(Number(month) - 1);
    d.setDate(Number(day));
    d = toStartOfDate(d);
    return d;
}

function toEndOfDate(date) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    return date;
}

function toStartOfDate(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}
