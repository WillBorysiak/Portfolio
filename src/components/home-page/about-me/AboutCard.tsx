import { motion } from 'framer-motion';
import Image from 'next/image';

import { About } from '../../../models/about.model';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';

const AboutCard = (props: { content: About }) => {
	const about = props.content.fields;
	const { content, reverse, image, imageAlt } = about;

	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative overflow-hidden font-kalam"
		>
			<div className="relative mx-auto max-w-7xl py-5 text-center sm:px-2 lg:px-2 lg:py-5">
				<div
					className={
						reverse
							? 'relative w-full flex-row-reverse rounded-sm bg-transparentBg p-5  md:flex md:flex-row-reverse md:items-center'
							: 'relative w-full rounded-sm bg-transparentBg p-5 md:flex md:flex-row md:items-center'
					}
				>
					{/* large image */}
					<div className="hidden w-1/3 md:block md:flex-shrink-0">
						<div>
							<Image
								src={'https:' + image.fields.file.url}
								alt={imageAlt}
								height={550}
								width={550}
								quality={100}
								priority={true}
							/>
						</div>
					</div>

					<div className="relative lg:ml-10">
						<div className="text-xl font-bold leading-9 text-dark dark:text-light lg:text-2xl">
							<p className={reverse ? 'md:pr-5' : 'md:pl-5'}>{content}</p>
						</div>

						{/* small image */}
						<div className="mt-3">
							<div className="flex justify-center">
								<div className="w-3/5 flex-shrink-0 md:hidden md:w-1/2">
									<Image
										src={'https:' + image.fields.file.url}
										alt={imageAlt}
										height={550}
										width={550}
										quality={100}
										priority={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.article>
	);
};

export default AboutCard;
