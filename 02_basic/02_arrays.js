const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];
// marvel_heros.push(dc);
// console.log(marvel_heros);
// const newArr = marvel_heros[3]
// console.log(newArr)
// console.log(newArr[2])
// console.log(marvel_heros[3][2])
// const newArr=marvel_heros.concat(dc);
// console.log(newArr);

const allHeros = [...marvel_heros,...dc]
// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
