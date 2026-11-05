//PLantillas lista para usar

// datos:{
//     pa: "Ingrese nombre de paciente aquí" ; 
//     diag: "Ingrese diagnóstico aquí" ;
//     edad: "Ingrese edad aquí"; 
//     cie: "Ingrese código CIE-10 aquí" ; 
//     proxima: "Ingrese fecha de próxima consulta aquí" ; 
//     fecha: "Ingrese la fecha actual de la consulta";
// }


// producto1: {
//         nombreGenerico: "Ingrese nombre genérico del producto o insumo aquí";
//         nombreComercial: "Ingrese nombre comercial del producto o insumo aquí";
//         concentracion: "Ingrese concentración del producto o insumo aquí";
//         presentacion: "Ingrese presentación del producto o insumo aquí";
//         dosisBarraFrecuencia: "Ingrese dosis, vía de administración y frecuencia del producto o insumo aquí";
//         duracion: "Ingrese duración del tratamiento con el producto o insumo aquí";
//     }


//Código actuando

//Datos de la receta médica

const datos = {
    pa: "jhoserd Amir Flores Valencia",
    diag: "GINECOMASTIA (NEOM)",
    edad: "19",//"Ingrese edad aquí",
    cie: "N62",//"Ingrese código CIE-10 aquí",
    proxima: "",
    fecha: "05/05/2026"//"Ingrese la fecha actual de la consulta"
};
//Datos para la tabla de productos e insumos de la receta médica
const productosOInsumos = {
    producto1: {
        nombreGenerico: "anastrazol",
        nombreComercial: "arimidex",
        concentracion: "1mg",
        presentacion: "tableta / 30",
        dosisBarraFrecuencia: "1mg / 1/4 cada 48 horas",
        duracion: "25 días",
    },
    producto2: {
        nombreGenerico: "vitamina d3",
        nombreComercial: "calcifediol",
        concentracion: "1000 UI",
        presentacion: "cápsula / 30",
        dosisBarraFrecuencia: "1000 UI cada 24 horas",
        duracion: "25 días"
    }
    
    

}








//Código para guardar los datos en el localStorage
function guardarDatos() {
    localStorage.setItem("datos", JSON.stringify(datos));
    localStorage.setItem("productosOInsumos", JSON.stringify(productosOInsumos));
}
guardarDatos();