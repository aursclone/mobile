import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://database-aurs-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const accountList = ref(database, "accountList");

const footer = ["home", "search", "cart", "profile"];
let lastId = "home";
footer.forEach((footer) => {
  document.getElementById(footer).addEventListener("click", function () {
    document.getElementById(lastId).classList.remove("onpage");
    document.getElementById(footer).classList.add("onpage");
    lastId = footer;
  });
});

console.log(document.getElementById("sending"));
document.getElementById("sending").addEventListener("click", () => {
  let textField = document.getElementById("textfield");
  if (textField.value.toLowerCase() == "aurs") {
    console.log("Exist");
  } else console.log("Wrong");
});
