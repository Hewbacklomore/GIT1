// Восьмеричный и двоичный литералы
// В ES6 появилась новая поддержка для восьмеричных и двоичных литералов.
// Добавление к началу числа 0o или 0O преобразует его в восьмеричную систему
// счисления (аналогично, 0b или 0B преобразует в двоичную систему счисления).

let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10;
console.log(bValue); // 2