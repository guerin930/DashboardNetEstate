import React from 'react';
import "./newUser.css";
import { AddAPhoto, Publish } from '@material-ui/icons';

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">Nouvel Utilisateur</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder='John Wick' className='newUserInput' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='John@gmail.com' className='newUserInput' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" className='newUserInput' />
                </div>
                <div className="newUserItem">
                    <label>Confirm Password</label>
                    <input type="password" className='newUserInput' />
                </div>
                <div className="newUserItem">
                    <label>Accessibilité</label>
                    <select className='newUserSelect' id='role' name='role'>
                        <option>Selectionner l'Accessibilité</option>
                        <option value="user">Utilisateur</option>
                        <option value="admin">Administrateur</option>
                    </select>
                </div>
                <div className="newUserItem">
                <label>Photo de profil</label>
                    <div className="userUpdateUpload">
                        <AddAPhoto className="userUpdateImg" />
                        <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                        <input type="file" id='file' style={{ display: "none" }} />
                    </div>
                </div>
                <button className="newUserButton">Enregistrer</button>
            </form>
        </div>
    )
}
