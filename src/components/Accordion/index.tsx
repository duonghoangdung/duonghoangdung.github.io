import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import SVGIcon from "../SVGIcon";

interface Props {
    title: string,
    active?: boolean,
    children?: React.ReactNode;
}

const Accordion: React.FC<Props> = ({title, children, active, ...props }) => {
    const [isActive, setIsActive] = useState(active || false);
	return (
		<div className="border-b border-[#efefef] py-4 mb-2" {...props}>
			<div 
                className="flex items-center text-xl font-semibold text-[#1a1d1f] cursor-pointer" 
                onClick={() => setIsActive(!isActive)}
            >
                <span className="grow">{title}</span>
                <SVGIcon name={ isActive ? 'arrow-down' : 'arrow-right' } w={24} h={24} className="ml-4"/>
            </div>
			{isActive && <div className="px-4 py-6 bg-[#f4f4f4] rounded-lg mt-2">{children}</div>}
		</div>
	);
};

export default Accordion;
