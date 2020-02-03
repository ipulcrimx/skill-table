import React from 'react';
import srIcon from '../assets/icon/Rarity_SSR.png';
import ssrIcon from '../assets/icon/Rarity_SR.png';

const DetailCollumn = (props: any) => {
    let fodderSSR: string = '';
    let fodderSR: string = '';
    const totalSr = props.weapon.getSRFodder();

    if(props.weapon != null) {
        fodderSSR = 'SSR x' + props.weapon.slvl;
        fodderSR = 'SR x' + totalSr;
    }

    return (
        <p>
            {!!(fodderSSR)? fodderSSR : '' } <br />
            {totalSr > 0 ? fodderSR : '' }
        </p>
    );
}

export default DetailCollumn;