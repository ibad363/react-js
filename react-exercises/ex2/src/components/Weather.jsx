function Weather() {
  let temp = 24.9;
  
  if (temp < 15) {
    return <h1>Its Cold Outside</h1>;
  } else if (temp >= 15 && temp < 25) {
    return <h1>Its Nice Outside</h1>;
  } else {
    return <h1>Its Hot Outside</h1>;
  }
}

export default Weather;
