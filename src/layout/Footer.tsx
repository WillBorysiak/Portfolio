import React from 'react';
import FooterLinks from '../components/main-page/contact/FooterLinks';

const Footer = () => {
	return (
		<footer className="w-screen bg-lightText font-kalam font-extrabold dark:bg-darkText">
			<div className=" max-w-full py-5 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					<FooterLinks />
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-bold text-center text-lg text-darkText dark:text-lightText">
						&copy; Will Borysiak - 2022. All rights reserved.
					</p>
					<p className="text-center text-lg text-darkText dark:text-lightText">
						Powered by{' '}
						<a href="https://www.gatsbyjs.com/" target="_blank">
							<span className="text-purple-700">Gatsby</span>
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;