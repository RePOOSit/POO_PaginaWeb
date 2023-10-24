// FILEPATH: /c:/Users/manue/Downloads/owo/Clases.js
class Nota {
    constructor() {
        this.Titulo;
        this.Contenido;
        this.Fecha;
    }
}

class Notebooks {
    constructor() {
        this.Notas;
    }
    
    insertarNota(nota) {
        this.Notas.push(nota);
    }
}

class Tema {
    constructor() {
        this.Titulo;
    }
}