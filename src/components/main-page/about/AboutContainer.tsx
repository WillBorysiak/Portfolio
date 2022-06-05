import React from 'react';

interface AboutContainerPropTypes {
	reverse: boolean;
}

const AboutContainer = (props: AboutContainerPropTypes) => {
	return (
		<section className="m-5 overflow-hidden bg-white font-kalam ">
			<div className="relative mx-auto max-w-7xl bg-[url('../../src/assets/images/pexels-rudolf-jakkel-418831.jpg')] px-1 pt-1 pb-1  sm:px-2 lg:px-2 lg:py-2">
				<div
					className={
						props.reverse
							? 'relative p-5 backdrop-blur-sm backdrop-brightness-50 lg:flex lg:flex-row-reverse lg:items-center'
							: 'relative w-full p-5 backdrop-blur-sm backdrop-brightness-50 lg:flex lg:flex-row lg:items-center'
					}
				>
					<div className="hidden lg:block lg:flex-shrink-0">
						<img
							className="xl:h-50 xl:w-50 h-64 w-64 rounded-full"
							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
						/>
					</div>
					<div className="relative lg:ml-10">
						<div className="text-2xl leading-9 text-gray-100">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
								molestiae. Numquam corrupti in laborum sed rerum et corporis.
							</p>
						</div>
						<div className="mt-3">
							<div className="flex justify-center">
								<div className="flex-shrink-0  lg:hidden">
									<img
										className="h-24 w-24 rounded-full"
										src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContainer;
