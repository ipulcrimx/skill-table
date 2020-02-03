import React from 'react';

const TotalFodderComponent = (props: any) => {
    const lowestValueStyle = {
        backgroundColor: 'white'
    }

    if(props.isLowest) {
        lowestValueStyle.backgroundColor = 'salmon';
    }

    return (
        <div style={lowestValueStyle}>
            <p>{props.value}</p>
        </div>
    );

}

export default TotalFodderComponent;