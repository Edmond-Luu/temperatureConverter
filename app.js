const titleText = document.querySelector("#titleText");
const input = document.querySelector("#input");
const button = document.querySelector("#convertButton");
const selectorBox = document.querySelector("#selector");
const results = document.querySelector("#results");



button.addEventListener('click', () => {
    boxValue = selectorBox.value;
    results.innerText = "";
    conversion();
});

selectorBox.addEventListener('change', () => {
    boxValue = selectorBox.value
    switch (boxValue) {
        case 'cel':
            titleText.innerText = "Celsius to Farenheit";
            break;
        case 'far':
            titleText.innerText = "Farenheit to Celsius"
            break;
    }

})


function cToF() {
    let celsius = input.value;
    if (!parseInt(celsius)) {
        celsius = 0;
    }
    const farenheit = ((celsius * 9) / 5) + 32;
    const kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
    const conversionResult = `${celsius} °C ≈ ${farenheit} °F ≈ ${kelvin} K`;
    const data = document.createElement("h3");
    data.innerText = conversionResult;
    results.append(data);
    input.value = "";
}

function fToC() {
    let farenheit = input.value;
    if (!parseInt(farenheit)) {
        farenheit = 0;
    }
    const celsius = (((5 * (farenheit - 32)) / 9)).toFixed(2);
    const kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
    const conversionResult = `${farenheit} °F ≈ ${celsius} °C ≈ ${kelvin} K`;
    const data = document.createElement("h3");
    data.innerText = conversionResult;
    results.append(data);
    input.value = "";
}

function conversion() {
    switch (boxValue) {
        case 'cel':
            cToF();
            break;
        case 'far':
            fToC();
            break;
    }


}

