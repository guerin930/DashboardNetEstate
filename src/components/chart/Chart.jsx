import React from 'react';
import "./chart.css"; //importation du fichier css dans notre composant "Chart"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // import de la bibliotheque "recharts" pour les courbes


export default function Chart({title, data, dataKey, grid}) {
   //utilisation de la bibliotheque recharts avec passage des données via les props "title", "data", "datakey", 
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
            <LineChart data={data}>
                <XAxis dataKey={"name"} />
                <Line type="monotone" dataKey={dataKey}/>
                <Tooltip />
               {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
