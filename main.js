const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");


let theMessage;

const createChatList = (message, className) =>{
    //create a chat <li> element with passed message and className
    const chatList = document.createElement("li");
    chatList.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="symbol">
    <img src="images/.svg" alt="photo"></span><p>${message}</p>`;
    chatList.innerHTML = chatContent;
    return chatList;
}

const handleChat = ()=>{
    theMessage = chatInput.value.trim();
    if (!theMessage) return;

    //append the user's message to the chatbox
   chatbox.appendChild(createChatList(theMessage, "outgoing"));

   setTimeout(() => {
    chatbox.appendChild(createChatList("No problem! Let me connect you to a customer support agent.", "incoming"));
   }, 600);

   setTimeout (() =>{
    chatbox.appendChild(createChatList("Hi there!I'm Hannah.How can I help you?", "incoming"));
   }, 2000);
}

sendChatBtn.addEventListener("click", handleChat);