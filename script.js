let footer = ["home", "search", "cart", "profile"];
let lastId = "home";
console.log("hey");
console.log(document.getElementById("home"));
footer.forEach((footer) => {
  console.log(footer);
  document.getElementById(footer).addEventListener("click", function () {
    document.getElementById(lastId).classList.remove("onpage");
    document.getElementById(footer).classList.add("onpage");
    lastId = footer;
  });
});
