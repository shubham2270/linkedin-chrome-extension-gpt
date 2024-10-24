import React, { useState } from "react";
import ReactDOM from "react-dom";

// Modal Component
const InputModal = ({ show, onClose, onSubmit }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.inputField.value;
    onSubmit(inputValue);
  };

  // Styles based on the screenshot
  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    // modal: {
    //   background: "#fff",
    //   padding: "20px",
    //   borderRadius: "8px",
    //   width: "fit-content",
    //   textAlign: "center",
    //   boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    // },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "26px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      marginBottom: "10px",
      width: "400px",
    },
    input: {
      boxShadow: "none",
      flexGrow: 1,
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      fontSize: "14px",
      color: "#333",
      outline: "none",
    },
    button: {
      marginLeft: "10px",
      padding: "8px 16px",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "6px",
      color: "white",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "26px",
      fontWeight: "bold",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
  };

  return ReactDOM.createPortal(
    <div style={styles.modalOverlay}>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              name="inputField"
              style={styles.input}
              placeholder="Your prompt"
            />
            <button type="submit" style={styles.button}>
              <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', width: '20px' }}>
                <path d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z" fill="white" />
              </svg>
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default InputModal;
