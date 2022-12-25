import { faCircleArrowUp } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ContactNav = () => {
	return (
		<>
			<Link href="#home">
				<FontAwesomeIcon
					icon={faCircleArrowUp}
					size="4x"
					className="mt-10 mb-10 animate-bounce text-light dark:text-light"
				/>
			</Link>
		</>
	);
};

export default ContactNav;
