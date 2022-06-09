import React from 'react';

import SectionTitle from '../../typography/SectionTitle';
import ContactContainer from './ContactContainer';

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex w-screen flex-col bg-[url('../../src/assets/images/DSC04608.jpg')] bg-cover bg-center dark:bg-[url('../../src/assets/images/pexels-pixabay-358528.jpg')]"
		>
			<SectionTitle text="Contact" />
			<ContactContainer />
		</section>
	);
};

export default Contact;
