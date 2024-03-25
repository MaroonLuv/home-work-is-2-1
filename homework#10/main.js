const checkInput = () => {
    let input1 = document.querySelector('#contractInput1').value;
    let input2 = document.querySelector('#contractInput2').value;
    let input3 = document.querySelector('#contractInput3').value;
    let input4 = document.querySelector('#contractInput4').value;
    let input5 = document.querySelector('#contractInput5').value;
    let button = document.querySelector('#contractBtn');
    if (input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    };
};

const addcontract = () => {
    let value1 = document.querySelector('#contractInput1').value;
    let value2 = document.querySelector('#contractInput2').value;
    let value3 = document.querySelector('#contractInput3').value;
    let value4 = document.querySelector('#contractInput4').value;
    let value5 = document.querySelector('#contractInput5').value;

    let out1 = document.createElement('li');
    let out2 = document.createElement('li');
    let out3 = document.createElement('li');
    let out4 = document.createElement('li');
    let out5 = document.createElement('li');
    
    out1.textContent = `Номер контракта: ${value1}`;
    out2.textContent = `Дата заключения контракта: ${value2}`;
    out3.textContent = `Описание контракта: ${value3}`;
    out4.textContent = `Статус контракта: ${value4}`;
    out5.textContent = `Изображение контракта: ${value5}`;
    
    document.querySelector('#contractList').appendChild(out1);
    document.querySelector('#contractList').appendChild(out2);
    document.querySelector('#contractList').appendChild(out3);
    document.querySelector('#contractList').appendChild(out4);
    document.querySelector('#contractList').appendChild(out5);

    for (let i = 1; i < 6; i++) {
        document.querySelector(`#contractInput${i}`).value = "";
    }
    document.querySelector('#contractBtn').disabled = true;
};
