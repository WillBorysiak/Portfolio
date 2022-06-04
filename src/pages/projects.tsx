import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout/Layout';
import ThemeToggle from '../components/utils/ThemeToggle';

const HomePage = () => {
	return (
		<Layout>
			<div className="flex h-screen w-screen flex-col items-center justify-center bg-sky-300 dark:bg-slate-700">
				<h2 className="p-5 text-9xl text-black dark:text-white">Projects</h2>
				<ThemeToggle />
				<Link to="/">
					<button
						type="button"
						className="text-blackhover:bg-indigo-200 mb-5 inline-flex items-center rounded-md border border-transparent bg-gray-100 px-6 py-3 text-base font-medium "
					>
						Change Page
					</button>
				</Link>
			</div>
		</Layout>
	);
};

export default HomePage;
