import SectionTitle from '../../typography/SectionTitle';
import ContactInfo from './ContactInfo';
import ContactNav from './ContactNav';
import Footer from './Footer';

const Contact = () => {
	return (
		<section id="contact" className=" flex w-screen flex-col bg-daySky bg-cover bg-center dark:bg-nightSky">
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
