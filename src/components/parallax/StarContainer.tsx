import { useEffect, useState } from 'react';

import DesktopStars from './stars/DesktopStars';
import MobileStars from './stars/MobileStars';
import TabletStars from './stars/TabletStars';

const StarContainer = () => {
	const [device, setDevice] = useState('');

	useEffect(() => {
		const width = window.innerWidth;

		if (width < 640) setDevice('mobile');

		if (width > 641 && width < 1024) setDevice('tablet');

		if (width > 1025) setDevice('desktop');
	}, []);

	return (
		<>
			<div className="z-0">
				{device === 'mobile' && <MobileStars />}
				{device === 'tablet' && <TabletStars />}
				{device === 'desktop' && <DesktopStars />}
			</div>
		</>
	);
};

export default StarContainer;
