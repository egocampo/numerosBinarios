function decimalBinario()
{
	var numeroIngresado;
	var numeroEntero;
	var restosEntero=[];
	var resultadosEnteros=[];
	var stringEntero="";
	var stringCuentaEntero="";
	var numeroDecimal;
	var resultadosDecimales=[];
	var restosDecimales=[];
	var stringDecimal="";
	var stringCuentaDecimal="";
	var resultadoAuxiliar;
	var stringCuentaTotal="";

	numeroIngresado=parseFloat(document.getElementById('txtIdNumeroDecimal').value);
	console.log("numero ingresado "+numeroIngresado);
	numeroEntero=parseInt(numeroIngresado);
	numeroDecimal=numeroIngresado%1;
	console.log("numero decimal "+numeroDecimal);
	resultadosEnteros[0]=numeroEntero;
	resultadosDecimales[0]=numeroDecimal;
	console.log("numero decimal en array 0 "+resultadosDecimales[0]);

	for(var i=0;;i++)
	{
		resultadosEnteros[i+1]=parseInt(resultadosEnteros[i]/2);
		stringCuentaEntero+=resultadosEnteros[i]+" / 2 = "+resultadosEnteros[i+1];
		if(resultadosEnteros[i+1]==0)
		{
			restosEntero[i]=resultadosEnteros[i];
			stringCuentaEntero+=" con resto: "+restosEntero[i]+"<BR>";
			break;
		}
		else
		{
			restosEntero[i]=resultadosEnteros[i]%2;
			stringCuentaEntero+=" con resto: "+restosEntero[i]+"<BR>";
		}
	}
	for(var i=restosEntero.length-1;i>=0;i--)
	{
		stringEntero+=restosEntero[i];
		if((i)%4==0)
		{
			stringEntero+=" ";
		}
	}

	for(var i=0;i<8;i++)
	{
		resultadoAuxiliar=resultadosDecimales[i]*2;
		resultadosDecimales[i+1]=(resultadosDecimales[i]*2)%1;
		restosDecimales[i]=Math.trunc(resultadosDecimales[i]*2);
		stringCuentaDecimal+=resultadosDecimales[i].toFixed(2)+" * 2 = "+resultadoAuxiliar.toFixed(2)+" con resto "+restosDecimales[i]+"<BR>";
		if((i)%4==0)
		{
			stringDecimal+=" ";
		}
		stringDecimal+=restosDecimales[i];
	}

	stringCuentaTotal="El número decimal: "+numeroIngresado+" se pasa a binario así: <BR><BR> La parte entera: <BR>"+ stringCuentaEntero+"<BR> La parte decimal: <BR>"+stringCuentaDecimal+"<BR><B>El resultado en binario es: </B>"+stringEntero+","+stringDecimal;

	var tablaEquivalencias="";

	document.write(stringCuentaTotal+"<BR><BR><BR>");
	
tablaEquivalencias+="Decimal-Binario-Hexadecimal<BR>";
tablaEquivalencias+="|---01---|---0001---|---1---|<BR>";
tablaEquivalencias+="|---02---|---0010---|---2---|<BR>";
tablaEquivalencias+="|---03---|---0011---|---3---|<BR>";
tablaEquivalencias+="|---04---|---0100---|---4---|<BR>";
tablaEquivalencias+="|---05---|---0101---|---5---|<BR>";
tablaEquivalencias+="|---06---|---0110---|---6---|<BR>";
tablaEquivalencias+="|---07---|---0111---|---7---|<BR>";
tablaEquivalencias+="|---08---|---1000---|---8---|<BR>";
tablaEquivalencias+="|---09---|---1001---|---9---|<BR>";
tablaEquivalencias+="|---10---|---1010---|---A---|<BR>";
tablaEquivalencias+="|---11---|---1011---|---B---|<BR>";
tablaEquivalencias+="|---12---|---1100---|---C---|<BR>";
tablaEquivalencias+="|---13---|---1101---|---D---|<BR>";
tablaEquivalencias+="|---14---|---1110---|---E---|<BR>";
tablaEquivalencias+="|---15---|---1111---|---F---|<BR>";

	document.write(tablaEquivalencias);
}