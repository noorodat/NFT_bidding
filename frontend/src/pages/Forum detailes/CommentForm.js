import React, { useState } from "react";

export default function CommentForm({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) {
  const [text, setText] = useState(initialText);
  const [isActive, setIsActive] = useState(false);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  const onCancel = () => {
    // Clear the text and invoke the cancel action
    setText("");
    if (handleCancel) {
      handleCancel();
    }
  };

  return (
    <div className="container">
    <form onSubmit={onSubmit}>
      <input style={{backgroundColor:"white",minHeight:"50px",marginBottom:"5px"}}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          className="btn btn-primary add-community"
          disabled={isTextareaDisabled}
          onClick={() => setIsActive("")}
        >
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  </div>
  
  );
}
