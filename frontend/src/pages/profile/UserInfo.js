import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Twitter, Edit, UserPlus, Share2 } from 'react-feather';
// import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';


const UserInfo = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user_id = sessionStorage.getItem('userID');
    // const userID = useSelector((state) => state.user.id);
    // const userName = useSelector((state) => state.user.name);
    // const user_id = sessionStorage.getItem('userId');
    sessionStorage.setItem('userID', data.data.user.id);
    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/users/${user_id}`)
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
                                       
                                        <div class="author-button-area">
                                           
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
