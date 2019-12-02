function validar(formu)
{
	login=formu.login.value;
	clave=formu.clave.value;
	if(login.length==0||clave.length==0)
	alert("Debe llenar todos los campos");
	else if(login !="Heymmar"|| clave !="1234")
			alert("Nombre de usuario o clave incorrecta");
	else{
			location.href="agenda.html";
		}
}
Agenda = new Array();

Agenda[0] = new Array(0);
Agenda[0][0] = "Heymmar";
Agenda[0][1] = "Eliazithzeledo27@gmail.com";
Agenda[0][2] = "78999";
Agenda[0][3] = "Estudio en managua";

Agenda[1] = new Array(1);
Agenda[1][0] = "Eliazith";
Agenda[1][1] = "jsd544@gmail.com";
Agenda[1][2] = "75424841";
Agenda[1][3] = "estudio en managua";

Agenda[2] = new Array(2);
Agenda[2][0] = "helen duart";
Agenda[2][1] = "hg234@gmail.com";
Agenda[2][2] = "4334347";
Agenda[2][3] = "estudio en leon";

Agenda[3] = new Array(3);
Agenda[3][0] = "Albert";
Agenda[3][1] = "albert@gmail.com";
Agenda[3][2] = "31458796";
Agenda[3][3] = "Ninguna";

Agenda[4] = new Array(4);
Agenda[4][0] = "Henry";
Agenda[4][1] = "henry@gmail.com";
Agenda[4][2] = "7865453";
Agenda[4][3] = "Ninguna";

Agenda[5] = new Array(5);
Agenda[5][0] = "elias";
Agenda[5][1] = "eliasgless@gmail.com";
Agenda[5][2] = "7577";
Agenda[5][3] = "estudio en jinotega";

Agenda[6] = new Array(6);
Agenda[6][0] = "amilie";
Agenda[6][1] = "amgine23@gmail.com";
Agenda[6][2] = "123457";
Agenda[6][3] = "estudio en masaya";


total=6;
actual=0;
Esnuevo=false;

function iniciar(formu)
{
	formu.nombre.value = Agenda[actual][0];	
	formu.email.value = Agenda[actual][1];
	formu.telefono.value = Agenda[actual][2];
	formu.notas.value = Agenda[actual][3];
}

function nuevo(formu)
{
	Esnuevo=true;
	formu.nombre.value = "";	
	formu.email.value = "";
	formu.telefono.value = "";
	formu.notas.value = "";
}

function guardar(formu)
{
	if(Esnuevo == true)
	{
        if (formu.nombre.value != "" || formu.email.value != "" || formu.telefono.value != "" || formu.notas.value != "" ) 
        {
		 	Agenda[total] = new Array(4);
			Agenda[total][0] = formu.nombre.value;
			Agenda[total][1] = formu.email.value;
			Agenda[total][2] = formu.telefono.value;
			Agenda[total][3] = formu.notas.value;
			total++;
			Esnuevo = false;
			actual = total-1;
			alert("Archivo Guardado Correctamente");
		}else{
		    alert("los campos deben estar llenos");
	    }
	}
     else
		{
			Agenda[actual][0] = formu.nombre.value;
			Agenda[actual][1] = formu.email.value;
			Agenda[actual][2] = formu.telefono.value;
			Agenda[actual][3] = formu.notas.value;
			alert("Archivo Editado Correctamente");
	    }
}


function primero(formu)
{
	if(Esnuevo==true)
		Esnuevo=false;
	formu.nombre.value = Agenda[0][0];	
	formu.email.value = Agenda[0][1];
	formu.telefono.value = Agenda[0][2];
	formu.notas.value = Agenda[0][3];
}

function anterior(formu)
{
	if(Esnuevo==true)
		Esnuevo=false;

	if(actual > 0)
		actual--;

	formu.nombre.value = Agenda[actual][0];	
	formu.email.value = Agenda[actual][1];
	formu.telefono.value = Agenda[actual][2];
	formu.notas.value = Agenda[actual][3];
}

function siguiente(formu)
{
	if(Esnuevo==true)
		Esnuevo=false;

	if(actual < (total - 1))
		actual++;

	formu.nombre.value = Agenda[actual][0];	
	formu.email.value = Agenda[actual][1];
	formu.telefono.value = Agenda[actual][2];
	formu.notas.value = Agenda[actual][3];
}

function ultimo(formu)
{
	if(Esnuevo==true)
		Esnuevo=false;

	formu.nombre.value = Agenda[total-1][0];	
	formu.email.value = Agenda[total-1][1];
	formu.telefono.value = Agenda[total-1][2];
	formu.notas.value = Agenda[total-1][3];
}

function borrar(formu)
{
	if (formu.nombre.value != "" || formu.email.value != "" || formu.telefono.value != "" || formu.notas.value != "" ) 
	{
	    resp = confirm("Esta seguro que desea borrar este contacto");
	    if(resp == true)
       	{
			var i=0;
			if(actual != (total-1))
			for(i=actual;i<(total-1);i++)
			{
				Agenda[i][0] = Agenda[i+1][0];
				Agenda[i][1] = Agenda[i+1][1];
				Agenda[i][2] = Agenda[i+1][2];
				Agenda[i][3] = Agenda[i+1][3];
			}
			delete Agenda[(total-1)];

			total--;
			actual = 0;

			formu.nombre.value = Agenda[actual][0];	
			formu.email.value = Agenda[actual][1];
			formu.telefono.value = Agenda[actual][2];
			formu.notas.value = Agenda[actual][3];
			alert("Archivo Borrado");
		}
    }else
    {
		alert("Los campos deben estar llenos");
	}
}

function buscar(formu)
{
	busc = prompt("nombre que desea buscar");
	for(i=0;i<=total-1;i++)
	{
		if(Agenda[i][0].indexOf(busc)!=-1)
		{
			actual=i;
			formu.nombre.value = Agenda[actual][0];	
			formu.email.value = Agenda[actual][1];
			formu.telefono.value = Agenda[actual][2];
			formu.notas.value = Agenda[actual][3];		
			return;
		}
	}
	alert("Registro no encontrado");
}
