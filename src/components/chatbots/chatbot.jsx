import React, { useState, useEffect } from "react";
import { chatAI } from "../../services/chatCompletion";
import styles from "../../assets/styles/chatbots/chatbot.module.css";



function Chatbot({ headline, servicePrompt }) {
    const [thoughtValue, setThoughtValue] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "system",
            content: servicePrompt,
        },
    ]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function sendNewMessage(e) {
        e.preventDefault();

        if (!thoughtValue.trim()) {
            setError("Message cannot be empty");
            return;
        }

        try {
            const newMessage = {
                role: "user",
                content: thoughtValue.trim(),
            };

            setMessages((prevList) => [...prevList, newMessage]);
            setThoughtValue("");
            setLoading(true); 
            const response = await chatAI(messages)
            setMessages((prevMsgs) => [...prevMsgs, response])  
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <section className={styles.chatArea}>
            <h1 className={styles.ChatHeadline}>{headline}</h1>

            <div className={styles.messagesContainer}>
                {messages
                .filter((message) => message.role !== "system")
                .map((message, index) => (
                    <p
                        key={index}
                        className={`${styles.message} ${
                            message.role === "user"
                                ? styles.userMessage
                                : styles.aiMessage
                        }`}
                    >
                        {message.content}
                    </p>
                ))}
                {loading && (
                    <p className={`${styles.message} ${styles.aiMessage} ${styles.typingIndicator}`}>
                        AI Therapist is typing...
                    </p>
                )}
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
