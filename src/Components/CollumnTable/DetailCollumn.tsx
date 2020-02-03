import React from 'react';

import srIcon from '../../assets/icon/Rarity_SR.png';
import ssrIcon from '../../assets/icon/Rarity_SSR.png';

import '../WeaponDetailComponent.css';

const DetailCollumn = (props: any) => {
    const srStyle = {
        opacity: 1
    }

    let fodderSSR: string = '';
    let fodderSR: string = '';
    const totalSr = props.weapon.getSRFodder();

    if(props.weapon != null) {
        fodderSSR = ' SSR x' + 1;
        fodderSR = ' SR x' + totalSr;
    }

    srStyle.opacity = totalSr > 0 ? 1 : 0;

    return (
        <p>
            <img className="WeaponIcon" src={ssrIcon} alt="SSR icon" /> 
            {!!(fodderSSR)? fodderSSR : '' } <br />

            <img className="WeaponIcon" src={srIcon} style={srStyle} alt="SR icon" /> 
            {totalSr > 0 ? fodderSR : '' }
        </p>
    );
}

export default DetailCollumn;