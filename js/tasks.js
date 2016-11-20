'use strict';

/**
 *3. Дан текст, состоящий из нескольких строк (каждая строка отделена символом \n)
 *
 для заданной максимальной ширины строки обрезать строки большей ширины и добавить  … так, чтобы
 образовавшаяся строка была равна максимальной ширине
 */


var string = "Lorem ipsum dolor sit amet,\n consectetur adipisicing elit.\n\
Blanditiis debitis impedit natus\n porro quae vel? \nAmet culpa dolores ipsam itaque\
officia omnis quas quos\n repellat rerum, sapiente\n vel, veniam, voluptas.";


function trimString(string, size) {

    if (typeof string === "string" && typeof size === "number" && size >= 3) {

        var arrOfLines = string.split("\n");

        arrOfLines.forEach(function (el, i, arr) {
                if (el.length > size && size > 0) {
                    arr[i] = arr[i].slice(0, size - 3).concat("...");
                }
            }
        );
        return arrOfLines.join('\n');
    }
    else {
        throw new Error("incorrect input");
    }
}
console.log(trimString(string, 30));


//-------------------------------------Additional tasks-------------------------------------

/**
 *  Реализовать функцию для проверки пин-кода (с помощью замыканий)
 Функция инициализируется пин кодом и макс числом  повторов
 При последующих вызовах передается значение пин кода и возвращается true или false
 */

function checkPin(pin, amount) {
    var setPin = pin,
        setAmount = amount;

    return function (pin) {

        if (setAmount > 0) {

            if (setPin === pin) {

                return true;
            }
            else {
                setAmount--;
                return false;
            }
        }
        else {
            throw new Error("Amount of pin attempts has expired");
        }
    }

}
var getData = checkPin(123, 4);

console.log(getData(1233));
console.log(getData(123567));
console.log(getData(1235637));

/**
 *
 * Для заданного времени посчитать угол между стрелками часов
 */

function getAngle(hours, minutes) {
    var angle = Math.abs((hours % 12 * 30 + 0.5 * minutes) - minutes * 6);
    return (angle > 180) ? angle = 360 - angle : angle;
}

console.log(getAngle(14, 20));
console.log(getAngle(2, 20));


/**
 *  Дан массив строк, написать функцию возвращающую  N перестановок данного  массива
 */

function getAmountOfPermutations(arr) {
    var amount = 1;

    arr.forEach(function (el, i) {
        amount *= i + 1;
    });
    return amount;

}

console.log(getAmountOfPermutations([1, 2, 3, 4, 5, 6]));
