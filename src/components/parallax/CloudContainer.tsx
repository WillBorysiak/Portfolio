import React from 'react';

import Cloud from './Cloud';

const CloudContainer = () => {
	return (
		<>
			<div className="z-0">
				<Cloud size="3x" location="mt-0" speed="animate-floatSM_Slow" />
				<Cloud size="7x" location="mt-60" speed="animate-floatSM_Fast" />
				<Cloud size="5x" location="mt-96" speed="animate-floatSM_Slow" />
				<Cloud size="6x" location="mt-[500px]" speed="animate-floatSM_Med" />
			</div>
		</>
	);
};

export default CloudContainer;
