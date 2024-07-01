import React from "react";

export default function Button({
  children,
  className = "",
  onClick = () => { },
  disabled = false,
  type = '',
  id = ""
}) {
  return (
    <button
      id={id}
      className={`rounded-md ${className} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}