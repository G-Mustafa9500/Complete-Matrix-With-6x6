function calculate6x6Addition() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value)
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value)
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value)
    let A_r1c4 = parseFloat(document.getElementById("A_r1c4").value)
    let A_r1c5 = parseFloat(document.getElementById("A_r1c5").value)
    let A_r1c6 = parseFloat(document.getElementById("A_r1c6").value)
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value)
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value)
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value)
    let A_r2c4 = parseFloat(document.getElementById("A_r2c4").value)
    let A_r2c5 = parseFloat(document.getElementById("A_r2c5").value)
    let A_r2c6 = parseFloat(document.getElementById("A_r2c6").value)
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value)
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value)
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value)
    let A_r3c4 = parseFloat(document.getElementById("A_r3c4").value)
    let A_r3c5 = parseFloat(document.getElementById("A_r3c5").value)
    let A_r3c6 = parseFloat(document.getElementById("A_r3c6").value)
    let A_r4c1 = parseFloat(document.getElementById("A_r4c1").value)
    let A_r4c2 = parseFloat(document.getElementById("A_r4c2").value)
    let A_r4c3 = parseFloat(document.getElementById("A_r4c3").value)
    let A_r4c4 = parseFloat(document.getElementById("A_r4c4").value)
    let A_r4c5 = parseFloat(document.getElementById("A_r4c5").value)
    let A_r4c6 = parseFloat(document.getElementById("A_r4c6").value)
    let A_r5c1 = parseFloat(document.getElementById("A_r5c1").value)
    let A_r5c2 = parseFloat(document.getElementById("A_r5c2").value)
    let A_r5c3 = parseFloat(document.getElementById("A_r5c3").value)
    let A_r5c4 = parseFloat(document.getElementById("A_r5c4").value)
    let A_r5c5 = parseFloat(document.getElementById("A_r5c5").value)
    let A_r5c6 = parseFloat(document.getElementById("A_r5c6").value)
    let A_r6c1 = parseFloat(document.getElementById("A_r6c1").value)
    let A_r6c2 = parseFloat(document.getElementById("A_r6c2").value)
    let A_r6c3 = parseFloat(document.getElementById("A_r6c3").value)
    let A_r6c4 = parseFloat(document.getElementById("A_r6c4").value)
    let A_r6c5 = parseFloat(document.getElementById("A_r6c5").value)
    let A_r6c6 = parseFloat(document.getElementById("A_r6c6").value)
    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value)
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value)
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value)
    let B_r1c4 = parseFloat(document.getElementById("B_r1c4").value)
    let B_r1c5 = parseFloat(document.getElementById("B_r1c5").value)
    let B_r1c6 = parseFloat(document.getElementById("B_r1c6").value)
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value)
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value)
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value)
    let B_r2c4 = parseFloat(document.getElementById("B_r2c4").value)
    let B_r2c5 = parseFloat(document.getElementById("B_r2c5").value)
    let B_r2c6 = parseFloat(document.getElementById("B_r2c6").value)
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value)
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value)
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value)
    let B_r3c4 = parseFloat(document.getElementById("B_r3c4").value)
    let B_r3c5 = parseFloat(document.getElementById("B_r3c5").value)
    let B_r3c6 = parseFloat(document.getElementById("B_r3c6").value)
    let B_r4c1 = parseFloat(document.getElementById("B_r4c1").value)
    let B_r4c2 = parseFloat(document.getElementById("B_r4c2").value)
    let B_r4c3 = parseFloat(document.getElementById("B_r4c3").value)
    let B_r4c4 = parseFloat(document.getElementById("B_r4c4").value)
    let B_r4c5 = parseFloat(document.getElementById("B_r4c5").value)
    let B_r4c6 = parseFloat(document.getElementById("B_r4c6").value)
    let B_r5c1 = parseFloat(document.getElementById("B_r5c1").value)
    let B_r5c2 = parseFloat(document.getElementById("B_r5c2").value)
    let B_r5c3 = parseFloat(document.getElementById("B_r5c3").value)
    let B_r5c4 = parseFloat(document.getElementById("B_r5c4").value)
    let B_r5c5 = parseFloat(document.getElementById("B_r5c5").value)
    let B_r5c6 = parseFloat(document.getElementById("B_r5c6").value)
    let B_r6c1 = parseFloat(document.getElementById("B_r6c1").value)
    let B_r6c2 = parseFloat(document.getElementById("B_r6c2").value)
    let B_r6c3 = parseFloat(document.getElementById("B_r6c3").value)
    let B_r6c4 = parseFloat(document.getElementById("B_r6c4").value)
    let B_r6c5 = parseFloat(document.getElementById("B_r6c5").value)
    let B_r6c6 = parseFloat(document.getElementById("B_r6c6").value)


    let add = [
        A_r1c1 + B_r1c1,
        A_r1c2 + B_r1c2,
        A_r1c3 + B_r1c3,
        A_r1c4 + B_r1c4,
        A_r1c5 + B_r1c5,
        A_r1c6 + B_r1c6,
        A_r2c1 + B_r2c1,
        A_r2c2 + B_r2c2,
        A_r2c3 + B_r2c3,
        A_r2c4 + B_r2c4,
        A_r2c5 + B_r2c5,
        A_r2c6 + B_r2c6,
        A_r3c1 + B_r3c1,
        A_r3c2 + B_r3c2,
        A_r3c3 + B_r3c3,
        A_r3c4 + B_r3c4,
        A_r3c5 + B_r3c5,
        A_r3c6 + B_r3c6,
        A_r4c1 + B_r4c1,
        A_r4c2 + B_r4c2,
        A_r4c3 + B_r4c3,
        A_r4c4 + B_r4c4,
        A_r4c5 + B_r4c5,
        A_r4c6 + B_r4c6,
        A_r5c1 + B_r5c1,
        A_r5c2 + B_r5c2,
        A_r5c3 + B_r5c3,
        A_r5c4 + B_r5c4,
        A_r5c5 + B_r5c5,
        A_r5c6 + B_r5c6,
        A_r6c1 + B_r6c1,
        A_r6c2 + B_r6c2,
        A_r6c3 + B_r6c3,
        A_r6c4 + B_r6c4,
        A_r6c5 + B_r6c5,
        A_r6c6 + B_r6c6
    ];

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r1c4").innerText = add[3]
    document.getElementById("C_r1c5").innerText = add[4]
    document.getElementById("C_r1c6").innerText = add[5]
    document.getElementById("C_r2c1").innerText = add[6]
    document.getElementById("C_r2c2").innerText = add[7]
    document.getElementById("C_r2c3").innerText = add[8]
    document.getElementById("C_r2c4").innerText = add[9]
    document.getElementById("C_r2c5").innerText = add[10]
    document.getElementById("C_r2c6").innerText = add[11]
    document.getElementById("C_r3c1").innerText = add[12]
    document.getElementById("C_r3c2").innerText = add[13]
    document.getElementById("C_r3c3").innerText = add[14]
    document.getElementById("C_r3c4").innerText = add[15]
    document.getElementById("C_r3c5").innerText = add[16]
    document.getElementById("C_r3c6").innerText = add[17]
    document.getElementById("C_r4c1").innerText = add[18]
    document.getElementById("C_r4c2").innerText = add[19]
    document.getElementById("C_r4c3").innerText = add[20]
    document.getElementById("C_r4c4").innerText = add[21]
    document.getElementById("C_r4c5").innerText = add[22]
    document.getElementById("C_r4c6").innerText = add[23]
    document.getElementById("C_r5c1").innerText = add[24]
    document.getElementById("C_r5c2").innerText = add[25]
    document.getElementById("C_r5c3").innerText = add[26]
    document.getElementById("C_r5c4").innerText = add[27]
    document.getElementById("C_r5c5").innerText = add[28]
    document.getElementById("C_r5c6").innerText = add[29]
    document.getElementById("C_r6c1").innerText = add[30]
    document.getElementById("C_r6c2").innerText = add[31]
    document.getElementById("C_r6c3").innerText = add[32]
    document.getElementById("C_r6c4").innerText = add[33]
    document.getElementById("C_r6c5").innerText = add[34]
    document.getElementById("C_r6c6").innerText = add[35]
}


