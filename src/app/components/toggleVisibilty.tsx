import React, { useState } from "react";

interface ToggleVisibilityProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const ToggleVisibility: React.FC<ToggleVisibilityProps> = ({ inputRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (inputRef.current) {
      inputRef.current.type = isVisible ? "password" : "text";
    }
  };

  return (
    <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
      {isVisible ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9"
            stroke="#0D0D12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12C22 12 21.3082 13.3317 20 14.8335M10 5.23552C10.3244 5.15822 10.6578 5.09828 11 5.05822C11.3254 5.02013 11.6588 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47202 13.8524 9.17073 13C9.11389 12.8392 9.07037 12.6721 9.0415 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
            stroke="#0D0D12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default ToggleVisibility;