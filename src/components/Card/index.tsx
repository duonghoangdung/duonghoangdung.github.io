import React from "react";

type Props = {
    children?: React.ReactNode;
    className?: string
    title?: string,
    backgroundColor?: string,
    titleTagColor?: string,
} & typeof defaultProps

const defaultProps = {
    title: 'Card title',
    backgroundColor: '#232332',
    titleTagColor: '#2323232',
};

const Card: React.FC<Props> = ({ children, title, backgroundColor, titleTagColor, ...props }) => {
    return (
        <div className={`bg-[${backgroundColor}] px-6 py-7 rounded-lg mb-6`} {...props}>
            <div className="relative text-xl font-semibold text-[#1a1d1f] mb-6 pl-8">
                <div className={`absolute top-0 left-0 h-full w-4 bg-[${titleTagColor}] rounded`}></div>
                <span>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default Card;