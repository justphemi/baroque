import { SendIcon } from "lucide-react";
import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    setTimeout(() => {

      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

generateBotResponse([
  ...chatHistory,
  {
    role: "user",
    text: `Using the details provided above, respond as a company representative. 
Only provide clear, brief answers based strictly on the given information. 
If the user's query is not covered in the provided details, politely ask them to contact info@baroquevariations.com for further assistance. 
Avoid unnecessary elaboration or assumptions. No styling—respond in plain text only. Treat this as a real customer conversation: reason through the question and provide only what’s relevant and accurate.
User message: ${userMessage}`
  }
]);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input ref={inputRef} placeholder="Ask..." className="message-input" required />
      <button type="submit" id="send-message" className="material-symbols-rounded">
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatForm;