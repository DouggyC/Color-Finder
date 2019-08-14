// RGBA Selector Slider Component
const rgbaInput = document.getElementById("rgbaInput");
const slider = document.querySelectorAll(".slider");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const alpha = document.getElementById("alpha");

function rgbaInputVal() {
  // Changes rgba <input> value component
  rgbaInput.value = `rgba(${red.value}, ${green.value}, ${blue.value}, ${
    alpha.value
  })`;

  // alert color copied popup
  if (document.getElementById("alertCopy")) {
    document.querySelector("#alertCopy").style.backgroundColor = `${
      rgbaInput.value
    }`;
    document.querySelector("#alertCopy").style.visibility = "visible";
    document.querySelector("#alertCopy").innerHTML = `${rgbaInput.value}
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
    alertCopy.style.backgroundColor = `${rgbaInput.value}`;
    alertCopy.style.visibility = "visible";
    // extractRGB_values(rgbaInput)}
    // alertCopy.innerHTML = `${rgbaInput.value}
    // <button
    //   type="button"
    //   class="close"
    //   data-dismiss="alert"
    //   aria-label="Close"
    // >
    //   <span aria-hidden="true">&times;</span>
    // </button>
    // `;
    document.getElementById("alertInput").appendChild(alertCopy);
  }
  // console.log(rgbaInput.value.toString());
}
