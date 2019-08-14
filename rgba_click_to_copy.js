outer_rgbaInput.addEventListener("click", e => {
  let rgba_input = document.getElementById("rgbaInput");
  let outer_rgbaInput = document.getElementById("outer_rgbaInput");
  let hexa_str = document.getElementById("alertCopy");
  // add click to copy on rgbaInput component
  console.log("yes");
  hexa_str.innerHTML = `${rgbaInput.value} Copied!
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
  invis.value = `${rgbaInput.value}`;
  invis.setAttribute("id", "inv");
  document.body.appendChild(invis);
  document.getElementById("inv").select();
  document.execCommand("copy");
  invis.style.visibility = "hidden";
  document.body.removeChild(document.body.lastChild);
});

// Allows for click to copy feature, by creating invisible input element, copying, hidding and destroying
