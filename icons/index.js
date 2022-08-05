Survey.SvgRegistry.renderIcons();

Object.keys(Survey.SvgRegistry.icons).map(name => {
  const element = document.createElement("div");
  element.classList.add("container")
  element.innerHTML = `
    <svg class="sd-detail-panel__icon">
      <use xlink:href="#icon-` + name + `\"></use>
    </svg>
    <span class="icon-name">` + name + `</span>`;
  document.getElementById("icons").appendChild(element);
});
