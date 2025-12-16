function multiply() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value);
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value);
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value);
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value);
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value);
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value);
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value);

    // if (A_r1c1 < 0 || A_r1c2 < 0 || A_r1c3 < 0 || A_r2c1 < 0 || A_r2c2 < 0 || A_r2c3 < 0 || A_r3c1 < 0 || A_r3c2 < 0 || A_r3c3 < 0 ||
    //     B_r1c1 < 0 || B_r1c2 < 0 || B_r1c3 < 0 || B_r2c1 < 0 || B_r2c2 < 0 || B_r2c3 < 0 || B_r3c1 < 0 || B_r3c2 < 0 || B_r3c3 < 0) {
    //     alert("Please enter Valid number numbers only.");
    // }

    let add = [
        A_r1c1 * B_r1c1 + A_r1c2 * B_r2c1 + A_r1c3 * B_r3c1,
        A_r1c1 * B_r1c2 + A_r1c2 * B_r2c2 + A_r1c3 * B_r3c2,
        A_r1c1 * B_r1c3 + A_r1c2 * B_r2c3 + A_r1c3 * B_r3c3,
        A_r2c1 * B_r1c1 + A_r2c2 * B_r2c1 + A_r2c3 * B_r3c1,
        A_r2c1 * B_r1c2 + A_r2c2 * B_r2c2 + A_r2c3 * B_r3c2,
        A_r2c1 * B_r1c3 + A_r2c2 * B_r2c3 + A_r2c3 * B_r3c3,
        A_r3c1 * B_r1c1 + A_r3c2 * B_r2c1 + A_r3c3 * B_r3c1,
        A_r3c1 * B_r1c2 + A_r3c2 * B_r2c2 + A_r3c3 * B_r3c2,
        A_r3c1 * B_r1c3 + A_r3c2 * B_r2c3 + A_r3c3 * B_r3c3
    ];

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r2c1").innerText = add[3]
    document.getElementById("C_r2c2").innerText = add[4]
    document.getElementById("C_r2c3").innerText = add[5]
    document.getElementById("C_r3c1").innerText = add[6]
    document.getElementById("C_r3c2").innerText = add[7]
    document.getElementById("C_r3c3").innerText = add[8]

}

function Add() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value);
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value);
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value);
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value);
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value);
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value);
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value);

    // if (A_r1c1 < 0 || A_r1c2 < 0 || A_r1c3 < 0 || A_r2c1 < 0 || A_r2c2 < 0 || A_r2c3 < 0 || A_r3c1 < 0 || A_r3c2 < 0 || A_r3c3 < 0 ||
    //     B_r1c1 < 0 || B_r1c2 < 0 || B_r1c3 < 0 || B_r2c1 < 0 || B_r2c2 < 0 || B_r2c3 < 0 || B_r3c1 < 0 || B_r3c2 < 0 || B_r3c3 < 0) {
    //     alert("Please enter Valid number numbers only.");
    // }

    let add = [
        A_r1c1 + B_r1c1,
        A_r1c2 + B_r1c2,
        A_r1c3 + B_r1c3,
        A_r2c1 + B_r2c1,
        A_r2c2 + B_r2c2,
        A_r2c3 + B_r2c3,
        A_r3c1 + B_r3c1,
        A_r3c2 + B_r3c2,
        A_r3c3 + B_r3c3
    ]

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r2c1").innerText = add[3]
    document.getElementById("C_r2c2").innerText = add[4]
    document.getElementById("C_r2c3").innerText = add[5]
    document.getElementById("C_r3c1").innerText = add[6]
    document.getElementById("C_r3c2").innerText = add[7]
    document.getElementById("C_r3c3").innerText = add[8]

}

function Sub() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value);
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value);
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value);
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value);
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value);
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value);
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value);
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value);
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value);

    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value);
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value);
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value);
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value);
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value);
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value);
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value);
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value);
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value);

    // if (A_r1c1 < 0 || A_r1c2 < 0 || A_r1c3 < 0 || A_r2c1 < 0 || A_r2c2 < 0 || A_r2c3 < 0 || A_r3c1 < 0 || A_r3c2 < 0 || A_r3c3 < 0 ||
    //     B_r1c1 < 0 || B_r1c2 < 0 || B_r1c3 < 0 || B_r2c1 < 0 || B_r2c2 < 0 || B_r2c3 < 0 || B_r3c1 < 0 || B_r3c2 < 0 || B_r3c3 < 0) {
    //     alert("Please enter Valid number numbers only.");
    // }

    let add = [
        A_r1c1 - B_r1c1,
        A_r1c2 - B_r1c2,
        A_r1c3 - B_r1c3,
        A_r2c1 - B_r2c1,
        A_r2c2 - B_r2c2,
        A_r2c3 - B_r2c3,
        A_r3c1 - B_r3c1,
        A_r3c2 - B_r3c2,
        A_r3c3 - B_r3c3
    ]

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r2c1").innerText = add[3]
    document.getElementById("C_r2c2").innerText = add[4]
    document.getElementById("C_r2c3").innerText = add[5]
    document.getElementById("C_r3c1").innerText = add[6]
    document.getElementById("C_r3c2").innerText = add[7]
    document.getElementById("C_r3c3").innerText = add[8]

}