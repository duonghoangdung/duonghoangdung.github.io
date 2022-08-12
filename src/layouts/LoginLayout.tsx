import React, { useEffect } from 'react';

interface Props {
	children?: React.ReactNode;
	title?: string;
	className?: string
}

const LoginLayout: React.FC<Props> = ({ children, title, className,...props }) => {
	useEffect(() => {
		document.title = title || '';
	}, [title]);

	return (
		<div className={`w-full h-full ${className || ''}`} {...props}>
			{children}
		</div>
	);
};
export default LoginLayout;
