import React, { useState, useEffect } from "react";
import { chatAI } from "../../services/fake-data/chatCompletion";
import styles from "../../assets/styles/chatbots/chatbot.module.css";



function Chatbot({ headline }) {
    const [thoughtValue, setThoughtValue] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "system",
            content: "You are a therapist assistant for career and life clients who needs focused sessions on personal and professional development. Help them work on setting and achieving career goals, improving self-confidence, and navigating life transitions",
        },
    ]);
    const [error, setError] = useState(null);

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
            const response = await chatAI(messages)
            setMessages((prevMsgs) => [...prevMsgs, response])
            setThoughtValue(""); 
            setError(null); 
        } catch (error) {
            setError(error.message);
        }
    }

    // useEffect(() => {
    //     console.log("Messages updated:", messages);
    // }, [messages]);

    return (
        <section className={styles.chatArea}>
            <h1 className={styles.ChatHeadline}>{headline}</h1>

            <div className={styles.messagesContainer}>
                {messages.map((message, index) => (
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
