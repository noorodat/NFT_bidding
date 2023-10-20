import React, { useState, useEffect } from 'react';
import sal from 'sal.js';

const Category = () => {
    const [data, setData] = useState([]);
    const apiUrl = 'http://127.0.0.1:8000/api/categories';
    const productApiUrl = 'https://652f87fa0b8d8ddac0b29f71.mockapi.io/categories/1/products'; // Use your product API URL here
    const [loading, setLoading] = useState(true);
    const [productCounts, setProductCounts] = useState({});
    // const [categoryImages, setCategoryImages] = useState({}); // Store category images


    useEffect(() => {
        sal();
    }, []);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const getProductCount = async (categoryId) => {
        try {
            const response = await fetch(`${productApiUrl}?categoryId=${categoryId}`);
            if (response.ok) {
                const products = await response.json();
                console.log('Products:', products); // Log the products array
                return products.length;
            }
        } catch (error) {
            console.error(`Error fetching product data for category ${categoryId}:`, error);
        }
        return 0;
    };

    useEffect(() => {
        const counts = {};
        data.forEach((Category) => {
            getProductCount(Category.id)
                .then((count) => {
                    counts[Category.id] = count;
                    setProductCounts({ ...counts });
                });
        });
    }, [data]);

    // const getProductImagesForCategory = async (categoryId) => {
    //     try {
    //         const response = await fetch(`${productApiUrl}?categoryId=${categoryId}`);
    //         if (response.ok) {
    //             const products = await response.json();
    //             if (products.length > 0) {
    //                 return products[0].image;
    //             }
    //         }
    //     } catch (error) {
    //         console.error(`Error fetching category image for category ${categoryId}:`, error);
    //     }
    //     return ''; // Return an empty string or a default image URL if no image is found
    // };

    // useEffect(() => {
    //     const images = {};
    //     data.forEach(async (Category) => {
    //         const image = await getProductImagesForCategory(Category.id);
    //         images[Category.id] = image;
    //         setCategoryImages({ ...images });
    //     });
    // }, [data]);

    return (
        <div>
            <div className="rn-collection-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3 className="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" style={{ textAlign:'left' }}>
                                Top Collection
                            </h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <a className="btn-transparent" href="/products">
                                    VIEW ALL<i data-feather="arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            data.map((Category, index) => (
                                <div key={index} data-sal="" data-sal-delay="150" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                                    <a href={Category.link} className="rn-collection-inner-one">
                                        <div className="collection-wrapper">
                                            <div className="collection-big-thumbnail">
                                                <img src={Category.image} alt={Category.image} />
                                            </div>

                                            <div className="collection-deg">
                                                <h6 className="title">{Category.name}</h6>
                                                <span className="items">{productCounts[Category.id]} Items</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;