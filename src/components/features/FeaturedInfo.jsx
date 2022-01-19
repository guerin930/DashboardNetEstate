import React from 'react'
import "./featuredInfo.css";
import { ArrowUpward } from "@material-ui/icons" // importation de l'icon "arrow" de la bibliotheque "material"

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className='featuredTitle'>Annonces</span>
                <div className="featuredAnnoncesContainer">
                    <span className="featuredAnnonces"> 1000+ </span>
                    <span className="featuredAnnoncesRate">
                        +10 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Durant le dernier mois</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>Utilisateurs</span>
                <div className="featuredAnnoncesContainer">
                    <span className="featuredAnnonces"> 5000+ </span>
                    <span className="featuredAnnoncesRate">
                        +100 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Durant le dernier mois</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>Avis</span>
                <div className="featuredAnnoncesContainer">
                    <span className="featuredAnnonces"> 10000+ </span>
                    <span className="featuredAnnoncesRate">
                        +100 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Durant le dernier mois</span>
            </div>
        </div>
    )
}

