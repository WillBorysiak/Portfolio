import { useState, useEffect } from 'react';

import MobileClouds from './clouds/MobileClouds';
import TabletClouds from './clouds/TabletClouds';
import DesktopClouds from './clouds/DesktopClouds';

const CloudContainer = () => {
	const [device, setDevice] = useState('');

	useEffect(() => {
		const width = window.innerWidth;

		if (width < 640) {
			setDevice('mobile');
		}
		if (width > 641 && width < 1024) {
			setDevice('tablet');
		}
		if (width > 1025) {
			setDevice('desktop');
		}
	}, []);

	return (
		<>
			<div className="z-0">
				{device === 'mobile' && <MobileClouds />}
				{device === 'tablet' && <TabletClouds />}
				{device === 'desktop' && <DesktopClouds />}
			</div>
		</>
	);
};

export default CloudContainer;
