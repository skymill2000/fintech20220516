let car1 = {
    name : "소나타",
    ph : 200,
    start : () => {
        console.log('engine start');
    },
    stop : () =>{
        console.log('engine stop');
    }
}

let car2 = {
    name : "bmw",
    ph : 300,
    start : () => {
        console.log('engine start');
    },
    stop : () =>{
        console.log('engine stop');
    }
}

let car3 = {
    name : "mini",
    ph : 120,
    start : () => {
        console.log('engine start');
    },
    stop : () =>{
        console.log('engine stop');
    }
}

let cars = [car1, car2, car3];

// if(cars.length > 3){
//     console.log("1대 초과")
// } else {
//     console.log("해당 조건을 거짓 입니다.")
// }

//#work2 of / for / map 상관없이 차량의 이름이 bmw 일 경우에 "차량을 찾았습니다." 를 출력
for(let i = 0; i < cars.length; i++){
    if(cars[i].name === "bmw"){
        console.log("차량을 찾았습니다.")
    }
}

for(car of cars){
    if(car.name === "bmw"){
        console.log("차량을 찾았습니다.")
    }
}

cars.map(car => {
    if(car.name === "bmw"){
        console.log("차량의 이름은: "+ car.name +" 차량을 찾았습니다. 마력은 " + car.ph + "입니다");
        console.log(`차량의 이름은 : ${car.name} 차량을 찾았습니다 마력은 ${car.ph} 입니다`);
    }    
})

//구조분해 할당
// const name = car1.name;
// const ph = car1.ph;
// 귀찮

const {name, ph} = car1;
console.log(name, ph);
