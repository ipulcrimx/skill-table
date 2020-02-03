import * as React from 'react';

import ssrIcon from '../assets/icon/Rarity_SSR.png';
import './WeaponDetailComponent.css';

const WeaponDetailComponent = (props: any) => {
    let detail: any;

    if (props.weapons != null) {
        detail = props.weapons.map((weap: any, index: number) => {
            return (
                <p key={index + '' + weap.slvl}>
                    <img className="WeaponIcon" src={ssrIcon} alt="SSR icon"/>
                    <b> SSR Fodder </b>
                    level: {weap.slvl}
                </p>
            );
        });
    }

    return (
        <tr>
            <td>
                {detail}
            </td>
        </tr>
    );
}


export default WeaponDetailComponent;