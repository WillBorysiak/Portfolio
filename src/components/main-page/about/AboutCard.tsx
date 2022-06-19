import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

interface AboutContainerPropTypes {
	reverse: boolean;
	content: string;
	image: any;
}

const AboutCard = (props: AboutContainerPropTypes) => {
	return (
		<section className="mx-5 mt-5 overflow-hidden font-kalam">
			<div className="relative mx-auto max-w-7xl text-center sm:px-2 lg:px-2 lg:py-2">
				<div
					className={
						props.reverse
							? 'relative w-full flex-row-reverse rounded-md p-5 backdrop-brightness-[0.8]  lg:flex lg:flex-row-reverse lg:items-center '
							: 'relative w-full rounded-md p-5  backdrop-brightness-[0.8] lg:flex lg:flex-row lg:items-center'
					}
				>
					<div className="hidden lg:block lg:flex-shrink-0">
						<GatsbyImage className="xl:h-50 xl:w-50 h-64 w-64 rounded-full bg-top" image={props.image} alt="" />
					</div>
					<div className="relative lg:ml-10">
						<div className="text-2xl font-bold leading-9 text-dark dark:text-light lg:pr-3">
							<p>{props.content}</p>
						</div>
						<div className="mt-3">
							<div className="flex justify-center">
								<div className="flex-shrink-0  lg:hidden">
									<GatsbyImage className="xl:h-50 xl:w-50 h-64 w-64 rounded-full" image={props.image} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutCard;
