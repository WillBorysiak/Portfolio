import React from 'react';
import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { DuplicateIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudFog } from '@fortawesome/pro-duotone-svg-icons';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Menu as="div" className="relative mt-3 inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium      ">
					<FontAwesomeIcon className="text-lightText" icon={faCloudFog} size="4x" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-1000"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-1000"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'group flex items-center px-4 py-2 text-sm',
									)}
								>
									<DuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
									Home
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'group flex items-center px-4 py-2 text-sm',
									)}
								>
									<DuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
									Projects
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'group flex items-center px-4 py-2 text-sm',
									)}
								>
									<DuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
									About
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'group flex items-center px-4 py-2 text-sm',
									)}
								>
									<DuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
									Skills
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'group flex items-center px-4 py-2 text-sm',
									)}
								>
									<DuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
									Contact
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
