import React from 'react';

import MobileClouds from './Clouds/MobileClouds';
import TabletClouds from './Clouds/TabletClouds';
import DesktopClouds from './Clouds/DesktopClouds';

const CloudContainer = () => {
	const device = {
		mobile: false,
		tablet: false,
		desktop: false,
	};
	const width = window.innerWidth;

	if (width < 640) {
		device.mobile = true;
	}
	if (width > 641 && width < 1024) {
		device.tablet = true;
	}
	if (width > 1025) {
		device.desktop = true;
	}

	return (
		<>
			<div className="z-0">
				{device.mobile && <MobileClouds />}
				{device.tablet && <TabletClouds />}
				{device.desktop && <DesktopClouds />}
			</div>
		</>
	);
};

export default CloudContainer;
