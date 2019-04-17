import React from 'react';
import classes from "../../containers/Header/Header.module.css";
import {UserAvatar} from "../sign-in-out-button/sign-in-out-button";

const UserInfo = ({name, isAuthorized}) => {
    let icon;
    if (isAuthorized === true) {
        icon = 'thumb_up'
    }
    else {
        icon = 'thumb_down'
    }
    return (
        <div className={classes.userInfo}>
            <UserAvatar/>
            <div className={classes.name}>{name}</div>
            <i className={classes.MaterialIconsForOnlineStatus}>{icon}</i>
        </div>
    )
};

export default UserInfo;
