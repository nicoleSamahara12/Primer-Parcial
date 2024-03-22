function promedio(){
    
    var nombre = parseInt(document.getElementById(nombre).value);
    var matricula = parseInt(document.getElementById(matricula).value);
    var materia1 = parseInt(document.getElementById(materia1).value);
    var calificacion1 = parseInt(document.getElementById(calificacion1).value);
    var materia2 = parseInt(document.getElementById(materia2).value);
    var calificacion2 = parseInt(document.getElementById(calificacion2).value);
    var materia3 = parseInt(document.getElementById(materia3).value);
    var calificacion3 = parseInt(document.getElementById(calificacion3).value);
    var materia4 = parseInt(document.getElementById(materia4).value);
    var calificacion4 = parseInt(document.getElementById(calificacion4).value);
    var materia5 = parseInt(document.getElementById(materia5).value);
    var calificacion5 = parseInt(document.getElementById(calificacion5).value);

    var prom = parseInt(document.getElementById(prom).value);

    var fila="<tr><td>"+_nom+"</td><td>"+_cat+"</td><td>"+_precio+"</td><td>"+_stock+"</td></tr>";

    document.getElementById("tablita").innerHTML = fila;
}