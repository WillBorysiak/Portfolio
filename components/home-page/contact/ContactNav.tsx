import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/pro-duotone-svg-icons';

const ContactNav = () => {
	return (
		<>
			<a href="#home">
				<FontAwesomeIcon
					icon={faCircleArrowUp}
					size="4x"
					className="mt-10 mb-10 animate-bounce text-light dark:text-light"
				/>
			</a>
		</>
	);
};

export default ContactNav;
