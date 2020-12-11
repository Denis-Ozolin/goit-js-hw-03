let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');

        if (Number.isNaN(Number(input))) {
            alert('Было введено не число, попробуйте еще раз');
        } else {
            numbers.push(Number(input));
        }  

} while (input !== null) {
      for (const number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
