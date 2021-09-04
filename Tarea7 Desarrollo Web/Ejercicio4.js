const sumaElementos = (arr=[0]) =>{
let prom = arr.reduce((a,v)=>{return a+v});
return prom/arr.length;
}

console.log('El pormedio es:',sumaElementos([10, 20, 30, 20, 30, 40, 60]));