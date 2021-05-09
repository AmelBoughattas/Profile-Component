import React from "react";
import myPhoto from "../photo.jpg"

const MyProfilePhoto = () => {
    return (
        <div className="photoProfile">
            <img src = {myPhoto} alt=""/>
            <div className="line"></div>
        </div>
    )
};
export default MyProfilePhoto;
