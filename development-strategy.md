# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty files

## 1. Data & Log

* `data/strings.js` & `log.js`

## 2. Init

* `init.js` that renders the current list for users.
* `renderList` DOM Component function that creates elements and renders the list which is chosen by the user then returns div element that includes `h4` and `li` child nodes.
* `index.html` that has buttons for `reset`, `save`, `display-nany`, `display-evens`, `display-odds` for the user interaction.

## 3. User Story: `reset`

* A user can reset state & see a cleared User Interface
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: `save`

  * A user can enter a value & save the state.
  * I wrote the code in `listeners/save.js` & `handlers/save.js`
  * The handler function evaluates if the input value is NaN or Number(even/odd) then saves the state by editing the `strings` object. The value will be saved as NaN or even or odd. The handler is connected to the UI with a click event.

## 5. User Story: `render-list`

  * A user can render the saved values as NaNy/evens/odds & creates elements about them by `renderList` function for the UI.
  * `testRenderList` validation asserts. 
  * I wrote the function in `views/render-list.js`
  * All of the events use this function.

## 6. User Story: `display-nany`

  * A user can click `NaNy` button to display the NaN values that saved before.
  * which files of code do you need to change?
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.

## 7. User Story: `display-evens`

  * A user can click `evens` button to display the even values that saved before.
  * I wrote the code in listeners/display-evens.js & handlers/display-evens.js
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.

## 7. User Story: `display-odds`

  * A user can click `odds` button to display the odd values that saved before.
  * I wrote the code in listeners/display-nany.js & handlers/display-nany.js
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.