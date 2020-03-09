function nanyHandler() {
  debugger;
  // update state, this will be used after..important!
  strings.displayed = 'NaNy';

  // re-render UI from state
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];

  const currentListComponent = renderList(currentArray, currentDisplayed);

  const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  listContainer.appendChild(currentListComponent);

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'NaNy',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
