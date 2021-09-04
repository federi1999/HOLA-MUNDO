let toda_la_banda = ["Dimas", "Moises", "Maria", "Brenda"];

let body =document.getElementsByName('body');

toda_la_banda.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    document.body.appendChild(li);
});

let toda_la_banda2 = ["Dimas", "Moises", "Brenda"];

toda_la_banda2 = toda_la_banda2.filter(v=>v !== "Brenda");

console.log(toda_la_banda2);

toda_la_banda2.unshift("Alejandro");

toda_la_banda2.push("jose")

let item = toda_la_banda2.find(it => it === "Dimas");

console.log(item);

let toda_la_banda3 = toda_la_banda.slice(1,3);

console.log(toda_la_banda3);


const buscaIndice =(arr = [""])=>{
idx = -1;
arr.forEach((item,i)=>{
if(item ==="Moises") idx = i;
});
return idx;
}

console.log('Imprime indice o -1 si no existe: ',buscaIndice(toda_la_banda));