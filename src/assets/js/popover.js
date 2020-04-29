import tippy from "tippy.js";

export const popover = () => {
  document.querySelector("#castello").addEventListener("click", event => {
    if (event.target.closest(".js-popover")) {
      event.preventDefault();
    }
  });
  tippy(".js-popover", {
    theme: "light-border",
    duration: 300,
    arrow: true,
    appendTo: "parent",
    trigger: "click",
    hideOnClick: true,
    animation: "scale",
    placement: "bottom",
    content(reference) {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
  });
};
