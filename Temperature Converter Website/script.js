function convertKelvinToCelsius() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureCelsius = temperature - 273;
        result.innerHTML = "<p><b>Result:</b><br>" + temperature + "° Kelvin is equivalent to " + temperatureCelsius + "° Celsius.</p>";
    }
}

function convertKelvinToFahrenheit() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureFahrenheit = (temperature - 273) * 1.8 + 32;
        result.innerHTML = "<p><b>Result:</b><br>" + temperature + "° Kelvin is equivalent to " + temperatureFahrenheit.toFixed(1) + "° Fahrenheit.</p>";
    }
}

function convertCelsiusToKelvin() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureKelvin = Number(temperature) + 273;
        result.innerHTML = "<p><b>Result:</b><br>" + temperatureKelvin.toFixed(1) + "° Kelvin is equivalent to " + temperature + "° Celsius.</p>";
    }
}

function convertCelsiusToFahrenheit() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureFahrenheit = Number(temperature) * 1.8 + 32;
        result.innerHTML = "<p><b>Result:</b><br>" + temperatureFahrenheit.toFixed(1) + "° Fahrenheit is equivalent to " + temperature + "° Celsius.</p>";
    }
}

function convertFahrenheitToCelsius() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureCelsius = (temperature - 32) / 1.8;
        result.innerHTML = "<p><b>Result:</b><br>" + temperatureCelsius.toFixed(1) + "° Celsius is equivalent to " + temperature + "° Fahrenheit.</p>";
    }
}

function convertFahrenheitToKelvin() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;
    var result = document.getElementById('result');

    if (temperature === '') {
        result.innerHTML = '<p style="color: black; font-size: 29px; font-weight: 600;">Enter a number to perform the conversion.</p>';
    } else {
        var temperatureKelvin = (temperature - 32) * 5 / 9 + 273;
        result.innerHTML = "<p><b>Result:</b><br>" + temperatureKelvin.toFixed(1) + "° Kelvin is equivalent to " + temperature + "° Fahrenheit.</p>";
    }
}
