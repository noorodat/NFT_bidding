import React from 'react'
import useApiData from '../../hooks/fetchAPI'
import { data } from 'jquery';
import { Link } from 'react-router-dom';


export default function Products() {

  const productsAPI = 'https://652f87fa0b8d8ddac0b29f71.mockapi.io/categories/1/products';
  const { data: products } = useApiData(productsAPI);


  return (

    <div>
  {/* start page title area */}
  <div className="rn-breadcrumb-inner ptb--30">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <h5 className="title text-center text-md-start">Our Product</h5>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-list">
            <li className="item">
              <a href="index.html">Home</a>
            </li>
            <li className="separator">
              <i className="feather-chevron-right" />
            </li>
            <li className="item current">Our Product</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end page title area */}
  {/* Start product area */}
  <div className="rn-product-area rn-section-gapTop">
    <div className="container">
      <div className="row mb--50 align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <h3
            className="title text-left mb--0"
            data-sal-delay={150}
            data-sal=""
            data-sal-duration={800}
            style={{textAlign: 'left'}}
          >
            Explore Product
          </h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div
            className="view-more-btn text-start text-sm-end"
            data-sal-delay={150}
            data-sal=""
            data-sal-duration={800}
          >
          </div>
        </div>
      </div>
      <div className="default-exp-wrapper default-exp-expand" style={{display: 'block'}}>
        <div className="inner">
          <div className="filter-select-option">
            <label className="filter-leble">LIKES</label>
            <select>
              <option data-display="Most liked">Most liked</option>
              <option value={1}>Least liked</option>
            </select>
          </div>
          <div className="filter-select-option">
            <label className="filter-leble">Category</label>
            <select>
              <option data-display="Category">Category</option>
              <option value={1}>Art</option>
              <option value={1}>Photograph</option>
              <option value={2}>Metaverses</option>
              <option value={4}>Potato</option>
              <option value={4}>Photos</option>
            </select>
          </div>
          <div className="filter-select-option">
            <label className="filter-leble">Collections</label>
            <select>
              <option data-display="Collections">Collections</option>
              <option value={1}>BoredApeYachtClub</option>
              <option value={2}>MutantApeYachtClub</option>
              <option value={4}>Art Blocks Factory</option>
            </select>
          </div>
          <div className="filter-select-option">
            <label className="filter-leble">Sale type</label>
            <select>
              <option data-display="Sale type">Sale type</option>
              <option value={1}>Fixed price</option>
              <option value={2}>Timed auction</option>
              <option value={4}>Not for sale</option>
              <option value={4}>Open for offers</option>
            </select>
          </div>
          {/* <div className="filter-select-option">
            <label className="filter-leble">Price Range</label>
            <div className="price_filter s-filter clear">
              <form action="#" method="GET">
                <div id="slider-range" />
                <div className="slider__range--output">
                  <div className="price__output--wrap">
                    <div className="price--output">
                      <span>Price :</span>
                      <input type="text" id="amount" readOnly="" />
                    </div>
                    <div className="price--filter">
                      <a className="btn btn-primary btn-small" href="#">
                        Filter
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      <div className="row g-5">
        {/* start single product */}
          {
            products.map((product) => {
              return (
              <div
              data-sal=""
              data-sal-delay={150}
              data-sal-duration={800}
              className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                <Link to={''}>
                <img
                      src="assets/images/portfolio/portfolio-01.jpg"
                      alt="NFT_portfolio"
                    />
                </Link>
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
                    <button
                      className="icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        viewBox="0 0 14 4"
                        fill="none"
                        width={16}
                        height={16}
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
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
                  <span className="product-name">{product.name}</span>
                </a>
                <span className="latest-bid">Highest bid 1/20</span>
                <div className="bid-react-area">
                  <div className="last-bid">0.244wETH</div>
                  {/* <div className="react-area">
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
                  </div> */}
                </div>
              </div>
            </div>
            )
            })
          }
        {/* end single product */}
      </div>
    </div>
  </div>
  {/* end product area */}
    </div>
  )
}
