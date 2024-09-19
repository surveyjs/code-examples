function renderIcons() {
  let iconsDiv = document.createElement("div");
  iconsDiv.id = "sv-icon-holder-global-container";
  iconsDiv.innerHTML = "<svg>" + Survey.SvgRegistry.iconsRenderedHtml() + "</svg>";
  iconsDiv.style.display = "none";
  document.head.appendChild(iconsDiv);
}
renderIcons();

Object.keys(Survey.SvgRegistry.icons).map(name => {
  const element = document.createElement("div");
  element.classList.add("container")
  element.innerHTML = `
    <svg>
      <use xlink:href="#icon-` + name + `\"></use>
    </svg>
    <span class="icon-name">icon-` + name + `</span>`;
  document.getElementById("icons").appendChild(element);
});
