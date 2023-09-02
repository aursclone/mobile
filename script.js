import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://database-aurs-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const accountList = ref(database, "accountList");
let resultText = document.getElementById("results")

onValue(accountList, function(snapshot) {
    let accountArray = Object.entries(snapshot.val())

        testing(accountArray)
   
})

const footer = ["home", "search", "cart", "profile"];
let lastId = "home";
footer.forEach((footer) => {
  document.getElementById(footer).addEventListener("click", function () {
    document.getElementById(lastId).classList.remove("onpage");
    document.getElementById(footer).classList.add("onpage");
    lastId = footer;
  });
});


function testing(text) {
  
    
    
    
document.getElementById("sending").addEventListener("click", () => {
  let textField = document.getElementById("textfield");
    let result = false
    
    text.forEach(function(x) {
        
        if(textField.value.toLowerCase() == x[1]) {
         appendText(`Found ${x[1]}`)
        result = true
  }  })
   if(result == false) {
      appendText("None")
  }
 
   
})}

function appendText(text) {
resultText.textContent = text
}