import React from 'react';
import Sprites from '../assets/icons/sprites.svg';

interface Props {
    name: string,
    w: number,
    h:number,
    className?: string
}

const SVGIcon:React.FC<Props> = ({name, w, h, className,...props}) => {
    return (
        <i className={`inline-block ${className || ''}`} {...props}>
            <svg width={`${w}`} height={`${h}`}>
              <use xlinkHref={`${Sprites}#${name}`} />
            </svg>
        </i>
    );
}
export default SVGIcon;