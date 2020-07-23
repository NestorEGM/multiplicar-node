const { writeFile } = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
  if (!Number(base)) {
    console.log(`El valor "base" introducido ${base} no es un numero`);
  } else if (!Number(limite)) {
    console.log(`El valor "limite" introducido ${limite} no es un numero`);
  } else {
    console.log('=============================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=============================='.green);
    for (let i = 0; i < limite; i++) {
      let factor = i + 1;
      console.log(`${base} * ${factor} = ${base * factor}`);
    }
  }

}

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor "base" introducido ${base} no es un numero`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor "limite" introducido ${limite} no es un numero`);
      return;
    }
    let data = '';
    const file = `tabla-${base}-al-${limite}.txt`;

    for (let i = 0; i < limite; i++) {
      let factor = i + 1;
      data += `${base} * ${factor} = ${base * factor}\n`;
    }

    writeFile(`tablas/${file}`, data, (err) => {
      if (err) reject(err);
      else resolve(file);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}