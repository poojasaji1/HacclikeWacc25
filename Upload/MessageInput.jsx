import React from "react";
import styles from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <section className={styles.messageInput}>
      <textarea
        className={styles.inputBox}
        placeholder="Your message"
        aria-label="Message input"
      />
      <button className={styles.sendButton}>Send</button>
    </section>
  );
};

export default MessageInput;
