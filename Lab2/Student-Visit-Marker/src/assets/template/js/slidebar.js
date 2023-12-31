const setSideBarType = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width < 1199) {
    document.getElementById("main-wrapper").setAttribute("meta-data", "mini-sidebar");
    document.getElementById("main-wrapper").setAttribute("data-sidebartype", "mini-sidebar");
    document.getElementById("main-wrapper").classList.add("mini-sidebar");
  } else {
    document.getElementById("main-wrapper").setAttribute("meta-data", "full");
    document.getElementById("main-wrapper").setAttribute("data-sidebartype", "full");
    document.getElementById("main-wrapper").classList.remove("mini-sidebar");
  }
};

export const toggleBarEvent = (btn)=>{
  const mainWrapper = document.getElementById("main-wrapper");
  if(mainWrapper.getAttribute("meta-data") == "full") return;

  mainWrapper.classList.toggle("mini-sidebar");
  if (mainWrapper.classList.contains("mini-sidebar")) {
    btn.checked = true;
    mainWrapper.setAttribute("data-sidebartype", "mini-sidebar");
  }
  mainWrapper.classList.toggle("show-sidebar");
};

document.addEventListener("DOMContentLoaded", ()=> {

  setSideBarType();
  window.addEventListener("resize", setSideBarType);

  const sideBarToggler = document.querySelectorAll(".sidebartoggler");
  sideBarToggler.forEach(function (toggler) {
    toggler.addEventListener("click", ()=>{
      const mainWrapper = document.getElementById("main-wrapper");
      mainWrapper.classList.toggle("mini-sidebar");
      if (mainWrapper.classList.contains("mini-sidebar")) {
        toggler.checked = true;
        mainWrapper.setAttribute("data-sidebartype", "mini-sidebar");
      } else {
        toggler.checked = false;
        mainWrapper.setAttribute("data-sidebartype", "full");
      }
      mainWrapper.classList.toggle("show-sidebar");
    });

  });

  const btns = document.querySelectorAll(".hide-btn");

  btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      toggleBarEvent(btn);
    });
  });
});

