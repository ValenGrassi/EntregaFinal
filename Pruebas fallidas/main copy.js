let valor = parseInt(prompt("Ingrese la cantidad que quiere convertir: "))
while(isNaN(valor)){
    valor = parseInt(prompt("Ingrese la cantidad que quiere convertir: "))
}
let año = prompt("Ingrese el año al que quiere convertir su dinero (2011 en adelante): ")
while(año != "2011" && año != "2012" && año != "2013" && año !="2014" && año !="2015" && año !="2016" && año !="2017" && año !="2018" && año !="2019" && año !="2020" && año !="2021" && año !="2022"){
    año = prompt("Ingrese el año al que quiere convertir su dinero (2011 en adelante): ");
}
let mes = prompt("Ingrese el mes al que quiere convertir su dinero: ").toLowerCase()
while(mes != "enero" && mes != "febrero" && mes != "marzo" && mes != "abril" && mes != "mayo" && mes != "junio" && mes != "julio" && mes != "agosto" && mes != "septiembre" && mes !="octubre" && mes != "noviembre" && mes != "diciembre"){
    mes = prompt("Ingrese el mes al que quiere convertir su dinero: ").toLowerCase()
}
