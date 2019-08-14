/**
 * Function: Predictive Search and auto complete
 *
 * @magic:
 * User searches for color name, the search input is a dynamic  RegExp variable used, to be used in our match function. Because RegExp are inherently greedy, we will use ^() to match letters from the start.
 * We use a forEach to iterate over every word in our colors array. Then we use the matching RegExp to match any word start with the input search value
 */

function predictiveSearch() {
  const searchValue = document.getElementById("input").value;
  const listUI = document.querySelector("#results");
  // covert to RegExp
  const re = new RegExp("^(" + searchValue + ")", "gi"); // > /^(a)/gi

  if (searchValue === "" && searchValue.length === 0 && !searchValue) {
    listUI.innerHTML = "";
    listUI.style.opacity = 0;
    document
      .getElementById("alertCopy")
      .parentNode.removeChild(document.getElementById("alertCopy"));
  } else {
    listUI.innerHTML = "";
    listUI.style.opacity = 0;
    // Final Refactor #4
    colors.forEach(color => {
      if (color.name.match(re) || color.hex.match(re)) {
        // create table rows and cell
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const hexCell = document.createElement("td");

        // style table row and cell
        tableRow.className = "mx-auto";
        nameCell.innerHTML = `${color.name}`;
        nameCell.style.color = `${color.hex}`;
        hexCell.innerHTML = `${color.hex}`;
        hexCell.style.backgroundColor = `${color.hex}`;
        hexCell.className = "rightCell";

        // click #HEX to copy function
        hexCell.addEventListener("click", e => {
          // hackie creates invisible input with hex value, copies and removes element
          // console.log(hexCell);
          let invis = document.createElement("input");
          invis.value = hexCell.innerHTML;
          invis.setAttribute("id", "inv");
          // console.log(invis);
          document.body.appendChild(invis);
          document.getElementById("inv").select();
          document.execCommand("copy");
          invis.style.visibility = "hidden";
          // console.log(invis.value);
          // console.log(document.body.lastChild.value);
          document.body.removeChild(document.body.lastChild);
          // console.log(document.body.lastChild);

          // alert color copied popup
          if (document.getElementById("alertCopy")) {
            document.querySelector("#alertCopy").style.backgroundColor = `${
              e.target.innerHTML
            }`;
            document.querySelector("#alertCopy").style.visibility = "visible";
            document.querySelector("#alertCopy").innerHTML = `${
              e.target.innerHTML
            } ${nameCell.innerHTML} Copied!
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            `;
          } else if (!document.getElementById("alertCopy")) {
            let alertCopy = document.createElement("div");
            alertCopy.setAttribute("id", "alertCopy");
            alertCopy.className = "alert alert-dismissible fade show my-2";
            alertCopy.style.backgroundColor = `${e.target.innerHTML}`;
            alertCopy.style.visibility = "visible";
            alertCopy.innerHTML = `${e.target.innerHTML} ${
              nameCell.innerHTML
            } Copied!
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            `;
            document.getElementById("alertInput").appendChild(alertCopy);
          }
        });

        //  populate elements to DOM
        tableRow.appendChild(nameCell);
        tableRow.appendChild(hexCell);
        listUI.appendChild(tableRow);
        listUI.style.opacity = "1";
        listUI.style.transition = "opacity 1s";
        listUI.style.transitionTimingFunction = "ease-in-out";
      }
    });
  }
}
// invis.value = hexCell.innerHTML;
// // invis.setAttribute('id', 'invis');
// console.log(invis)
// // document.getElementById('invis')
//
// invi

// Refactor #3
// colors.map(color => ({
//   name: color.name,
//   hex: color.hex
// })).forEach(i => {
//   if(i.name.match(re)) {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = `${i.name} ${i.hex}`;
//     unorderList.appendChild(listItem);
//   }
// })

// Refactor #2
// colors.forEach(color => {
//   if (color.match(re)) {
//     let f = document.createElement("li");
//     f.innerHTML = `${color} ${hexCode}`;
//     return results.appendChild(f);
//   }
// });

// Refactor #1
// arr.map((n) => (`<li> name: ${n.name} hex: ${n.hex}</li>`))

// maybe forEach and for in
// person.forEach(p => {
//     for (x in p) {
//        let para = document.createElement('li')
//          para.innerHTML = p[x] + " ";
//          document.getElementById('demo').appendChild(para);
//       }
//   })
