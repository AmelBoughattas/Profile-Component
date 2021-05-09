import React from "react";
import myPhoto from "../photo.jpg"

const MyProfilePhoto = () => {
    return (
        <div className="photoProfile">
            <img src = {myPhoto} alt="photo"/>
            <div className="line"></div>
        </div>
    )
};
export default MyProfilePhoto;