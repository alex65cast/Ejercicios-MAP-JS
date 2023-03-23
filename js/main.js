// EJERCICIO 1
// Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"],
// devuelve otro en que la primera letra de cada uno sea mayúscula y el resto minúsculas

const palabrasMayusculas = () => {

    let nombres = ["eNrIqUe","mara", "pAblo", "juan", "MARCOS"];
    let nombresMayuscula = [];
  
    // for(let i = 0; i<nombres.length; i++){

    //     nombresMayuscula = (nombres[i].toLowerCase().substring(0,2).toUpperCase());

    //     console.log(nombresMayuscula);

    // }

    nombres.map(nombre => {

      let nombre2 = nombre.toLowerCase()
     
      let nombreFinal = nombre2.charAt(0).toUpperCase() + nombre2.substring(1,nombre2.length);

      console.log(nombreFinal);

    })
    
};



// EJERCICIO 2
// Crea un array con únicamente los nombres de los siguientes objetos
// Además, saca un array únicamente con los nombres de los mayores de 30

const mayoresEdad = () => {
  let personas = [
    {
      nombre: "Mara",
      edad: 30,
    },
    {
      nombre: "Pablo",
      edad: 35,
    },
    {
      nombre: "Juan",
      edad: 26,
    },
    {
      nombre: "Marta",
      edad: 56,
    },
    {
      nombre: "Rodrigo",
      edad: 31,
    },
  ];

  let listaNombres = personas.map((elements) => {
    console.log(elements.nombre);
  });

  let listaNombresEdad = personas.map((elements) => {
    if (elements.edad > 30) {
      let arrayNombres = elements.nombre;
      console.log(`Peronas mayores de 30 -->${arrayNombres}`);
    }
  });
};

// EJERCICIO 3
// Dado un array de números, crea una función que sume solo los pares

const sumarPares = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8];
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      suma = suma + array[i];
    }
  }
  console.log(suma);
};

// EJERCICIO 5
// Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9

const media = () => {
  let estudiantes = [
    {
      nombre: "Mara",
      notas: [10, 7, 8, 8, 9],
    },
    {
      nombre: "David",
      notas: [6, 2, 5, 10, 7],
    },
    {
      nombre: "Marcos",
      notas: [3, 5, 2, 8, 5],
    },
    {
      nombre: "Pablo",
      notas: [10, 10, 9, 8, 9],
    },
  ];

  let listaMedia = estudiantes.map((elements) => {

        let suma = 0;
        for (let i = 0; i<elements.notas.length; i++){

          let numeros = elements.notas[i];
          suma += numeros;
          let media = suma/elements.notas.length;

          if (media > 9) {
              
            let arrayNombres = elements.nombre;
            console.log(`Peronas con media superior a 9 -->${arrayNombres}`);
  
        }

        }
       
   });
  
}
