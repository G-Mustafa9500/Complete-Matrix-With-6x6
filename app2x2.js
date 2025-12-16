// function add() {
//     let value = prompt("Enter your First Number")
//     let value1 = prompt("Enter your Second Number")
//     let sum = Number(value) + Number(value1)
//     let result = console.log("Result is: " + sum)
//     let input = document.getElementById("resultinput")
//     resultinput.value = sum

// }

// function sub() {
//     let value2 = prompt("Enter your First number")
//     let value3 = prompt("Enter Your Second Number")
//     let sub = parseFloat(value2) - parseFloat(value3)
//     let result = console.log("Sub Is: " + sub)
//     let input = document.getElementById("resultinput")
//     resultinput.value = sub
// }

function Add() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);

    if (A_r1c1 < 0 || A_r1c2 < 0 || A_r2c1 < 0 || A_r2c2 < 0 ||
        B_r1c1 < 0 || B_r1c2 < 0 || B_r2c1 < 0 || B_r2c2 < 0) {
        alert("Please enter Valid number numbers only.");
    }

    let add = [
        A_r1c1 + B_r1c1,
        A_r1c2 + B_r1c2,
        A_r2c1 + B_r2c1,
        A_r2c2 + B_r2c2
    ]

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r2c1").innerText = add[2]
    document.getElementById("C_r2c2").innerText = add[3]

}
function Sub() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);

    if (A_r1c1 < 0 || A_r1c2 < 0 || A_r2c1 < 0 || A_r2c2 < 0 ||
        B_r1c1 < 0 || B_r1c2 < 0 || B_r2c1 < 0 || B_r2c2 < 0) {
        alert("Please enter Valid number numbers only.");
    }

    let add = [
        A_r1c1 - B_r1c1,
        A_r1c2 - B_r1c2,
        A_r2c1 - B_r2c1,
        A_r2c2 - B_r2c2
    ]

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r2c1").innerText = add[2]
    document.getElementById("C_r2c2").innerText = add[3]

}
function multiply() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);

    if (A_r1c1 < 0 || A_r1c2 < 0 || A_r2c1 < 0 || A_r2c2 < 0 ||
        B_r1c1 < 0 || B_r1c2 < 0 || B_r2c1 < 0 || B_r2c2 < 0) {
        alert("Please enter Valid number numbers only.");
    }

    let add = [
            A_r1c1 * B_r1c1 + A_r1c2 * B_r2c1,
            A_r1c1 * B_r1c2 + A_r1c2 * B_r2c2,
            A_r2c1 * B_r1c1 + A_r2c2 * B_r2c1,
            A_r2c1 * B_r1c2 + A_r2c2 * B_r2c2
    ]

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r2c1").innerText = add[2]
    document.getElementById("C_r2c2").innerText = add[3]

}