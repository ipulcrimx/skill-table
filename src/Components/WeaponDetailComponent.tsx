import * as React from 'react';

import ssrIcon from '../assets/icon/Rarity_SSR.png';
import './WeaponDetailComponent.css';
import DetailCollumn from './CollumnTable/DetailCollumn';

const WeaponDetailComponent = (props: any) => {
    let weapons: any[] = [...props.weapons];
    let weapon: any;
    let detail: any;

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
                0
            </td>
        </tr>
    );
}


export default WeaponDetailComponent;