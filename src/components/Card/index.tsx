import React from "react";

type Props = {
    children?: React.ReactNode;
    title: string,
    cardStyle?: string
};

const Card: React.FC<Props> = ({ children, title, cardStyle, ...props }) => {
    let backgroundColor = 'bg-[#fcfcfc]';
    let backgroundOpacity = '';
    let titleTagColor = 'bg-[#cabdff]';
    switch (cardStyle) {
        case 'note':
            backgroundColor = "bg-[#ffbc99]";
            backgroundOpacity = "bg-opacity-25";
            titleTagColor = "bg-[#ffbc99]";
            break;
        case 'b5e4ca':
            titleTagColor = "bg-[#b5e4ca]";
            break;
        case 'ffbc99':
            titleTagColor = "bg-[#ffbc99]";
            break;
        case 'b1e5fc':
            titleTagColor = "bg-[#b1e5fc]";
            break;
        case 'cabdff':
            titleTagColor = "bg-[#cabdff]";
            break;
        default:
            break;
    }
    return (
        <div className={`${backgroundColor} px-6 py-7 rounded-lg mb-2 ${backgroundOpacity}`} {...props}>
            <div className="relative text-xl font-semibold text-[#1a1d1f] mb-6 pl-8">
                <div className={`absolute top-0 left-0 h-full w-4 ${titleTagColor} rounded`}></div>
                <span>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default Card;