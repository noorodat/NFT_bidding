import React, { useState } from "react";

export default function AnswerForm({
    
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  
  return (
    // <div class="nu-community-area rn-section-gapTop">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-8">
          <div class="community-content-wrapper">
            <div class="forum-input-ans-wrapper">
              <img src="assets/images/client/client-10.png" alt="Nft-Profile" />
              {/* <!-- user imag  sara--> */}

              <form onSubmit={onSubmit}>
                <div className="row g-2">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      placeholder="Write Answer..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-5">
                    
                    <button
                      className="btn btn-primary rounded"
                      disabled={isTextareaDisabled}
                                          
                    >
                        answer
                      {submitLabel}
                    </button>
                    {hasCancelButton && (
                      <button
                        type="button"
                        className="btn btn-primary rounded"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>

    //   <div className="comment-form-container">
    //     <form onSubmit={onSubmit}>
    //       <textarea
    //         className="comment-form-textarea"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //       <button className="comment-form-button" disabled={isTextareaDisabled}>
    //         {submitLabel}
    //       </button>
    //       {hasCancelButton && (
    //         <button
    //           type="button"
    //           className="comment-form-button comment-form-cancel-button"
    //           onClick={handleCancel}
    //         >
    //           Cancel
    //         </button>
    //       )}
    //     </form>
    //   </div>
  );
}
