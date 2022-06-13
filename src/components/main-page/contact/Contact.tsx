import React from 'react';

import SectionTitle from '../../typography/SectionTitle';

import ContactInfo from './ContactInfo';
import ContactNav from './ContactNav';
import Footer from '../../../layout/Footer';

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex w-screen flex-col bg-[url('../../src/assets/images/DSC04608.jpg')] bg-cover bg-center dark:bg-[url('../../src/assets/images/pexels-pixabay-358528.jpg')]"
		>
			<SectionTitle text="Contact Me" />
			<div className="flex flex-col items-center justify-center">
				<ContactInfo />
				<ContactNav />
				<Footer />
			</div>
		</section>
	);
};

export default Contact;
