import React from 'react';

import Cloud from './Cloud';

const MiddleCloudDiv = () => {
	return (
		<>
			{/* Mobile Cloud */}
			<div className="z-0 md:hidden">
				<Cloud size="6x" location="10" speed="animate-floatSM_Med" />
			</div>
			{/* Desktop Cloud */}
			<div className="z-0 hidden md:block">
				<Cloud size="10x" location="10" speed="animate-floatLG_Slow" />
			</div>
		</>
	);
};

export default MiddleCloudDiv;
