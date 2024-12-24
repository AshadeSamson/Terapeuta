import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/chatbots/chatbot.module.css";



function Chatbot() {
    const [thoughtValue, setThoughtValue] = useState("");
    const [messages, setMessages] = useState([
        {
            messageText: "sample user message for therapy support",
            sender: "user",
        },
        {
            messageText: "sample AI response for the user message",
            sender: "ai",
        },
    ]);
    const [error, setError] = useState(null);

    function sendNewMessage(e) {
        e.preventDefault();

        if (!thoughtValue.trim()) {
            setError("Message cannot be empty");
            return;
        }

        try {
            const newMessage = {
                messageText: thoughtValue.trim(),
                sender: "user",
            };

            setMessages((prevList) => [...prevList, newMessage]);
            setThoughtValue(""); 
            setError(null); 
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        console.log("Messages updated:", messages);
    }, [messages]);

    return (
        <section className={styles.chatArea}>
            <h1 className={styles.ChatHeadline}>Terapeuta AI Chatbot</h1>

            <div className={styles.messagesContainer}>
                {messages.map((message, index) => (
                    <p
                        key={index}
                        className={`${styles.message} ${
                            message.sender === "user"
                                ? styles.userMessage
                                : styles.aiMessage
                        }`}
                    >
                        {message.messageText}
                    </p>
                ))}
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <form
                className={styles.messageInput}
                onSubmit={sendNewMessage}
            >
                <input
                    type="text"
                    placeholder="Enter Your Thoughts Here"
                    value={thoughtValue}
                    onChange={(e) => setThoughtValue(e.currentTarget.value)}
                />
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default Chatbot;
