import "./styles.css";

const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sendBtn.addEventListener("click", sendMessage);

//callback function
function sendMessage() {
  //get the value
  let content = messageIn.value;
  if (content === "") {
    alert("please enter the message to santa");
  } else {
    messageOut.innerHTML = content;
    //clear message
    messageIn.value = "";
  }
}
