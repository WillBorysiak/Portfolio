import React from 'react';
import { Link } from 'gatsby';

const Project = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-sky-300 dark:bg-slate-700">
			<h2 className="pb-5 text-9xl text-black dark:text-white">Projects</h2>
			<Link to="/">
				<button
					type="button"
					className="text-blackhover:bg-indigo-200 mt-5 inline-flex items-center rounded-md border border-transparent bg-gray-100 px-6 py-3 text-base font-medium "
				>
					Change Page
				</button>
			</Link>
		</div>
	);
};

export default Project;
