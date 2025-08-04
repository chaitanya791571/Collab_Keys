import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css'; // Ensure you have your CSS here

const Chatbot = () => {
    const [isChatbotVisible, setChatbotVisible] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there 👋\nHow can I help you today?", type: "incoming" }
    ]);
    const [userMessage, setUserMessage] = useState("");
    const chatboxRef = useRef(null);

    // Toggle chatbot visibility and apply/remove class from body
    const toggleChatbot = () => {
        setChatbotVisible(!isChatbotVisible);
        document.body.classList.toggle("show-chatbot", !isChatbotVisible);
    };

    // Handle user message submission
    const handleChatSubmit = async () => {
        if (!userMessage.trim()) return;
        const newMessages = [...messages, { text: userMessage, type: "outgoing" }];
        setMessages(newMessages);
        setUserMessage("");

        // Add bot's "Thinking..." message
        const botReply = { text: "Thinking...", type: "incoming" };
        setMessages(prev => [...prev, botReply]);

        await generateResponse(botReply);
    };

    // Generate bot response
    const generateResponse = async (message) => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_URL = process.env.REACT_APP_API_URL;

        try {
            const response = await axios.post(
                `${API_URL}?key=${API_KEY}`, // Ensure the key is appended if necessary
                {
                    contents: [{ parts: [{ text: userMessage }] }]
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );

            const data = response.data;
            setMessages(prevMessages =>
                prevMessages.map(msg =>
                    msg === message ? { ...msg, text: data.candidates[0].content.parts[0].text } : msg
                )
            );
        } catch (error) {
            setMessages(prevMessages =>
                prevMessages.map(msg =>
                    msg === message ? { ...msg, text: "Error: " + error.message, type: "error" } : msg
                )
            );
        } finally {
            chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
        }
    };

    // Handle Enter key for message submission
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChatSubmit();
        }
    };

    // Hide AI notification after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById("ai-chatbot-notification").classList.add("hide");
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <button className="chatbot-toggler" onClick={toggleChatbot}>
                <span className="material-symbols-rounded">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>

            <div className={`chatbot ${isChatbotVisible ? 'visible' : ''}`}>
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn material-symbols-outlined" onClick={toggleChatbot}>close</span>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    {messages.map((msg, idx) => (
                        <li key={idx} className={`chat ${msg.type}`}>
                            {msg.type === "incoming" && (
                                <span className="material-symbols-outlined">smart_toy</span>
                            )}
                            <p className={msg.type === "error" ? "error" : ""}>{msg.text}</p>
                        </li>
                    ))}
                </ul>
                <div className="chat-input">
                    <textarea
                        placeholder="Enter a message..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        required
                    />
                    <span id="send-btn" className="material-symbols-rounded" onClick={handleChatSubmit}>
                        send
                    </span>
                </div>
            </div>

            <div id="ai-chatbot-notification" className="cloud" onClick={() => document.getElementById("ai-chatbot-notification").classList.add("hide")}>
                I'm an AI Chatbot
                <span className="arrow"></span>
            </div>
        </div>
    );
};

export default Chatbot;
