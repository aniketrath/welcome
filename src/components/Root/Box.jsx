import React from 'react';

export default function Box({ children, className = '', horizontal = false, onClick , onMouseEnter, onMouseLeave, id=''}) {
	if (horizontal) {
		return <div id={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={`flex flex-row ${className}`}>{children}</div>;
	}

	return <div id={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={`flex flex-col ${className}`}>{children}</div>;
}
