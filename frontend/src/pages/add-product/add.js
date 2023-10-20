import React from "react";
import { useState, useEffect } from "react";
import sal from 'sal.js';

export default function AddProduct() {
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    sal();
}, []);

  return (
    <>
      {/* create new product area */}
      <div className="create-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              {/* file upload area */}
                <div className="brows-file-wrapper">
                  {/* actual upload which is hidden */}
                  <input
                    name="createinputfile"
                    id="createinputfile"
                    type="file"
                    className="inputfile"
                    onChange={(e) => {
                      const file = e.target.files[0]; // Get the first selected file
                      if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        setImageURL(imageUrl);
                      }
                    }}
                  />
                  <img
                    src={imageURL}
                    alt="Uploaded Image"
                    data-black-overlay={6}
                  />
                  {/* our custom upload button */}
                  {/* <label htmlFor="createinputfile" title="No File Choosen">
                    <i className="feather-upload" />
                    <span className="text-center">Choose a File</span>
                    <p className="text-center mt--10">
                      PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                    </p>
                  </label> */}
                </div>
              <div className="upload-area">
                {/* <div className="upload-formate mb--30">
                  <h6 className="title">Upload file</h6>
                  <p className="formate">Drag or choose your file to upload</p>
                </div> */}
              </div>
              {/* end upoad file area */}
              {/* <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
            <h5> Note: </h5>
            <span>
              {" "}
              Service fee : <strong>2.5%</strong>{" "}
            </span>{" "}
            <br />
            <span>
              {" "}
              You will receive : <strong>25.00 ETH $50,000</strong>
            </span>
          </div> */}
            </div>
            <div className="col-lg-7">
              <div className="form-wrapper-one">
                <form className="row" action="#">
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="name" className="form-label">
                        Product Name
                      </label>
                      <input
                        id="name"
                        placeholder="e. g. `Digital Awesome Game`"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label className="title">Category</label>
                      <div className="create-collection-input">
                        <div className="nice-select mb--30" tabIndex={0}>
                          <span className="current">Add Category</span>
                          <ul className="list">
                            <li
                              data-value="Art"
                              data-display="Art"
                              className="option selected focus"
                            >
                              Art
                            </li>
                            <li data-value={1} className="option">
                              Collectibles
                            </li>
                            <li data-value={2} className="option">
                              Music
                            </li>
                            <li data-value={4} className="option">
                              Sports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Discription" className="form-label">
                        Discription
                      </label>
                      <textarea
                        id="Discription"
                        rows={3}
                        placeholder="e. g. “After purchasing the product you can get item...”"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-box pb--20">
                      <label htmlFor="dollerValue" className="form-label">
                        Minimum Target Price in $
                      </label>
                      <input id="dollerValue" placeholder="e. g. `20$`" />
                    </div>
                  </div>
                  {/* <div className="col-md-4">
                <div className="input-box pb--20">
                  <label htmlFor="Size" className="form-label">
                    Size
                  </label>
                  <input id="Size" placeholder="e. g. `Size`" />
                </div>
              </div> */}
                  {/* <div className="col-md-4">
                <div className="input-box pb--20">
                  <label htmlFor="Propertie" className="form-label">
                    End date
                  </label>
                  <input id="Propertie" placeholder="e. g. `Propertie`" />
                </div>
              </div> */}
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        End date
                      </label>
                      <input
                        type="time"
                        id="Royality"
                        placeholder="e. g. `20%`"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="input-box pb--20 rn-check-box">
                      <input
                        className="rn-check-box-input"
                        type="checkbox"
                        id="putonsale"
                      />
                      <label className="rn-check-box-label" htmlFor="putonsale">
                        Put on Sale
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="input-box pb--20 rn-check-box">
                      <input
                        className="rn-check-box-input"
                        type="checkbox"
                        id="instantsaleprice"
                      />
                      <label
                        className="rn-check-box-label"
                        htmlFor="instantsaleprice"
                      >
                        Instant Sale Price
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="input-box pb--20 rn-check-box">
                      <input
                        className="rn-check-box-input"
                        type="checkbox"
                        id="unlockpurchased"
                      />
                      <label
                        className="rn-check-box-label"
                        htmlFor="unlockpurchased"
                      >
                        Unlock Purchased
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 col-xl-4">
                    <div className="input-box">
                      <button
                        type="button"
                        className="btn btn-primary-alta btn-large w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#uploadModal"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                    <div className="input-box">
                      <button className="btn btn-primary btn-large w-100">
                        Submit Item
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
          <h5> Note: </h5>
          <span>
            {" "}
            Service fee : <strong>2.5%</strong>{" "}
          </span>{" "}
          <br />
          <span>
            {" "}
            You will receive : <strong>25.00 ETH $50,000</strong>
          </span>
        </div> */}
          </div>
        </div>
      </div>
      {/* create new product area */}
      {/* Modal */}
      <div
        className="rn-popup-modal upload-modal-wrapper modal fade"
        id="uploadModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x" />
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content share-wrapper">
            <div className="modal-body">
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <a href="product-details.html">
                    <img
                      src="assets/images/portfolio/portfolio-08.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share">
                    <a
                      href="author.html"
                      className="avatar"
                      data-tooltip="Jone lee"
                    >
                      <img
                        src="assets/images/client/client-1.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="author.html"
                      className="avatar"
                      data-tooltip="Jone lee"
                    >
                      <img
                        src="assets/images/client/client-2.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a
                      href="author.html"
                      className="avatar"
                      data-tooltip="Jone lee"
                    >
                      <img
                        src="assets/images/client/client-3.png"
                        alt="Nft_Profile"
                      />
                    </a>
                    <a className="more-author-text" href="#">
                      9+ Place Bit.
                    </a>
                  </div>
                  <div className="share-btn share-btn-activation dropdown">
                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                      <button
                        type="button"
                        className="btn-setting-text share-text"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn-setting-text report-text"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <a href="product-details.html">
                  <span className="product-name">Preatent</span>
                </a>
                <span className="latest-bid">Highest bid 1/20</span>
                <div className="bid-react-area">
                  <div className="last-bid">0.244wETH</div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width={16}
                      height={16}
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    </svg>
                    <span className="number">322</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
