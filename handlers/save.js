function saveHandler() {
  debugger;
  // get value from user input. And set newInput to this value
  let newInput = document.getElementById('input').value.trim();
  // early returns: Validate if input is empty.
  if (newInput === '') { return alert('you should write something!') }

  if(isNaN(newInput)){
    // if it is Not a Number then..
    strings.NaNy.push(newInput);
  }else{
    if (Number(newInput)%2 == 0){
      // so it is an even..
      strings.evens.push(newInput);
    }else{
      // so it is an odd..
      strings.odds.push(newInput);
    }
  }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
