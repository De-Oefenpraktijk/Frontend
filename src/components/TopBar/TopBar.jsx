import React from "react"
import './TopBar.css'

export default function TopBar() {
    return (
        <div class="topbar">
            <div class="title">
                <h1>Title</h1>
            </div>
            <div>
                <div class="topbar__profile">
                    <div class="topbar__profile__dropdown">
                        <div class="topbar__profile__dropdown__button">
                            <span>username</span>
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </div>
                        <div class="topbar__profile__dropdown__content">
                            <ul>

                                <li>
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <span>Profile</span>
                                </li>
                                <li>
                                    <font-awesome-icon
                                        icon="fa-solid fa-arrow-right-from-bracket"
                                    />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="profile picture"
                    />
                </div>
            </div >
        </div >

    )
}

