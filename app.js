const sr = ScrollReveal();

sr.reveal(".SomeImg div",{
    duration: 2000,
    reset: true,
});

window.addEventListener('load',function() {
    console.log("Funciona");

    var Imagenes = [];
    total = 4;

    Imagenes[0] = "./img/Imagen1.jpg";
    Imagenes[1] = "./img/Imagen2.jpg";
    Imagenes[2] = "./img/Imagen3.jpg";
    Imagenes[3] = "./img/Imagen4.jpg";

    document.slider.src = Imagenes[1];

    var i = 2;

    function CambiarImagenes() {
        document.slider.src = Imagenes[i];
        if (i < total-1) {
            i++;
        } else {
            i = 0;
        }
    }

    setInterval(CambiarImagenes, 3000);
});     