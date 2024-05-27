const generate = (start, end, setRandomNumber) => {
  const startValue = parseInt(start, 10);
  const endValue = parseInt(end, 10);

  if ((isNaN(startValue) || isNaN(endValue)) || (startValue == "" && endValue == "")) {
    setRandomNumber('Invalid Input');
  }
  else {
    const newValue = Math.floor(Math.random() * end + 1);
    console.log(newValue);
    if (newValue >= startValue && newValue <= endValue) {
      setRandomNumber(newValue);
    }
  }
}
export default generate;