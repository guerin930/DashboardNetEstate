import React from 'react'
import "./home.css";
import {AnnouncementData, UsersData, FeedbackData } from "../../../BaordData"; //importation des données depuis notre fichier "StatData.js"
//importation des élèments de la page d'accueil 
import FeaturedInfo from '../../features/FeaturedInfo'; // les trois blocs
import Chart from '../../chart/Chart'; // les courbes

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            {/* appel des composants Chart avec le passage des props dynamiquement */}
            <Chart data={AnnouncementData} title="Statistique des annonces" grid dataKey="Announcement"/>
            <Chart data={UsersData} title="Statistique des utilisateurs" grid dataKey="users"/>
            <Chart data={FeedbackData} title="Statistique des avis" grid dataKey="feedback"/>
        </div>
    )
}