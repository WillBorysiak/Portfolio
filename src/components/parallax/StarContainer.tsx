import React from 'react';

import Star from './Star';

const StarContainer = () => {
	return (
		<>
			<div className="z-0">
				<Star size="1x" location="mt-0" speed="animate-floatSM_Slow" />
				<Star size="1x" location="mt-60" speed="animate-floatSM_Fast" />
				<Star size="1x" location="mt-96" speed="animate-floatSM_Slow" />
				<Star size="1x" location="mt-[500px]" speed="animate-floatSM_Slow" />
				<Star size="1x" location="mt-[600px]" speed="animate-floatSM_Slow" />
				<Star size="1x" location="mt-[750px]" speed="animate-floatSM_Slow" />
				<Star size="1x" location="mt-[800px]" speed="animate-floatSM_Slow" />
			</div>
		</>
	);
};

export default StarContainer;
