import React, { useState } from 'react';
import "./providers.css";
import { PermIdentity, MailOutline, VpnKeyOutlined, Accessibility, PermIdentityTwoTone, PhoneAndroidOutlined, Publish  } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { providersRows } from '../../../BaordData';


export default function Providers() {
    const [data, setData] = useState(providersRows);

    //recuperer l'id du fournisseur selectionner
    /^\/provider\/(\d)$/.exec(window.location.pathname);
    let fid = parseInt(RegExp.$1)-1 ;

    return (
        <div className='provider'>
            <div className="providerTitleContainer">
                <h1 className="providerTitle">Modifier Fournisseur</h1>
                <Link to="/newProvider">
                    <button className='providerAddButton'>Ajouter</button>
                </Link>
            </div>
            <div className="providerContainer">
                <div className='providerShow'>
                    <div className="providerShowTop">
                        <img src="https://thispersondoesnotexist.com/image" alt="" className="providerShowImg" />
                        <div className="providerShowTopTitle">
                            <span className="providerShowUsername">{data[fid].username}</span>
                            <span className="providerShowUserTitle">Proprietaire</span>
                        </div>
                    </div>
                    <div className="providerShowButton">
                        <span className="providerShowTitle">Afficher Details</span>
                        <div className="providerShowInfo">
                            <PermIdentity className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].firstName} </span>
                        </div>
                        <div className="providerShowInfo">
                            <MailOutline className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].email}</span>
                        </div>
                        <div className="providerShowInfo">
                            <VpnKeyOutlined className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].password}</span>
                        </div>
                        <div className="providerShowInfo">
                            <PhoneAndroidOutlined className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].tel}</span>
                        </div>
                        <div className="providerShowInfo">
                            <PermIdentityTwoTone  className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].cni}</span>
                        </div>
                        <div className="providerShowInfo">
                            <Accessibility className='providerShowIcon' />
                            <span className="providerShowInfoTitle">{data[fid].role}</span>
                        </div>
                    </div>
                </div>
                <div className='providerUpdate'>
                    <div className="providerUpdateTitle">Modifier</div>
                    <form action="" className="providerUpdateForm">
                        <div className="providerUpdateLeft">
                            <div className="providerUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder={data[fid].username} className="providerUpdateInput" autoComplete='username'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>first Name</label>
                                <input type="text" placeholder={data[fid].firstName} className="providerUpdateInput" autoComplete='username'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder={data[fid].email} className="providerUpdateInput" autoComplete='email'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>Ancien Password</label>
                                <input type="password" className="providerUpdateInput" autoComplete='current-password'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>Nouveau Password</label>
                                <input type="password" className="providerUpdateInput" autoComplete='new-password'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>Confirmer le Password</label>
                                <input type="password" className="providerUpdateInput" autoComplete='confirm-password'/>
                            </div>
                            <div className="providerUpdateItem">
                                <label>Accessibilité</label>
                                <select className='providerUpdateInput' id='role' name='role' value={data[fid].role}>
                                    <option>Selectionner l'Accessibilité</option>
                                    <option value="user">Utilisateur</option>
                                    <option value="admin">Administrateur</option>
                                </select>
                            </div>
                        </div>
                        <div className="providerUpdateRight">
                            <div className="providerUpdateUpload">
                                <img src="https://thispersondoesnotexist.com/image" alt="" className="providerUpdateImg" />
                                <label htmlFor='file'><Publish className='providerUpdateIcon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="providerUpdateButton">Mettre a jour</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