function calculate6x6Sub() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value)
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value)
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value)
    let A_r1c4 = parseFloat(document.getElementById("A_r1c4").value)
    let A_r1c5 = parseFloat(document.getElementById("A_r1c5").value)
    let A_r1c6 = parseFloat(document.getElementById("A_r1c6").value)
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value)
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value)
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value)
    let A_r2c4 = parseFloat(document.getElementById("A_r2c4").value)
    let A_r2c5 = parseFloat(document.getElementById("A_r2c5").value)
    let A_r2c6 = parseFloat(document.getElementById("A_r2c6").value)
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value)
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value)
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value)
    let A_r3c4 = parseFloat(document.getElementById("A_r3c4").value)
    let A_r3c5 = parseFloat(document.getElementById("A_r3c5").value)
    let A_r3c6 = parseFloat(document.getElementById("A_r3c6").value)
    let A_r4c1 = parseFloat(document.getElementById("A_r4c1").value)
    let A_r4c2 = parseFloat(document.getElementById("A_r4c2").value)
    let A_r4c3 = parseFloat(document.getElementById("A_r4c3").value)
    let A_r4c4 = parseFloat(document.getElementById("A_r4c4").value)
    let A_r4c5 = parseFloat(document.getElementById("A_r4c5").value)
    let A_r4c6 = parseFloat(document.getElementById("A_r4c6").value)
    let A_r5c1 = parseFloat(document.getElementById("A_r5c1").value)
    let A_r5c2 = parseFloat(document.getElementById("A_r5c2").value)
    let A_r5c3 = parseFloat(document.getElementById("A_r5c3").value)
    let A_r5c4 = parseFloat(document.getElementById("A_r5c4").value)
    let A_r5c5 = parseFloat(document.getElementById("A_r5c5").value)
    let A_r5c6 = parseFloat(document.getElementById("A_r5c6").value)
    let A_r6c1 = parseFloat(document.getElementById("A_r6c1").value)
    let A_r6c2 = parseFloat(document.getElementById("A_r6c2").value)
    let A_r6c3 = parseFloat(document.getElementById("A_r6c3").value)
    let A_r6c4 = parseFloat(document.getElementById("A_r6c4").value)
    let A_r6c5 = parseFloat(document.getElementById("A_r6c5").value)
    let A_r6c6 = parseFloat(document.getElementById("A_r6c6").value)
    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value)
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value)
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value)
    let B_r1c4 = parseFloat(document.getElementById("B_r1c4").value)
    let B_r1c5 = parseFloat(document.getElementById("B_r1c5").value)
    let B_r1c6 = parseFloat(document.getElementById("B_r1c6").value)
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value)
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value)
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value)
    let B_r2c4 = parseFloat(document.getElementById("B_r2c4").value)
    let B_r2c5 = parseFloat(document.getElementById("B_r2c5").value)
    let B_r2c6 = parseFloat(document.getElementById("B_r2c6").value)
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value)
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value)
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value)
    let B_r3c4 = parseFloat(document.getElementById("B_r3c4").value)
    let B_r3c5 = parseFloat(document.getElementById("B_r3c5").value)
    let B_r3c6 = parseFloat(document.getElementById("B_r3c6").value)
    let B_r4c1 = parseFloat(document.getElementById("B_r4c1").value)
    let B_r4c2 = parseFloat(document.getElementById("B_r4c2").value)
    let B_r4c3 = parseFloat(document.getElementById("B_r4c3").value)
    let B_r4c4 = parseFloat(document.getElementById("B_r4c4").value)
    let B_r4c5 = parseFloat(document.getElementById("B_r4c5").value)
    let B_r4c6 = parseFloat(document.getElementById("B_r4c6").value)
    let B_r5c1 = parseFloat(document.getElementById("B_r5c1").value)
    let B_r5c2 = parseFloat(document.getElementById("B_r5c2").value)
    let B_r5c3 = parseFloat(document.getElementById("B_r5c3").value)
    let B_r5c4 = parseFloat(document.getElementById("B_r5c4").value)
    let B_r5c5 = parseFloat(document.getElementById("B_r5c5").value)
    let B_r5c6 = parseFloat(document.getElementById("B_r5c6").value)
    let B_r6c1 = parseFloat(document.getElementById("B_r6c1").value)
    let B_r6c2 = parseFloat(document.getElementById("B_r6c2").value)
    let B_r6c3 = parseFloat(document.getElementById("B_r6c3").value)
    let B_r6c4 = parseFloat(document.getElementById("B_r6c4").value)
    let B_r6c5 = parseFloat(document.getElementById("B_r6c5").value)
    let B_r6c6 = parseFloat(document.getElementById("B_r6c6").value)


    let add = [
        A_r1c1 - B_r1c1,
        A_r1c2 - B_r1c2,
        A_r1c3 - B_r1c3,
        A_r1c4 - B_r1c4,
        A_r1c5 - B_r1c5,
        A_r1c6 - B_r1c6,
        A_r2c1 - B_r2c1,
        A_r2c2 - B_r2c2,
        A_r2c3 - B_r2c3,
        A_r2c4 - B_r2c4,
        A_r2c5 - B_r2c5,
        A_r2c6 - B_r2c6,
        A_r3c1 - B_r3c1,
        A_r3c2 - B_r3c2,
        A_r3c3 - B_r3c3,
        A_r3c4 - B_r3c4,
        A_r3c5 - B_r3c5,
        A_r3c6 - B_r3c6,
        A_r4c1 - B_r4c1,
        A_r4c2 - B_r4c2,
        A_r4c3 - B_r4c3,
        A_r4c4 - B_r4c4,
        A_r4c5 - B_r4c5,
        A_r4c6 - B_r4c6,
        A_r5c1 - B_r5c1,
        A_r5c2 - B_r5c2,
        A_r5c3 - B_r5c3,
        A_r5c4 - B_r5c4,
        A_r5c5 - B_r5c5,
        A_r5c6 - B_r5c6,
        A_r6c1 - B_r6c1,
        A_r6c2 - B_r6c2,
        A_r6c3 - B_r6c3,
        A_r6c4 - B_r6c4,
        A_r6c5 - B_r6c5,
        A_r6c6 - B_r6c6
    ];

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r1c4").innerText = add[3]
    document.getElementById("C_r1c5").innerText = add[4]
    document.getElementById("C_r1c6").innerText = add[5]
    document.getElementById("C_r2c1").innerText = add[6]
    document.getElementById("C_r2c2").innerText = add[7]
    document.getElementById("C_r2c3").innerText = add[8]
    document.getElementById("C_r2c4").innerText = add[9]
    document.getElementById("C_r2c5").innerText = add[10]
    document.getElementById("C_r2c6").innerText = add[11]
    document.getElementById("C_r3c1").innerText = add[12]
    document.getElementById("C_r3c2").innerText = add[13]
    document.getElementById("C_r3c3").innerText = add[14]
    document.getElementById("C_r3c4").innerText = add[15]
    document.getElementById("C_r3c5").innerText = add[16]
    document.getElementById("C_r3c6").innerText = add[17]
    document.getElementById("C_r4c1").innerText = add[18]
    document.getElementById("C_r4c2").innerText = add[19]
    document.getElementById("C_r4c3").innerText = add[20]
    document.getElementById("C_r4c4").innerText = add[21]
    document.getElementById("C_r4c5").innerText = add[22]
    document.getElementById("C_r4c6").innerText = add[23]
    document.getElementById("C_r5c1").innerText = add[24]
    document.getElementById("C_r5c2").innerText = add[25]
    document.getElementById("C_r5c3").innerText = add[26]
    document.getElementById("C_r5c4").innerText = add[27]
    document.getElementById("C_r5c5").innerText = add[28]
    document.getElementById("C_r5c6").innerText = add[29]
    document.getElementById("C_r6c1").innerText = add[30]
    document.getElementById("C_r6c2").innerText = add[31]
    document.getElementById("C_r6c3").innerText = add[32]
    document.getElementById("C_r6c4").innerText = add[33]
    document.getElementById("C_r6c5").innerText = add[34]
    document.getElementById("C_r6c6").innerText = add[35]
}


