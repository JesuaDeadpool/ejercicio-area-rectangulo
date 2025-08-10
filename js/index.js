
const calcular = () => {
    const base = document.querySelector('#base').value;
    const altura = document.querySelector('#altura').value;
    if (base === "") {
        alerta("El campo 'Base' está vacio porfavor ingrese un numero ");
    } else if (altura === "") {
        alerta("El campo 'Altura' está vacio porfavor ingrese un numero ");
    } else {
        let baseNum = Number(base);
        let alturaNum = Number(altura);

        if (baseNum < 0) {
            alerta("El campo 'Base', le ingreso un numero negativo, ingrese numero positivo");
        } else if (alturaNum < 0) {
            alerta("El campo 'Altura', le ingreso un numero negativo, ingrese numero positivo");
        } else {
            let calcArea = baseNum * alturaNum;

            document.querySelector('#area').value = calcArea;
        }
    }
}

const limpiar = () => {
    const base = document.querySelector('#base').value = "";
    const altura = document.querySelector('#altura').value = "";
    document.querySelector('#area').value = "";
}

const alerta = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: "warning"
    })
}