// JavaScript Document
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
