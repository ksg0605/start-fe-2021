export const clickedFilter = function (event) {
  const btnGroup = event.target.parentNode;
  const btn = btnGroup.childNodes;
  for (let i = 0; i < btn.length; i++) {
    if (btn[i] !== undefined && btn[i].nodeName === "BUTTON") {
      btn[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
};
