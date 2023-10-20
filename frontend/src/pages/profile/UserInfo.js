import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Twitter, Edit, UserPlus, Share2 } from 'react-feather';

const UserInfo = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user_id = 1;
    useEffect(() => {

        axios.get(`https://652f9ade0b8d8ddac0b2ca4e.mockapi.io/users/${user_id}`)
            .then((response) => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error} </div>;
    }

    return (
        <>
            <div className="rn-author-area mb--30 mt_dec--120">
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    <div className="user-thumbnail">
                                        <img src={userData.image} alt="User Profile" />
                                    </div>
                                    <div className="rn-author-info-content">
                                        <h4 className="title">{userData.name}</h4>
                                        <a href={userData.twitter} className="social-follow">
                                            <Twitter size={16} />
                                            <span className="userData-name"> @ {userData.name} {userData.twitter}</span>
                                        </a>
                                        <div className="follow-area">
                                            <div className="follow followers">
                                                <span>
                                                    {userData.followers}{' '}
                                                    <a href="#" className="color-body">
                                                        followers
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="follow following">
                                                <span>
                                                    {userData.following}{' '}
                                                    <a href="#" className="color-body">
                                                        following
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="author-button-area">
                                            <span class="btn at-follw follow-button"><UserPlus /> Follow</span>
                                            <span class="btn at-follw share-button" data-bs-toggle="modal" data-bs-target="#shareModal"><Share2 /> Share</span>
                                            <a href="EditProfile" class="btn at-follw follow-button edit-btn"><Edit /> Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserInfo;