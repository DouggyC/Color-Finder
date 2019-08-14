// 1. Get rgba input value from DOM
// 2. create results array = results_arr

// 3. Extract rgb number values from rgb input string using a matching RegEx, ignoring alpha value as it is not need for rgb - hex conversion, match returns new array.

// 4. forEach r,g,b number value, run recursive hexadecimal conversion function, results are pushed to the results_arr

// 5. The converted hexadecimal values are read in reverse sequence and need to be formated, a for loop is used to swap the values at every 2nd index.

// 6. Now that the results_arr reads correctly with the hexadecimal values reading left to right, the results_arr is joined to output a #HEX string

// 7. This String can now be displayed in the alertCopy component

// 8. Connect function to component and DOM event

const rgb_Values = document.getElementById("rgbaInput");

function extract_convert_format_RGB_values() {
  let results_arr = [];
  let hexa_str = document.getElementById("alertCopy");
  let values_str = rgb_Values.value;
  let re = /-?\d+/g;
  let values_arr = values_str.match(re).slice(0, 3);

  console.log(values_arr);
  values_arr.forEach(
    (convert_deciaml_to_hexadecimal = rgb_val_num => {
      let modulus_Remainder, division_Remainder;
      if (rgb_val_num < 16) {
        division_Remainder = Math.floor(rgb_val_num / 16);
        switch ((modulus_Remainder = rgb_val_num % 16)) {
          case 10:
            modulus_Remainder = "A";
            break;
          case 11:
            modulus_Remainder = "B";
            break;
          case 12:
            modulus_Remainder = "C";
            break;
          case 13:
            modulus_Remainder = "D";
            break;
          case 14:
            modulus_Remainder = "E";
            break;
          case 15:
            modulus_Remainder = "F";
            break;
          default:
            // console.log(
            //   "Error mod: " + modulus_Remainder + " rgbVal: " + rgb_val_num
            // );
            break;
        }
        results_arr.push(modulus_Remainder);
        console.log(results_arr);
      } else {
        division_Remainder = Math.floor(rgb_val_num / 16);
        switch ((modulus_Remainder = rgb_val_num % 16)) {
          case 10:
            modulus_Remainder = "A";
            break;
          case 11:
            modulus_Remainder = "B";
            break;
          case 12:
            modulus_Remainder = "C";
            break;
          case 13:
            modulus_Remainder = "D";
            break;
          case 14:
            modulus_Remainder = "E";
            break;
          case 15:
            modulus_Remainder = "F";
            break;
          default:
            // console.log(
            //   "Error mod: " + modulus_Remainder + " rgbVal: " + rgb_val_num
            // );
            break;
        }
        results_arr.push(modulus_Remainder);
        console.log(results_arr);
        return convert_deciaml_to_hexadecimal(division_Remainder);
      }
    })
  );

  for (let i = 0; i < results_arr.length; i += 2) {
    results_arr.splice(i + 1, 0, results_arr.splice(i, 1)[0]);
  }

  hexa_str.innerHTML = `#${results_arr.join("")}
  <button
    type="button"
    class="close"
    data-dismiss="alert"
    aria-label="Close"
  >
    <span aria-hidden="true">&times;</span>
  </button>
  `;

  hexa_str.addEventListener("click", e => {
    hexa_str.innerHTML = `#${results_arr.join("")} Copied!
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    `;
    let invis = document.createElement("input");
    invis.value = `#${results_arr.join("")}`;
    invis.setAttribute("id", "inv");
    document.body.appendChild(invis);
    document.getElementById("inv").select();
    document.execCommand("copy");
    invis.style.visibility = "hidden";
    document.body.removeChild(document.body.lastChild);
  });

  // hexa_str.innerHTML = `#${results_arr.join("")}`;
  console.log(hexa_str);
}

// extract_convert_format_RGB_values(rgb_Values);
