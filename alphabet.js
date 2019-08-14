// alphabet search component, with click to copy feature

const listUI = document.querySelector("#results");
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// Map alphabet into individual anchor tags, format and add to DOM parent
let letterAnchor = alphabet.map(i => ` <a href="#" class="alphabet">${i}</a>`);
document.getElementById("az").innerHTML = letterAnchor.join("");

document.querySelectorAll(".alphabet").forEach(q =>
  q.addEventListener("click", e => {
    e.preventDefault();

    // clear field and results
    document.getElementById("input").value = "";
    listUI.innerHTML = "";

    setTimeout(() => {
      listUI.style.opacity = "1";
      listUI.style.transition = "opacity 1s";
      listUI.style.transitionTimingFunction = "ease-in";
    }, 300);

    colors
      .filter(color => color.name.startsWith(e.target.innerHTML))
      .map(
        color => `
        <td style='color: ${color.hex}'>${color.name}</td>
        <td class="rightCell" style="background-color: ${color.hex}">${
          color.hex
        }</td>
      `
      )
      .forEach(
        (elem, tr) => (
          (tr = document.createElement("tr")),
          (tr.className = "mx-auto"),
          (tr.innerHTML = elem),
          listUI.appendChild(tr),
          tr.lastElementChild.addEventListener("click", e => {
            let invis = document.createElement("input");
            invis.value = e.target.innerHTML;
            invis.setAttribute("id", "inv");
            document.body.appendChild(invis);
            document.getElementById("inv").select();
            document.execCommand("copy");
            invis.style.visibility = "hidden";
            document.body.removeChild(document.body.lastChild);
            // alertCopy component
            if (document.querySelector("#alertCopy")) {
              document.querySelector("#alertCopy").style.backgroundColor = `${
                e.target.innerHTML
              }`;
              document.querySelector("#alertCopy").style.visibility = "visible";
              document.querySelector("#alertCopy").innerHTML = `${
                e.target.innerHTML
              } ${tr.lastElementChild.previousElementSibling.innerHTML} Copied!
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              `;
            } else {
              let alertCopy = document.createElement("div");
              alertCopy.setAttribute("id", "alertCopy");
              alertCopy.className = "alert alert-dismissible fade show my-2";
              alertCopy.style.backgroundColor = `${e.target.innerHTML}`;
              alertCopy.style.visibility = "visible";
              alertCopy.innerHTML = `${e.target.innerHTML} ${
                tr.lastElementChild.previousElementSibling.innerHTML
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
          })
        )
      );
  })
);

// referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
