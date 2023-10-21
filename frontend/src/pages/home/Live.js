import React, { useState, useEffect } from 'react';

const Live = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        // Fetch data from the API
        fetch('https://652f87fa0b8d8ddac0b29f71.mockapi.io/categories/1/products')
            .then((response) => response.json())
            .then((data) => {
                // Filter products with status true
                const filteredProducts = data.filter((product) => product.status === true);
                setProducts(filteredProducts);

                // Extract unique user IDs from the filtered products
                const uniqueUserIds = [...new Set(filteredProducts.map((product) => product.winning_user))];

                // Fetch user data for each unique user ID
                Promise.all(
                    uniqueUserIds.map((userId) =>
                        fetch(`https://user-api-url/${userId}`).then((response) => response.json())
                    )
                )
                    .then((userResponses) => {
                        // Create a user dictionary with user ID as the key
                        const userDict = {};
                        userResponses.forEach((user) => {
                            userDict[user.id] = user;
                        });
                        setUsers(userDict);
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="rn-live-bidding-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="title mb--0 live-bidding-title " data-sal-delay="150" data-sal="" data-sal-duration="800" style={{ textAlign:'left' }}>
                                    Live Bidding
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-lg-4">
                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href={`product/${product.id}`}>
                                                <img src={product.image} alt={product.name} />
                                            </a>
                                            <div className="countdown" data-date={product.timer}>
                                                {/* Replace this with your countdown logic based on the "timer" property */}
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            {/* <div className="profile-share">
                        <div className="more-author-text" href="#">
                          {users[product.winning_user] ? users[product.winning_user].name : 'Unknown User'}
                        </div>
                      </div> */}
                                            <div className="last-bid">{product.description}</div>
                                            
                                        </div>
                                        <a href={`product-details.html/${product.id}`}>
                                            <span className="product-name">{product.name}</span>
                                            <span className="last-bid">Highest bid $ {product.highest_bid}</span>
                                        </a>

                                        <div className="bid-react-area">
                                            <span className="last-bid">Start From $ {product.min_target}</span>
                                            <span class="last-bid"> {users[product.winning_user] ? users[product.winning_user].name : 'Unknown User'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;
