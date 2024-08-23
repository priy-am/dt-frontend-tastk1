console.log("hello piyma");

document.querySelector(".arrow").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  const heading = document.querySelector(".heading>h3");
  const arrow = document.querySelector(".arrow");
  const list = document.querySelector(".list");
  const one = document.querySelector(".one")

  const isCollapsed = sidebar.style.width === "" || sidebar.style.width === "132px";

  if (isCollapsed) {
    sidebar.style.width = "392px";
    heading.style.display = "block"; 
    list.style.display = 'block'
    arrow.classList.remove('fa-arrow-right')
    arrow.classList.add('fa-arrow-left')
    one.style.display = "none"
  } else {
    sidebar.style.width = "132px";
    heading.style.display = "none"; 
    list.style.display = "none";
    arrow.classList.add('fa-arrow-right')
    arrow.classList.remove('fa-arrow-left')
    one.style.display = 'flex'
  }


});
