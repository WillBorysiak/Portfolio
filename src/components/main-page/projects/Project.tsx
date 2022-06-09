import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const Project = () => {
	return (
		<article className="relative overflow-hidden  pt-5 pb-5">
			<div className="relative">
				<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
					<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-darkText dark:text-lightText">Project</h2>
								<p className="mt-4 text-lg text-darkText dark:text-lightText">
									This project involved: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quaerat, unde
									esse molestiae qui, cupiditate ea quod, facere quae et suscipit quam! Dolor itaque, accusamus quae
									veritatis optio doloremque minima.
								</p>
								<div className="mt-6 flex gap-x-5">
									{/* Github and Website */}
									<svg
										className="h-10 w-10 fill-darkText dark:fill-lightText"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 496 512"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
									</svg>
									<svg
										className="h-10 w-10 fill-darkText dark:fill-lightText"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM96 160C113.7 160 128 145.7 128 128C128 110.3 113.7 96 96 96C78.33 96 64 110.3 64 128C64 145.7 78.33 160 96 160zM448 128C448 114.7 437.3 104 424 104H184C170.7 104 160 114.7 160 128C160 141.3 170.7 152 184 152H424C437.3 152 448 141.3 448 128z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="mt-8 border-t border-gray-200 pt-6">
							<div>
								<p className="text-base text-darkText dark:text-lightText">
									&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
									donec aliquet. Mi venenatis in euismod ut.&rdquo;
								</p>
							</div>
						</div>
					</div>
					<div className="sm:mt-5 lg:mt-0">
						<div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
							<img
								className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
								src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
								alt="Inbox user interface"
							/>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Project;
