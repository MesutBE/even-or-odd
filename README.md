# Project Even or Odd

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development Strategy](#development-strategy)
- [Screen Capture of Project](#screen-capture-of-project)
- [Project Status](#project-status)
- [Contact](#contact)
- [Live Project](https://mesutbe.github.io/calculator-refactor/)

## General info

This is a website that sorts user-provided strings into two categories, _NaNy_ and _Numbery_.

- Further specifications:
  - If a user inputs the same value twice, it will not saved in app. The lists will never have repeated values
  - After a user has removed a value from the state, it is possible add it again.

## Technologies

Project is created with:

- JScript
- HTML5 /CSS3

## Setup

Clone this repository and start using it with your editor.

## Development Strategy

Building this site one step at a time

### 0. Setup

* `index.html` and folder structure with empty files

### 1. Data & Log

* `data/strings.js` & `log.js`

### 2. Init

* `init.js` that renders the current list for users.
* `renderList` DOM Component function that creates elements and renders the list which is chosen by the user then returns div element that includes `h4` and `li` child nodes.
* `index.html` that has buttons for `reset`, `save`, `display-nany`, `display-evens`, `display-odds` for the user interaction.

### 3. User Story: `reset`

* A user can reset state & see a cleared User Interface
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

### 4. User Story: `save`

  * A user can enter a value & save the state.
  * I wrote the code in `listeners/save.js` & `handlers/save.js`
  * The handler function evaluates if the input value is NaN or Number(even/odd) then saves the state by editing the `strings` object. The value will be saved as NaN or even or odd. The handler is connected to the UI with a click event.

### 5. User Story: `render-list`

  * A user can render the saved values as NaNy/evens/odds & creates elements about them by `renderList` function for the UI.
  * `testRenderList` validation asserts. 
  * I wrote the function in `views/render-list.js`
  * All of the events use this function.

### 6. User Story: `display-nany`

  * A user can click `NaNy` button to display the NaN values that saved before.
  * which files of code do you need to change?
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.

### 7. User Story: `display-evens`

  * A user can click `evens` button to display the even values that saved before.
  * I wrote the code in listeners/display-evens.js & handlers/display-evens.js
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.

### 8. User Story: `display-odds`

  * A user can click `odds` button to display the odd values that saved before.
  * I wrote the code in listeners/display-nany.js & handlers/display-nany.js
  * The handler function sets a value what user wants to display for re-rendering the UI from saved values. The handler is connected to the UI with a click event.

## Screen Capture of Project

![Screenshot from 2020-03-10 16-04-42](https://user-images.githubusercontent.com/59531743/76326411-e446c780-62e8-11ea-8c60-3b71474a4054.png)

## Project Status

Project finished

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.
