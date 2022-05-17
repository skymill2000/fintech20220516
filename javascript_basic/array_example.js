let array = ['a', 'b', 'c', 123]; /// 10000

console.log(array)

array.push('d');

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])

//in java
//private String [] StringArray = new String[6];
//private ArrayList<String> arrayListString = new ArrayList<String>;

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
// 가장 기본적인 반복문의 표현법
console.log('------------------')
for(element of array){
    console.log(element);
}
//for...of 의 사용법
console.log('------------------')

array.map((element) => {
    console.log(element);
})
//array.map(function (){})

