const a = document.querySelector("#a");
const b = document.querySelector("#b");
const btnSubmit = document.querySelector("#check");
const prime = document.querySelector("#primeNumber");
let primeNumbers = [];
btnSubmit.addEventListener("click", function () {
    const $a = Number(a.value);
    const $b = Number(b.value);

    for (let i = $a; i <= $b; i++) {
        if (i == 2 || i === 3) {
            primeNumbers.push(i);
        }
        if (i > 3) {
            let check = true;
            for (let j = 2; j <= i - 1; j++) {
                if (i % j === 0) {
                    check = false;
                    break;
                } 
            }
            if (check) {
                primeNumbers.push(i);
            }
        }
    }
    prime.innerHTML = primeNumbers.toString();
    primeNumbers = [];
});

// function numberOneTriangle(n) {
//     let triangle = "";
//     for (let i = 0; i < n; i++) {
//         triangle += "*";
//         console.log(triangle);
//     }
// }
// numberOneTriangle(2);



