(function() 
{

	var actualizar_hora = function() 
	{
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			vaiminutos = fecha.getMinutes(),
			vaisegundos = fecha.getSeconds(),
			vaidiasemana = fecha.getDay(),
			vaidia = fecha.getDate(),
			vaimes = fecha.getMonth(),
			vaianio = fecha.getFullYear();


		var xHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			xMinutos = document.getElementById('minutos'),
			xSegundos = document.getElementById('segundos'),
			xDiaSemana = document.getElementById('dia_semana'),
			xDia = document.getElementById('dia'),
			xMes = document.getElementById('mes'),
			xAnio = document.getElementById('anio'); 


		var listasemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		xDiaSemana.textContent = listasemana[vaidiasemana];	

	
		xDia.textContent = vaidia;

		var listames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		xMes.textContent = listames[vaimes];

		xAnio.textContent = vaianio;


		if (horas >= 12) {
			horas = horas - 12;
			ampm = "PM";	
		}	else {
				ampm = "AM";
		}

		if (horas == 0) {
			horas = 12;
		};
		
		xHoras.textContent = horas;
		pAMPM.textContent = ampm;


		if (vaiminutos < 10){
			vaiminutos = "0" + vaiminutos
		};

		if (vaisegundos < 10) {
			vaisegundos = "0" + vaisegundos

		};


		xMinutos.textContent = vaiminutos;
		xSegundos.textContent = vaisegundos;
	};

	actualizar_hora();
	var intervalo = setInterval(actualizar_hora, 1000);
}())
var canvas = document.getElementById("canvas_reloj");
var objdibujo = canvas.getContext("2d");
var radio = (canvas.height / 2);
objdibujo.translate(radio, radio);
radio = radio * 0.8;
setInterval(reloj_run, 1000); 

function reloj_run()
{
    frente_reloj	(objdibujo, radio);
    numeros_reloj	(objdibujo, radio);
    tiempo_reloj	(objdibujo, radio);
}

function frente_reloj(objdibujo, radio)
{
    var editarcolor;
    objdibujo.beginPath();
    objdibujo.arc(0,0,radio,0,2*Math.PI);
    objdibujo.fillStyle = "white";
    objdibujo.fill();
    editarcolor = objdibujo.createRadialGradient(0,0,radio*0.95, 0,0,radio*1.05);
    editarcolor.addColorStop(0.01, 'black');
    editarcolor.addColorStop(0.1, 'white');
	editarcolor.addColorStop(0.9, 'grey');
	editarcolor.addColorStop(0.3, 'black');
    objdibujo.strokeStyle = editarcolor;
    // objdibujo.lineWidth = radio*0.01;
	objdibujo.lineWidth = radio*0.1
    objdibujo.stroke(); 
    objdibujo.beginPath();
    objdibujo.arc(0,0, radio*0.1,0,2*Math.PI);
    objdibujo.fillStyle = 'black';
    objdibujo.fill();
}

function numeros_reloj(objdibujo, radio) {
    var angulox;
    var numerox;
    objdibujo.font = radio + "% arial";
    objdibujo.textBaseline = "middle";
    objdibujo.textAlign = "center";
    for(numerox=1; numerox < 13; numerox++)
	{ 
        angulox = numerox * Math.PI /6;
        objdibujo.rotate	(angulox);
        objdibujo.translate	(0, -radio*0.85);
        objdibujo.rotate	(-angulox);
        objdibujo.fillText	(numerox.toString(), 0, 0);
        objdibujo.rotate(angulox);
        objdibujo.translate(0, radio*0.85);
        objdibujo.rotate(-angulox);
    }
}

function tiempo_reloj(objdibujo, radio){
    var tiempo_actual = new Date();
    var hora = tiempo_actual.getHours();
    var minutos = tiempo_actual.getMinutes();
    var segundos = tiempo_actual.getSeconds();
    hora = hora%12;
    hora = (hora*Math.PI/6)+(minutos*Math.PI/(6*60))+(segundos*Math.PI/(360*60));
    manecillas_reloj(objdibujo, hora, radio*0.5, radio*0.05);
    minutos=(minutos*Math.PI/30)+(segundos*Math.PI/(30*60));
    manecillas_reloj(objdibujo, minutos, radio*0.7, radio*0.05);
    segundos=(segundos*Math.PI/30);
    manecillas_reloj(objdibujo, segundos, radio*0.9, radio*0.02);
}

function manecillas_reloj(objdibujo, a, b, ancho){
    objdibujo.beginPath();
    objdibujo.lineWidth = ancho;
    objdibujo.lineCap = "round";
    objdibujo.moveTo(0,0);
    objdibujo.rotate(a);
    objdibujo.lineTo(0, -b);
    objdibujo.stroke();
    objdibujo.rotate(-a);
}