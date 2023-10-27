// Задача 1

function task1()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
    console.log(sum);
}

// Задача 2

function task2()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum=arr.filter(index=>(index>0&&index<10)).reduce((sum,elem)=>sum+elem,0);
    console.log(sum);
}

// Задача 3

function task3()
{
    let arr=Array.from(Array(4),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let isEven=arr.every(elem=>elem%2==0);
    console.log(isEven);
}

function isChetn(arr)
{
    return arr.every(elem=>elem%2==0);
}

// Написала функцию создающую массив

function createArray()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr);
}

// Задача 4

function getNewArray()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr);
    let newarr=arr.filter(elem=>elem%5==0);
    console.log(newarr);
}

// Задача 5

function srArifm(arr)
{
    let srar=arr.reduce((srar,elem)=>srar+elem,0);
    srar=(srar/arr.length).toFixed(1);
    console.log(srar);
}


