function Weather() {
  let temp = 24;
  
  if (temp < 15) {
    return <h1>{temp} Degree, Its Cold Outside</h1>;
  } else if (temp >= 15 && temp < 25) {
    return <h1>{temp} Degree, Its Nice Outside</h1>;
  } else {
    return <h1>{temp} Degree, Its Hot Outside</h1>;
  }
}

export default Weather;
