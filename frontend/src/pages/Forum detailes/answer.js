import React from "react";
import CommentForm from "./CommentForm";
import AnswerForm from "./AnswerForm";
import { Link } from "react-router-dom";
// import { getUsers } from '../../redux/actions/userActions';
import { useSelector } from "react-redux";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
}) => {
  const userName = useSelector((state) => state.user.name);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const currentUserId = useSelector((state) => state.user.id);
  // const currentUserId = useSelector((state) => state.user);


  // if (isAuthenticated) {
    const isEditing =
      activeComment &&
      activeComment.id === comment.id &&
      activeComment.type === "editing";
    const isReplying =
      activeComment &&
      activeComment.id === comment.id &&
      activeComment.type === "replying";
    const fiveMinutes = 300000;
    const timePassed = new Date() -  parseFloat(new Date (comment.createdAt)) > fiveMinutes;
    
      const canDelete =
      currentUserId === comment.userId && replies.length === 0 && !timePassed;
      const canReply = Boolean(currentUserId);
   
    
    const canEdit = currentUserId === comment.userId && !timePassed;
    const replyId = parentId ? parentId : comment.id;
  // }
  const createdAt = new Date(comment.createdAt).toLocaleDateString();



  return (
    <div key={comment.id} className="comment-container">
      <div class="nu-community-area rn-section-gapTop">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <div class="community-content-wrapper">
                <div className="single-community-box">
                  <div className="community-bx-header">
                    <div className="header-left">
                      <div className="thumbnail">
                        <img
                          src="assets/images/client/client-2.png"
                          alt="NFT-thumbnail"
                        />
                      </div>
                      <div className="name-date">
                        <Link to="#" className="name">
                          {comment.username}
                        </Link>
                        <span className="date">
                          {new Date(
                            parseFloat(createdAt) * 1000
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="header-right">
                      <div className="product-share-wrapper">
                        <div className="profile-share">
                          <Link
                            to="author.html"
                            className="avatar"
                            data-tooltip="Owener:Mr.Jone-lee"
                          >
                            <img
                              className="large"
                              src="assets/images/client/client-1.png"
                              alt="Nft_Profile"
                            />
                          </Link>
                          <Link
                            to="author.html"
                            className="avatar"
                            data-tooltip="Owener:Mr.Jone-lee"
                          >
                            <img
                              className="large"
                              src="assets/images/client/client-10.png"
                              alt="Nft_Profile"
                            />
                          </Link>
                          <Link
                            to="author.html"
                            className="avatar"
                            data-tooltip="Owener:Mr.Jone-lee"
                          >
                            <img
                              className="large"
                              src="assets/images/client/client-11.png"
                              alt="Nft_Profile"
                            />
                          </Link>
                          <Link className="more-author-text" href="#">
                            20+ People.
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {  (isAuthenticated) && (
                    <div>
                      <div className="community-content">
                        {!isEditing && (
                          <h3
                            className="title"
                            style={{ textAlign: "left", marginLeft: "50px" }}
                          >
                            {comment.body}
                          </h3>
                        )}
                        {isEditing && (
                          <CommentForm
                            submitLabel="Update"
                            hasCancelButton
                            initialText={comment.body}
                            handleSubmit={(text) =>
                              updateComment(text, comment.id)
                            }
                            handleCancel={() => {
                              setActiveComment(null);
                            }}
                          />
                        )}
                        <div>
                          {!canEdit && (
                            <span
                              className="comment-action edit-action"
                              onClick={() =>
                                setActiveComment({
                                  id: comment.id,
                                  type: "editing",
                                })
                              }
                            >
                              Edit
                            </span>
                          )}
                          {!canDelete && (
                            <span
                              className="comment-action delete-action"
                              onClick={() => deleteComment(comment.id)}
                            >
                              Delete
                            </span>
                          )}
                        </div>

                        <div className="hr"></div>
                        <div class="rn-community-footer">
                          {!isReplying && (
                            <div class="answer">
                              <button
                                class="btn btn-primary-alta rounded"
                                onClick={() =>
                                  setActiveComment({
                                    id: comment.id,
                                    type: "replying",
                                  })
                                }
                              >
                                Answer
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {(isAuthenticated) && (
                  <div>
                    {isReplying && (
                      <>
                        <AnswerForm
                          submitLabel="Reply"
                          handleSubmit={(text) =>
                            addComment(text, replyId, currentUserId, userName)
                          }
                        />
                        <button
                          class="btn btn-primary-alta rounded"
                          onClick={() => setActiveComment(null)}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nu-community-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="community-content-wrapper">
                {replies.length > 0 && (
                  <div>
                    {replies
                      .filter((reply) => reply.parentId === comment.id)
                      .map((filteredReply) => (
                        <div class="forum-ans-box">
                          <div class="forum-single-ans" key={filteredReply.id}>
                            <div class="ans-header">
                              <a href="author.html">
                                <img
                                  src="assets/images/client/client-3.png"
                                  alt="Nft-Profile"
                                />
                              </a>
                              <a href="author.html">
                                <p class="name">{filteredReply.username}</p>
                                <br></br>
                                <p class="name">{currentUserId}</p>
                              </a>
                              <div class="date">
                                <i class="feather-watch"></i>
                                <span>
                                  {new Date(
                                    filteredReply.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div class="ans-content">
                              <p>{filteredReply.body}</p>
                              {/* <hr class="form-ans-separator" /> */}
                              {/* <div class="reaction">
                                <a href="#" class="like">
                                  <span>27 Like</span>
                                  <i class="feather-thumbs-up"></i>
                                </a>
                                <a href="#" class="dislike">
                                  <span>27 dislike</span>
                                  <i class="feather-thumbs-down"></i>
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
