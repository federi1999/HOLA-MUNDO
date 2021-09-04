const inventario = [
    {
        nombre: 'mineral',
        categoria: 'bebidas',
        precio: 10
    },
    {
        nombre: 'clamato',
        categoria: 'bebidas',
        precio: 8
    },
    {
        nombre: 'coca',
        categoria: 'bebidas',
        precio: 10
    },
    {
        nombre: 'snacks',
        categoria: 'comida',
        precio: 8
    },
    {
        nombre: 'doritos',
        categoria: 'comida',
        precio: 9
    }
];

const totalByCategory = (arr=[{}],cate = "")=>{
let fil = arr.filter(item => item.categoria === cate);
let nu =[0];
fil.forEach(it => nu.push(it.precio));
 let re = nu.reduce((a,v) =>{ return a+v});
 console.log(re);

};

totalByCategory(inventario,'bebidas');