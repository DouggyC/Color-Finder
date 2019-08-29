# Colorful Planet

##### Description:

A Simple color finding application. Search by color: name, #hex or rgba value of a color. Built in plain javaScript.

## [Live Demo](https://colorfulplanet.netlify.com)

https://colorfulplanet.netlify.com

---

###### Proof of concept:

Mimicing a color database with predictive search.

---

##### Built with:

vanilla javascript ES6

---

### Features

- [x] Basic predictive search
- [x] Alphabetical search
- [x] Create custom colors with selector slider bars
- [x] Click to Copy swatch component
- [x] Click to Copy RGBA component
- [x] Click to Copy #HEX table cell
- [x] Automatic conversion RGBA to HEX
- [x] Alert Copied popup component
- [x] Responsive state changes
- [x] Responsive layout and components

---

#### User Stories

- User should be able to search for a color name or hex code.
- User can search colors with alphabet nav bar
- Results should be listed in alphabetical order, and displayed in an responsive layout
- App should be responsive across devices and cross browsers

##### Extra Credit: Bonus Features

- User can create custom color using rgba selector sliders.
- User can click to copy both rgba values or hex code

- [ ] Animate search bar
- [ ] User can create custom color by inputing rgba values

---

#### Challenges: Problem - solution

Understanding #HEX color code delineation
Understanding rgba() color numbering
writing an algorithm that converts rgb values to #hexadecimal; extract values, convert values, format values.
where to trigger conversion algorithm
Making 4 x sliders to select rgba values
how to add event trigger to disabled input

RBGA Slider Selectors
which is a better dom event to use onchange or oninput
why are sliders not styling = remove default; appearance: none;
what should opacity step value been; <s>1/256 = 0.00390625</s>
opacity can accept 3 decimal places

Read only input

Range selector input

---

#### Future Features: Bonus Credits

- [ ] refine search algorithm
- [ ] color wheel?
- [ ] Add new color function
- [ ] Saved colors list using localStorage
- [ ] Randomize feature
- [ ] rgba state, onChange features
- [ ] reset button
