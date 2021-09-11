let valor  = [2, 4, 6];
let valor2 = [-3, 2, -8, 12, -5];

const calcular = (arr = []) => {
    arr.map((v,i)=> 
    {
        if (v > 0)
        {
            v = v*v;

        }
        console.log(v)
    })
}
calcular (valor2);
