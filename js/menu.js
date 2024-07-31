document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('check');
    var nav = document.querySelector('nav');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            nav.classList.add('show-menu');
        } else {
            nav.classList.remove('show-menu');
        }
    });
});

const container = document.getElementById("imageContainer");

images.forEach(imageSrc => {
    const referenceDiv = document.createElement("div");
    referenceDiv.className = "referencia";

    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "Reference Image";

    referenceDiv.appendChild(image);
    container.appendChild(referenceDiv);
});
document.addEventListener("DOMContentLoaded", function() {

    var titles = document.querySelectorAll('.nosotros_titulo');

    titles.forEach(function(title) {
        title.addEventListener('click', function() {
       
            var paragraph = this.nextElementSibling; 
            if (paragraph.style.display === 'none' || paragraph.style.display === '') {
                paragraph.style.display = 'block';
            } else {
                paragraph.style.display = 'none';
            }
        });
    });
});
