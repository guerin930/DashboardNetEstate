import React, { useState } from 'react';
import "./user.css";
import { PermIdentity, MailOutline, VpnKeyOutlined, Accessibility, Publish } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { usersRows } from '../../../BaordData';

export default function User() {
    const [data, setData] = useState(usersRows);

    //recuperer l'id de l'utilisateur selectionner
    /^\/user\/(\d)$/.exec(window.location.pathname);
    let uid = parseInt(RegExp.$1)-1 ;

    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Modifier Utilisateur</h1>
                <Link to="/newUser">
                    <button className='userAddButton'>Ajouter</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className="userShowTop">
                        <img src="https://thispersondoesnotexist.com/image" alt="" className="userShowImg" />

                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{data[uid].firstName}</span>
                            <span className="userShowUserTitle">Locataire</span>
                        </div>
                    </div>
                    <div className="userShowButton">
                        <span className="userShowTitle">Afficher Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">{data[uid].firstName} </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">{data[uid].email}</span>
                        </div>
                        <div className="userShowInfo">
                            <VpnKeyOutlined className='userShowIcon' />
                            <span className="userShowInfoTitle">{data[uid].password}</span>
                        </div>
                        <div className="userShowInfo">
                            <Accessibility className='userShowIcon' />
                            <span className="userShowInfoTitle">{data[uid].role}</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <div className="userUpdateTitle">Modifier</div>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder={data[uid].firstName} className="userUpdateInput" autoComplete='username'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder={data[uid].email} className="userUpdateInput" autoComplete='email'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Ancien Password</label>
                                <input type="password" className="userUpdateInput" autoComplete='current-password'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Nouveau Password</label>
                                <input type="password" className="userUpdateInput" autoComplete='new-password'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Confirmer le Password</label>
                                <input type="password" className="userUpdateInput" autoComplete='confirm-password'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Accessibilité</label>
                                <select className='userUpdateInput' id='role' name='role' value={data[uid].role}>
                                    <option>Selectionner l'Accessibilité</option>
                                    <option value="user">Utilisateur</option>
                                    <option value="admin">Administrateur</option>
                                </select>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://thispersondoesnotexist.com/image" alt="" className="userUpdateImg" />
                                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Mettre a jour</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
