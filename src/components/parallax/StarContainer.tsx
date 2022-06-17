import React from 'react';

import MobileStars from './stars/MobileStars';
import TabletStars from './stars/TabletStars';
import DesktopStars from './stars/DesktopStars';

const StarContainer = () => {
	const device = {
		mobile: false,
		tablet: false,
		desktop: false,
	};

	const windowGlobal = typeof window !== 'undefined' && window.innerWidth;

	const width = windowGlobal;

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
				{device.mobile && <MobileStars />}
				{device.tablet && <TabletStars />}
				{device.desktop && <DesktopStars />}
			</div>
		</>
	);
};

export default StarContainer;
