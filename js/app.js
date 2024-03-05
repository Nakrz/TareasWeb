document.addEventListener("DOMContentLoaded", function() {
    const nombreTareaInput = document.getElementById("taskName");
    const fechaIniInput = document.getElementById("fechaIni");
    const fechaVenInput = document.getElementById("fechaVen");
    const responsableInput = document.getElementById("responsable");
    const altoRadio = document.getElementById("alto");
    const medioRadio = document.getElementById("medio");
    const bajoRadio = document.getElementById("bajo");
    const botonSubir = document.getElementById("uploadButton");
    const tareasPendientes = document.getElementById("tareasPendientes");
    const tareasCompletadas = document.getElementById("tareasCompletadas");
    const tareasFallidas = document.getElementById("tareasFallidas");

    botonSubir.addEventListener("click", function() {
        const nombreTarea = nombreTareaInput.value;
        const fechaIni = fechaIniInput.value;
        const fechaVen = fechaVenInput.value;
        const responsable = responsableInput.value;
        let nivel = "";

        if (altoRadio.checked) {
            nivel = altoRadio.value;
        } else if (medioRadio.checked) {
            nivel = medioRadio.value;
        } else if (bajoRadio.checked) {
            nivel = bajoRadio.value;
        }

        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = `Nombre: ${nombreTarea}, Responsable: ${responsable}, Nivel: ${nivel}, Fecha: ${fechaVen}`;

        const botonCompletada = document.createElement("button");
        botonCompletada.textContent = "Completada";
        botonCompletada.addEventListener("click", function() {
            tareasCompletadas.appendChild(nuevaTarea);
            this.remove(); 

            botonFallida.remove(); 
        });

        const botonFallida = document.createElement("button");
        botonFallida.textContent = "Fallida";
        botonFallida.addEventListener("click", function() {
            tareasFallidas.appendChild(nuevaTarea);
            this.remove(); 
        });

        nuevaTarea.appendChild(botonCompletada);
        
        if (!tareasCompletadas.contains(this)) {
            nuevaTarea.appendChild(botonFallida);
        }

        tareasPendientes.appendChild(nuevaTarea);
    });
});
