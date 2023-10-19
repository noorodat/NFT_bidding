import React from 'react'


export default function ProductDetails() {
    return (
        <div>
            {/* start product details area */}
            <div className="product-details-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        {/* product image area */}
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="product-tab-wrapper rbt-sticky-top-adjust">
                                <div className="pd-tab-inner">
                                    <div
                                        className="tab-content rn-pd-content"
                                        id="v-pills-tabContent"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="v-pills-home"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-home-tab"
                                        >
                                            <div className="rn-pd-thumbnail">
                                                <img
                                                    src="assets/images/portfolio/lg/portfolio-01.jpg"
                                                    alt="Nft_Profile"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="v-pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab"
                                        >
                                            <div className="rn-pd-thumbnail">
                                                <img
                                                    src="assets/images/portfolio/lg/portfolio-02.jpg"
                                                    alt="Nft_Profile"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="v-pills-messages"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab"
                                        >
                                            <div className="rn-pd-thumbnail">
                                                <img
                                                    src="assets/images/portfolio/lg/portfolio-03.jpg"
                                                    alt="Nft_Profile"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product image area end */}
                        <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                            <div className="rn-pd-content-area">
                                <div className="pd-title-area">
                                    <h4 className="title">The Amazing Game</h4>
                                    <div className="pd-react-area">
                                        <div className="heart-count">
                                            <i data-feather="heart" />
                                            <span>33</span>
                                        </div>
                                        <div className="count">
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    className="icon"
                                                    type="button"
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
                                    </div>
                                </div>
                                <span className="bid">
                                    Height bid <span className="price">0.11wETH</span>
                                </span>
                                <h6 className="title-name">#22 Portal , Info bellow</h6>
                                <div className="catagory-collection">
                                    <div className="catagory">
                                        <span>
                                            Catagory <span className="color-body">10% royalties</span>
                                        </span>
                                        <div className="top-seller-inner-one">
                                            <div className="top-seller-wrapper">
                                                <div className="thumbnail">
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/client/client-1.png"
                                                            alt="Nft_Profile"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="top-seller-content">
                                                    <a href="#">
                                                        <h6 className="name">Brodband</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rn-bid-details">
                                    <div className="tab-wrapper-one">
                                        <nav className="tab-button-one">
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button
                                                    className="nav-link"
                                                    id="nav-home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-home"
                                                    aria-selected="false"
                                                >
                                                    Bids
                                                </button>
                                                <button
                                                    className="nav-link active"
                                                    id="nav-profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-profile"
                                                    aria-selected="true"
                                                >
                                                    Details
                                                </button>
                                            </div>
                                        </nav>
                                        <div className="tab-content rn-bid-content" id="nav-tabContent">
                                            <div
                                                className="tab-pane fade"
                                                id="nav-home"
                                                role="tabpanel"
                                                aria-labelledby="nav-home-tab"
                                            >
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-3.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by <a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-4.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.09wETH by <a href="#">Joe Biden</a>
                                                            </span>
                                                            <span className="count-number">1.30 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-5.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.07wETH by <a href="#">Sonial mridha</a>
                                                            </span>
                                                            <span className="count-number">1.35 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-6.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.07wETH by <a href="#">Tribute Dhusra</a>
                                                            </span>
                                                            <span className="count-number">1.55 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-7.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.07wETH by <a href="#">Sonia Sobnom</a>
                                                            </span>
                                                            <span className="count-number">2 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-8.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.02wETH by <a href="#">Sadia Rummon</a>
                                                            </span>
                                                            <span className="count-number">2.5 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                            </div>
                                            <div
                                                className="tab-pane fade show active"
                                                id="nav-profile"
                                                role="tabpanel"
                                                aria-labelledby="nav-profile-tab"
                                            >
                                                {/* single */}
                                                <div className="rn-pd-bd-wrapper">
                                                    <div className="top-seller-inner-one">
                                                        {/* <p class="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                                              elit. Doloribus debitis nemo deserunt.</p> */}
                                                        <h6 className="name-title">Owner</h6>
                                                        <div className="top-seller-wrapper">
                                                            <div className="thumbnail">
                                                                <a href="#">
                                                                    <img
                                                                        src="assets/images/client/client-1.png"
                                                                        alt="Nft_Profile"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="top-seller-content">
                                                                <a href="#">
                                                                    <h6 className="name">Brodband</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* single */}
                                                </div>
                                                {/* single */}
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="nav-contact"
                                                role="tabpanel"
                                                aria-labelledby="nav-contact-tab"
                                            >
                                                {/* single creator */}
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-3.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by<a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one mt--20">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-2.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by<a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one mt--20">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-4.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by<a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one mt--20">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-5.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by<a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                                {/* single creator */}
                                                <div className="top-seller-inner-one mt--20">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-8.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>
                                                                0.11wETH by<a href="#">Allen Waltker</a>
                                                            </span>
                                                            <span className="count-number">1 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single creator */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="place-bet-area">
                                        <div className="rn-bet-create">
                                            <div className="bid-list winning-bid">
                                                <h6 className="title">Winning bit</h6>
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/client/client-7.png"
                                                                    alt="Nft_Profile"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span className="heighest-bid">
                                                                Heighest bid <a href="#">Atif aslam</a>
                                                            </span>
                                                            <span className="count-number">0.115wETH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bid-list left-bid">
                                                <h6 className="title">Auction has ended</h6>
                                                <div className="countdown mt--15" data-date="2025-12-09">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <a class="btn btn-primary-alta mt--30" href="#">Place a Bid</a> */}
                                        <button
                                            type="button"
                                            className="btn btn-primary-alta mt--30"
                                            data-bs-toggle="modal"
                                            data-bs-target="#placebidModal"
                                        >
                                            Place a Bid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End product details area */}
            {/* New items Start */}
            <div className="rn-new-items rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30 align-items-center">
                        <div className="col-12">
                            <h3
                                className="title mb--0"
                                data-sal-delay={150}
                                data-sal="slide-up"
                                data-sal-duration={800}
                            >
                                Related Item
                            </h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* start single product */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay={150}
                            data-sal-duration={800}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-01.jpg"
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
                                            data-tooltip="Jone Due"
                                        >
                                            <img
                                                src="assets/images/client/client-2.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Nisat Tara"
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
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay={200}
                            data-sal-duration={800}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-02.jpg"
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
                                                src="assets/images/client/client-4.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Nira Ara"
                                        >
                                            <img
                                                src="assets/images/client/client-5.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Fatima Afrafy"
                                        >
                                            <img
                                                src="assets/images/client/client-6.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#">
                                            10+ Place Bit.
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
                                    <span className="product-name">Diamond Dog</span>
                                </a>
                                <span className="latest-bid">Highest bid 5/11</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.892wETH</div>
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
                                        <span className="number">420</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay={250}
                            data-sal-duration={800}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-03.jpg"
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
                                            data-tooltip="Janin Ara"
                                        >
                                            <img
                                                src="assets/images/client/client-8.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Atif Islam"
                                        >
                                            <img
                                                src="assets/images/client/client-9.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#">
                                            10+ Place Bit.
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
                                    <span className="product-name">OrBid6</span>
                                </a>
                                <span className="latest-bid">Highest bid 2/31</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.2128wETH</div>
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
                                        <span className="number">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay={300}
                            data-sal-duration={800}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-04.jpg"
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
                                                src="assets/images/client/client-3.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Jone lee"
                                        >
                                            <img
                                                src="assets/images/client/client-5.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#">
                                            8+ Place Bit.
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
                                    <span className="product-name">Morgan11</span>
                                </a>
                                <span className="latest-bid">Highest bid 3/16</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.265wETH</div>
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
                                        <span className="number">20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                        {/* start single product */}
                        <div
                            data-sal="slide-up"
                            data-sal-delay={350}
                            data-sal-duration={800}
                            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/images/portfolio/portfolio-05.jpg"
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
                                                src="assets/images/client/client-7.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a
                                            href="author.html"
                                            className="avatar"
                                            data-tooltip="Jone lee"
                                        >
                                            <img
                                                src="assets/images/client/client-9.png"
                                                alt="Nft_Profile"
                                            />
                                        </a>
                                        <a className="more-author-text" href="#">
                                            15+ Place Bit.
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
                                    <span className="product-name">mAtal8</span>
                                </a>
                                <span className="latest-bid">Highest bid 6/50</span>
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
                                        <span className="number">205</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single product */}
                    </div>
                </div>
            </div>
            {/* New items End */}

            {/* Modal */}
            <div
                className="rn-popup-modal share-modal-wrapper modal fade"
                id="shareModal"
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
                        <div className="modal-header share-area">
                            <h5 className="modal-title">Share this NFT</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="social-share-default">
                                <li>
                                    <a href="#">
                                        <span className="icon">
                                            <i data-feather="facebook" />
                                        </span>
                                        <span className="text">facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon">
                                            <i data-feather="twitter" />
                                        </span>
                                        <span className="text">twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon">
                                            <i data-feather="linkedin" />
                                        </span>
                                        <span className="text">linkedin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon">
                                            <i data-feather="instagram" />
                                        </span>
                                        <span className="text">instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon">
                                            <i data-feather="youtube" />
                                        </span>
                                        <span className="text">youtube</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="rn-popup-modal report-modal-wrapper modal fade"
                id="reportModal"
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
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                Describe why you think this item should be removed from marketplace
                            </p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea
                                    name="message"
                                    placeholder="Write issues"
                                    defaultValue={""}
                                />
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">
                                        Report
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary-alta w-auto"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="rn-popup-modal placebid-modal-wrapper modal fade"
                id="placebidModal"
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
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Place a bid</h3>
                        </div>
                        <div className="modal-body">
                            <p>You are about to purchase This Product Form Nuron</p>
                            <div className="placebid-form-box">
                                <h5 className="title">Your bid</h5>
                                <div className="bid-content">
                                    <div className="bid-content-top">
                                        <div className="bid-content-left">
                                            <input id="value" type="text" name="value" />
                                            <span>wETH</span>
                                        </div>
                                    </div>
                                    <div className="bid-content-mid">
                                        <div className="bid-content-left">
                                            <span>Your Balance</span>
                                            <span>Service fee</span>
                                            <span>Total bid amount</span>
                                        </div>
                                        <div className="bid-content-right">
                                            <span>9578 wETH</span>
                                            <span>10 wETH</span>
                                            <span>9588 wETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bit-continue-button">
                                    <a href="connect.html" className="btn btn-primary w-100">
                                        Place a bid
                                    </a>
                                    <button
                                        type="button"
                                        className="btn btn-primary-alta mt--10"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