function calculate6x6multiply() {

    let A_r1c1 = parseFloat(document.getElementById("A_r1c1").value)
    let A_r1c2 = parseFloat(document.getElementById("A_r1c2").value)
    let A_r1c3 = parseFloat(document.getElementById("A_r1c3").value)
    let A_r1c4 = parseFloat(document.getElementById("A_r1c4").value)
    let A_r1c5 = parseFloat(document.getElementById("A_r1c5").value)
    let A_r1c6 = parseFloat(document.getElementById("A_r1c6").value)
    let A_r2c1 = parseFloat(document.getElementById("A_r2c1").value)
    let A_r2c2 = parseFloat(document.getElementById("A_r2c2").value)
    let A_r2c3 = parseFloat(document.getElementById("A_r2c3").value)
    let A_r2c4 = parseFloat(document.getElementById("A_r2c4").value)
    let A_r2c5 = parseFloat(document.getElementById("A_r2c5").value)
    let A_r2c6 = parseFloat(document.getElementById("A_r2c6").value)
    let A_r3c1 = parseFloat(document.getElementById("A_r3c1").value)
    let A_r3c2 = parseFloat(document.getElementById("A_r3c2").value)
    let A_r3c3 = parseFloat(document.getElementById("A_r3c3").value)
    let A_r3c4 = parseFloat(document.getElementById("A_r3c4").value)
    let A_r3c5 = parseFloat(document.getElementById("A_r3c5").value)
    let A_r3c6 = parseFloat(document.getElementById("A_r3c6").value)
    let A_r4c1 = parseFloat(document.getElementById("A_r4c1").value)
    let A_r4c2 = parseFloat(document.getElementById("A_r4c2").value)
    let A_r4c3 = parseFloat(document.getElementById("A_r4c3").value)
    let A_r4c4 = parseFloat(document.getElementById("A_r4c4").value)
    let A_r4c5 = parseFloat(document.getElementById("A_r4c5").value)
    let A_r4c6 = parseFloat(document.getElementById("A_r4c6").value)
    let A_r5c1 = parseFloat(document.getElementById("A_r5c1").value)
    let A_r5c2 = parseFloat(document.getElementById("A_r5c2").value)
    let A_r5c3 = parseFloat(document.getElementById("A_r5c3").value)
    let A_r5c4 = parseFloat(document.getElementById("A_r5c4").value)
    let A_r5c5 = parseFloat(document.getElementById("A_r5c5").value)
    let A_r5c6 = parseFloat(document.getElementById("A_r5c6").value)
    let A_r6c1 = parseFloat(document.getElementById("A_r6c1").value)
    let A_r6c2 = parseFloat(document.getElementById("A_r6c2").value)
    let A_r6c3 = parseFloat(document.getElementById("A_r6c3").value)
    let A_r6c4 = parseFloat(document.getElementById("A_r6c4").value)
    let A_r6c5 = parseFloat(document.getElementById("A_r6c5").value)
    let A_r6c6 = parseFloat(document.getElementById("A_r6c6").value)
    let B_r1c1 = parseFloat(document.getElementById("B_r1c1").value)
    let B_r1c2 = parseFloat(document.getElementById("B_r1c2").value)
    let B_r1c3 = parseFloat(document.getElementById("B_r1c3").value)
    let B_r1c4 = parseFloat(document.getElementById("B_r1c4").value)
    let B_r1c5 = parseFloat(document.getElementById("B_r1c5").value)
    let B_r1c6 = parseFloat(document.getElementById("B_r1c6").value)
    let B_r2c1 = parseFloat(document.getElementById("B_r2c1").value)
    let B_r2c2 = parseFloat(document.getElementById("B_r2c2").value)
    let B_r2c3 = parseFloat(document.getElementById("B_r2c3").value)
    let B_r2c4 = parseFloat(document.getElementById("B_r2c4").value)
    let B_r2c5 = parseFloat(document.getElementById("B_r2c5").value)
    let B_r2c6 = parseFloat(document.getElementById("B_r2c6").value)
    let B_r3c1 = parseFloat(document.getElementById("B_r3c1").value)
    let B_r3c2 = parseFloat(document.getElementById("B_r3c2").value)
    let B_r3c3 = parseFloat(document.getElementById("B_r3c3").value)
    let B_r3c4 = parseFloat(document.getElementById("B_r3c4").value)
    let B_r3c5 = parseFloat(document.getElementById("B_r3c5").value)
    let B_r3c6 = parseFloat(document.getElementById("B_r3c6").value)
    let B_r4c1 = parseFloat(document.getElementById("B_r4c1").value)
    let B_r4c2 = parseFloat(document.getElementById("B_r4c2").value)
    let B_r4c3 = parseFloat(document.getElementById("B_r4c3").value)
    let B_r4c4 = parseFloat(document.getElementById("B_r4c4").value)
    let B_r4c5 = parseFloat(document.getElementById("B_r4c5").value)
    let B_r4c6 = parseFloat(document.getElementById("B_r4c6").value)
    let B_r5c1 = parseFloat(document.getElementById("B_r5c1").value)
    let B_r5c2 = parseFloat(document.getElementById("B_r5c2").value)
    let B_r5c3 = parseFloat(document.getElementById("B_r5c3").value)
    let B_r5c4 = parseFloat(document.getElementById("B_r5c4").value)
    let B_r5c5 = parseFloat(document.getElementById("B_r5c5").value)
    let B_r5c6 = parseFloat(document.getElementById("B_r5c6").value)
    let B_r6c1 = parseFloat(document.getElementById("B_r6c1").value)
    let B_r6c2 = parseFloat(document.getElementById("B_r6c2").value)
    let B_r6c3 = parseFloat(document.getElementById("B_r6c3").value)
    let B_r6c4 = parseFloat(document.getElementById("B_r6c4").value)
    let B_r6c5 = parseFloat(document.getElementById("B_r6c5").value)
    let B_r6c6 = parseFloat(document.getElementById("B_r6c6").value)


    let add = [

            A_r1c1 * B_r1c1 + A_r1c2 * B_r2c1 + A_r1c3 * B_r3c1 + A_r1c4 * B_r4c1 + A_r1c5 * B_r5c1 + A_r1c6 * B_r6c1,
            A_r1c1 * B_r1c2 + A_r1c2 * B_r2c2 + A_r1c3 * B_r3c2 + A_r1c4 * B_r4c2 + A_r1c5 * B_r5c2 + A_r1c6 * B_r6c2,
            A_r1c1 * B_r1c3 + A_r1c2 * B_r2c3 + A_r1c3 * B_r3c3 + A_r1c4 * B_r4c3 + A_r1c5 * B_r5c3 + A_r1c6 * B_r6c3,
            A_r1c1 * B_r1c4 + A_r1c2 * B_r2c4 + A_r1c3 * B_r3c4 + A_r1c4 * B_r4c4 + A_r1c5 * B_r5c4 + A_r1c6 * B_r6c4,
            A_r1c1 * B_r1c5 + A_r1c2 * B_r2c5 + A_r1c3 * B_r3c5 + A_r1c4 * B_r4c5 + A_r1c5 * B_r5c5 + A_r1c6 * B_r6c5,
            A_r1c1 * B_r1c6 + A_r1c2 * B_r2c6 + A_r1c3 * B_r3c6 + A_r1c4 * B_r4c6 + A_r1c5 * B_r5c6 + A_r1c6 * B_r6c6,
            A_r2c1 * B_r1c1 + A_r2c2 * B_r2c1 + A_r2c3 * B_r3c1 + A_r2c4 * B_r4c1 + A_r2c5 * B_r5c1 + A_r2c6 * B_r6c1,
            A_r2c1 * B_r1c2 + A_r2c2 * B_r2c2 + A_r2c3 * B_r3c2 + A_r2c4 * B_r4c2 + A_r2c5 * B_r5c2 + A_r2c6 * B_r6c2,
            A_r2c1 * B_r1c3 + A_r2c2 * B_r2c3 + A_r2c3 * B_r3c3 + A_r2c4 * B_r4c3 + A_r2c5 * B_r5c3 + A_r2c6 * B_r6c3,
            A_r2c1 * B_r1c4 + A_r2c2 * B_r2c4 + A_r2c3 * B_r3c4 + A_r2c4 * B_r4c4 + A_r2c5 * B_r5c4 + A_r2c6 * B_r6c4,
            A_r2c1 * B_r1c5 + A_r2c2 * B_r2c5 + A_r2c3 * B_r3c5 + A_r2c4 * B_r4c5 + A_r2c5 * B_r5c5 + A_r2c6 * B_r6c5,
            A_r2c1 * B_r1c6 + A_r2c2 * B_r2c6 + A_r2c3 * B_r3c6 + A_r2c4 * B_r4c6 + A_r2c5 * B_r5c6 + A_r2c6 * B_r6c6,
            A_r3c1 * B_r1c1 + A_r3c2 * B_r2c1 + A_r3c3 * B_r3c1 + A_r3c4 * B_r4c1 + A_r3c5 * B_r5c1 + A_r3c6 * B_r6c1,
            A_r3c1 * B_r1c2 + A_r3c2 * B_r2c2 + A_r3c3 * B_r3c2 + A_r3c4 * B_r4c2 + A_r3c5 * B_r5c2 + A_r3c6 * B_r6c2,
            A_r3c1 * B_r1c3 + A_r3c2 * B_r2c3 + A_r3c3 * B_r3c3 + A_r3c4 * B_r4c3 + A_r3c5 * B_r5c3 + A_r3c6 * B_r6c3,
            A_r3c1 * B_r1c4 + A_r3c2 * B_r2c4 + A_r3c3 * B_r3c4 + A_r3c4 * B_r4c4 + A_r3c5 * B_r5c4 + A_r3c6 * B_r6c4,
            A_r3c1 * B_r1c5 + A_r3c2 * B_r2c5 + A_r3c3 * B_r3c5 + A_r3c4 * B_r4c5 + A_r3c5 * B_r5c5 + A_r3c6 * B_r6c5,
            A_r3c1 * B_r1c6 + A_r3c2 * B_r2c6 + A_r3c3 * B_r3c6 + A_r3c4 * B_r4c6 + A_r3c5 * B_r5c6 + A_r3c6 * B_r6c6,
            A_r4c1 * B_r1c1 + A_r4c2 * B_r2c1 + A_r4c3 * B_r3c1 + A_r4c4 * B_r4c1 + A_r4c5 * B_r5c1 + A_r4c6 * B_r6c1,
            A_r4c1 * B_r1c2 + A_r4c2 * B_r2c2 + A_r4c3 * B_r3c2 + A_r4c4 * B_r4c2 + A_r4c5 * B_r5c2 + A_r4c6 * B_r6c2,
            A_r4c1 * B_r1c3 + A_r4c2 * B_r2c3 + A_r4c3 * B_r3c3 + A_r4c4 * B_r4c3 + A_r4c5 * B_r5c3 + A_r4c6 * B_r6c3,
            A_r4c1 * B_r1c4 + A_r4c2 * B_r2c4 + A_r4c3 * B_r3c4 + A_r4c4 * B_r4c4 + A_r4c5 * B_r5c4 + A_r4c6 * B_r6c4,
            A_r4c1 * B_r1c5 + A_r4c2 * B_r2c5 + A_r4c3 * B_r3c5 + A_r4c4 * B_r4c5 + A_r4c5 * B_r5c5 + A_r4c6 * B_r6c5,
            A_r4c1 * B_r1c6 + A_r4c2 * B_r2c6 + A_r4c3 * B_r3c6 + A_r4c4 * B_r4c6 + A_r4c5 * B_r5c6 + A_r4c6 * B_r6c6,
            A_r5c1 * B_r1c1 + A_r5c2 * B_r2c1 + A_r5c3 * B_r3c1 + A_r5c4 * B_r4c1 + A_r5c5 * B_r5c1 + A_r5c6 * B_r6c1,
            A_r5c1 * B_r1c2 + A_r5c2 * B_r2c2 + A_r5c3 * B_r3c2 + A_r5c4 * B_r4c2 + A_r5c5 * B_r5c2 + A_r5c6 * B_r6c2,
            A_r5c1 * B_r1c3 + A_r5c2 * B_r2c3 + A_r5c3 * B_r3c3 + A_r5c4 * B_r4c3 + A_r5c5 * B_r5c3 + A_r5c6 * B_r6c3,
            A_r5c1 * B_r1c4 + A_r5c2 * B_r2c4 + A_r5c3 * B_r3c4 + A_r5c4 * B_r4c4 + A_r5c5 * B_r5c4 + A_r5c6 * B_r6c4,
            A_r5c1 * B_r1c5 + A_r5c2 * B_r2c5 + A_r5c3 * B_r3c5 + A_r5c4 * B_r4c5 + A_r5c5 * B_r5c5 + A_r5c6 * B_r6c5,
            A_r5c1 * B_r1c6 + A_r5c2 * B_r2c6 + A_r5c3 * B_r3c6 + A_r5c4 * B_r4c6 + A_r5c5 * B_r5c6 + A_r5c6 * B_r6c6,
            A_r6c1 * B_r1c1 + A_r6c2 * B_r2c1 + A_r6c3 * B_r3c1 + A_r6c4 * B_r4c1 + A_r6c5 * B_r5c1 + A_r6c6 * B_r6c1,
            A_r6c1 * B_r1c2 + A_r6c2 * B_r2c2 + A_r6c3 * B_r3c2 + A_r6c4 * B_r4c2 + A_r6c5 * B_r5c2 + A_r6c6 * B_r6c2,
            A_r6c1 * B_r1c3 + A_r6c2 * B_r2c3 + A_r6c3 * B_r3c3 + A_r6c4 * B_r4c3 + A_r6c5 * B_r5c3 + A_r6c6 * B_r6c3,
            A_r6c1 * B_r1c4 + A_r6c2 * B_r2c4 + A_r6c3 * B_r3c4 + A_r6c4 * B_r4c4 + A_r6c5 * B_r5c4 + A_r6c6 * B_r6c4,
            A_r6c1 * B_r1c5 + A_r6c2 * B_r2c5 + A_r6c3 * B_r3c5 + A_r6c4 * B_r4c5 + A_r6c5 * B_r5c5 + A_r6c6 * B_r6c5,
            A_r6c1 * B_r1c6 + A_r6c2 * B_r2c6 + A_r6c3 * B_r3c6 + A_r6c4 * B_r4c6 + A_r6c5 * B_r5c6 + A_r6c6 * B_r6c6
    ];

    document.getElementById("C_r1c1").innerText = add[0]
    document.getElementById("C_r1c2").innerText = add[1]
    document.getElementById("C_r1c3").innerText = add[2]
    document.getElementById("C_r1c4").innerText = add[3]
    document.getElementById("C_r1c5").innerText = add[4]
    document.getElementById("C_r1c6").innerText = add[5]
    document.getElementById("C_r2c1").innerText = add[6]
    document.getElementById("C_r2c2").innerText = add[7]
    document.getElementById("C_r2c3").innerText = add[8]
    document.getElementById("C_r2c4").innerText = add[9]
    document.getElementById("C_r2c5").innerText = add[10]
    document.getElementById("C_r2c6").innerText = add[11]
    document.getElementById("C_r3c1").innerText = add[12]
    document.getElementById("C_r3c2").innerText = add[13]
    document.getElementById("C_r3c3").innerText = add[14]
    document.getElementById("C_r3c4").innerText = add[15]
    document.getElementById("C_r3c5").innerText = add[16]
    document.getElementById("C_r3c6").innerText = add[17]
    document.getElementById("C_r4c1").innerText = add[18]
    document.getElementById("C_r4c2").innerText = add[19]
    document.getElementById("C_r4c3").innerText = add[20]
    document.getElementById("C_r4c4").innerText = add[21]
    document.getElementById("C_r4c5").innerText = add[22]
    document.getElementById("C_r4c6").innerText = add[23]
    document.getElementById("C_r5c1").innerText = add[24]
    document.getElementById("C_r5c2").innerText = add[25]
    document.getElementById("C_r5c3").innerText = add[26]
    document.getElementById("C_r5c4").innerText = add[27]
    document.getElementById("C_r5c5").innerText = add[28]
    document.getElementById("C_r5c6").innerText = add[29]
    document.getElementById("C_r6c1").innerText = add[30]
    document.getElementById("C_r6c2").innerText = add[31]
    document.getElementById("C_r6c3").innerText = add[32]
    document.getElementById("C_r6c4").innerText = add[33]
    document.getElementById("C_r6c5").innerText = add[34]
    document.getElementById("C_r6c6").innerText = add[35]
}