import React, { useState, useEffect, useRef } from "react";
import { chatAI } from "./chatCompletion";
import styles from "../../assets/styles/chatbots/chatbot.module.css";



function Chatbot({ headline, servicePrompt }) {

    const textareaRef = useRef(null);
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
    

            const updatedMessages = [...messages, newMessage];
    
            // Update UI state
            setMessages(updatedMessages);
            setThoughtValue("");
            setLoading(true);
            setError(null);
    
            
            const response = await chatAI(updatedMessages);
    
            // Append the assistant's response
            setMessages((prevMsgs) => [...prevMsgs, response]);
        } catch (error) {
            setError(error?.message || "We're having trouble processing your message. Please try again shortly");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const stored = localStorage.getItem("chat_history");
    
        if (stored) {
            const parsed = JSON.parse(stored);
            const ageInHours = (Date.now() - parsed.timestamp) / (1000 * 60 * 60);
    
            if (ageInHours <= 72 && parsed.messages) {
                setMessages(parsed.messages);
            } else {
                localStorage.removeItem("chat_history"); 
            }
        }
    }, []);
    

    useEffect(() => {
        // Save chat to localStorage whenever messages change
        if (messages.length > 1) {
            const dataToStore = {
                timestamp: Date.now(),
                messages: messages,
            };
            localStorage.setItem("chat_history", JSON.stringify(dataToStore));
        }
    }, [messages]);
    
    

    function autoResizeTextarea() {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; 
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }
    


    return (
        <section className={styles.chatArea}>
            <h1 className={styles.ChatHeadline}>{headline}</h1>

            <div className={styles.messagesContainer}>
                {messages
                .filter((message) => message.role !== "system")
                .map((message, index) => (
                    <div
                    key={index}
                    className={`${styles.message} ${
                        message.role === "user" ? styles.userMessage : styles.aiMessage
                    }`}
                    >
                    {message.content.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                    </div>

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
                <textarea
                    rows="1"
                    ref={textareaRef}
                    placeholder="Enter Your Thoughts Here"
                    value={thoughtValue}
                    onChange={(e) => {
                        setThoughtValue(e.currentTarget.value);
                        autoResizeTextarea(); 
                    }}
                />
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default Chatbot;
