import React from 'react';
import './newprovider.css';
import { Publish, AddAPhoto } from '@material-ui/icons';

export default function NewProvider() {
    return (
        <div className='newProvider'>
            <h1 className="newProviderTitle"> Nouveau Propriétaire </h1>
            <form action="" className="newProviderForm">
                <div className="newProviderItem">
                    <label>UserName</label>
                    <input type="text" placeholder='John Wick' className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>First Name</label>
                    <input type="text" placeholder='John' className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>Email</label>
                    <input type="email" placeholder='John@gmail.com' className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>Tel</label>
                    <input type="email" placeholder='John@gmail.com' className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>CNI</label>
                    <input type="email" placeholder='John@gmail.com' className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>Accessibilité</label>
                    <select className='newProviderSelect' id='role' name='role'>
                        <option>Selectionner l'Accessibilité</option>
                        <option value="user">Utilisateur</option>
                        <option value="admin">Administrateur</option>
                    </select>
                </div>
                <div className="newProviderItem">
                    <label>Password</label>
                    <input type="password" className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                    <label>Confirm Password</label>
                    <input type="password" className='newProviderInput' />
                </div>
                <div className="newProviderItem">
                <label>Photo de profil </label>
                    <div className="providerUpdateUpload">
                        <AddAPhoto className="providerUpdateImg" />
                        <label htmlFor='file'><Publish className='providerUpdateIcon' /></label>
                        <input type="file" id='file' style={{ display: "none" }} />
                    </div>
                </div>
                    <button className="newProviderButton">Enregistrer</button>
            </form>
        </div>
    )
}
