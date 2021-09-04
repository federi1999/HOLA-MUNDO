
const buscarSumaPar = (arr = [0], num = 0) => {

    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length;j++){
            if(arr[i] + arr[j] === 9) return [arr[i] , arr[j]]; 
        }
    }
}

const par = buscarSumaPar([3, 34, 4, 12, 5, 2], 9);

console.log(par);