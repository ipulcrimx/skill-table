import * as React from 'react';

import ssrIcon from '../assets/icon/Rarity_SSR.png';
import DetailCollumn from './CollumnTable/DetailCollumn';

import './WeaponDetailComponent.css';
import TotalFodderComponent from './CollumnTable/TotalFodderPointComponent';

const WeaponDetailComponent = (props: any) => {
    let weapons: any[] = [...props.weapons];
    let weapon: any;
    let detail: any;
    let totalValue: number = 0;

    if (props.weapons != null) {
        weapon = weapons.map((weap: any, index: number) => {
            return (
                <p key={index + '' + weap.slvl}>
                    <img className="WeaponIcon" src={ssrIcon} alt="SSR icon"/>
                    <b> SSR Fodder </b>
                    level: {weap.slvl}
                </p>
            );
        });

        detail = weapons.map((weap: any, index: number) => {
            return (
                <DetailCollumn 
                    className="WeaponIcon" 
                    weapon={weap} 
                    key={index+ '--'} />
            );
        });
        
        weapons.forEach(weap => {
            totalValue += weap.getFodderValue();
        });
    }

    return (
        <tr>
            <td className="td-skill">
                {weapon}
            </td>
            <td className="td-skill">
                {detail}
            </td>
            <td className="td-skill">
                <TotalFodderComponent
                    value={totalValue}
                    isLowest={false} />
            </td>
        </tr>
    );
}


export default WeaponDetailComponent;