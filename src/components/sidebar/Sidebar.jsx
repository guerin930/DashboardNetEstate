import React from 'react'
import "./sidebar.css";
import { Home, Announcement, People, AssignmentInd, LocalOffer, FlashOn, Forum, HomeWork, BarChart, AccountBalance } from "@material-ui/icons";
import Logo from "../../assets/logo final.png";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Tableau de Bord </h3>
                    <ul className='sidebarList'>
                        <Link to="/" className='link'>
                        <li className="sidebarListItem">
                            <Home className='sidebarIcon' />
                            Accueil</li>
                        </Link>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Statistiques</li>
                        <li className="sidebarListItem">
                            <AccountBalance className='sidebarIcon' />
                            Revenus</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Navigation </h3>
                    <ul className='sidebarList'>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <HomeWork className='sidebarIcon' />
                            Type de biens</li>
                        </Link>
                        <Link to="/news" className='link'>
                        <li className="sidebarListItem">
                            <Announcement className='sidebarIcon' />
                            Annonces</li>
                        </Link>
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                            <People className='sidebarIcon' />
                            Utilisateurs</li>
                        </Link>
                        <Link to="providers" className='link'>
                        <li className="sidebarListItem">
                            <AssignmentInd className='sidebarIcon' />
                            Proprietaires</li>
                        </Link>
                        <Link to="/offers" className='link'>
                        <li className="sidebarListItem">
                            <LocalOffer className='sidebarIcon' />
                            Forfaits</li>
                        </Link>
                        <Link to="/boost" className='link'>
                        <li className="sidebarListItem">
                            <FlashOn className='sidebarIcon' />
                            Boostes</li>
                        </Link>
                        <Link to="/feeback" className='link'>
                        <li className="sidebarListItem">
                            <Forum className='sidebarIcon' />
                            Avis</li>
                        </Link>
                    </ul>
                </div>
                <span className='sidebarCopyright'>
                    NetEstate <img src={Logo} alt='logo' className='sidebarLogo' /> © 2021 tous droits reservés
                </span>
            </div>
        </div>
    )
}
