function handleClick() {
  //the + before the document... importent because
  //it tells js that the value is number and not a string
  let numberInput = +document.getElementById("numberInput").value;
  numberInput += 5;
  console.log(numberInput);
}
