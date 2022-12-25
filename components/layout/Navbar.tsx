import { faEarthEurope } from '@fortawesome/pro-duotone-svg-icons';
import { faCloudWord } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const navTitles = [
	{ title: 'Home', href: '#' },
	{ title: 'Projects', href: '#projects' },
	{ title: 'About', href: '#about' },
	{ title: 'Experience', href: '#experience' },
	{ title: 'Contact', href: '#contact' },
];

const Navbar = () => {
	const theme = useContext(ThemeContext);

	return (
		<Menu as="div" className="relative mt-3 inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium">
					{theme.isDark && (
						<FontAwesomeIcon
							className="text-light transition delay-200 duration-1000 ease-in-out hover:scale-125"
							icon={faEarthEurope}
							size="4x"
						/>
					)}
					{!theme.isDark && (
						<FontAwesomeIcon
							className="text-white transition delay-200 duration-1000 ease-in-out hover:scale-125"
							icon={faCloudWord}
							size="4x"
						/>
					)}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-500"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-500"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 h-[400px] w-64 origin-top-right divide-y  rounded-md bg-dark backdrop-brightness-[0.9] dark:bg-light">
					<div className="flex h-full flex-col items-center justify-around">
						<Menu.Item>
							{({ active }) => (
								<Link
									href="#"
									className={classNames(
										active ? 'underline' : '',
										'group flex items-center px-4 py-2 text-4xl text-light dark:text-dark',
									)}
								>
									Home
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href="#projects"
									className={classNames(
										active ? 'underline' : '',
										'group flex items-center px-4 py-2 text-4xl text-light dark:text-dark',
									)}
								>
									Projects
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href="#about"
									className={classNames(
										active ? 'underline' : '',
										'group flex items-center px-4 py-2 text-4xl text-light dark:text-dark',
									)}
								>
									About
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href="#experience"
									className={classNames(
										active ? 'underline' : '',
										'group flex items-center px-4 py-2 text-4xl text-light dark:text-dark',
									)}
								>
									Experience
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href="#contact"
									className={classNames(
										active ? 'underline' : '',
										'group flex items-center px-4 py-2 text-4xl text-light dark:text-dark',
									)}
								>
									Contact
								</Link>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Navbar;
