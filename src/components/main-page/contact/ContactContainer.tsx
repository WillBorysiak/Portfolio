import React from 'react';
import Footer from '../../../layout/Footer';

import ContactInfo from './ContactInfo';
import ContactNav from './ContactNav';
<Footer />;

const ContactContainer = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<ContactInfo />
			<ContactNav />
			<Footer />
		</div>
	);
};

export default ContactContainer;
