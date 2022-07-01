import Image from 'next/image';
import { AboutTypes as AboutCardModel } from '../../../models/about.model';

interface AboutCardTypes {
	content: AboutCardModel;
}

const AboutCard = (props: AboutCardTypes) => {
	const { content, reverse, image, imageAlt } = props.content;

	return (
		<section className="mx-5 mt-5 overflow-hidden font-kalam">
			<div className="relative mx-auto max-w-7xl text-center sm:px-2 lg:px-2 lg:py-2">
				<div
					className={
						reverse
							? 'relative w-full flex-row-reverse rounded-md p-5 backdrop-brightness-[0.8]  md:flex md:flex-row-reverse md:items-center'
							: 'relative w-full rounded-md p-5 backdrop-brightness-[0.8] md:flex md:flex-row md:items-center'
					}
				>
					{/* Tablet/Desktop */}
					<div className="hidden w-1/3 md:block md:flex-shrink-0">
						<div>
							<Image
								src={'https:' + image.fields.file.url}
								alt={imageAlt}
								height={200}
								width={200}
								layout="responsive"
								objectFit="cover"
							/>
						</div>
					</div>
					<div className="relative lg:ml-10">
						<div className="text-xl font-bold leading-9 text-dark dark:text-light lg:text-2xl">
							<p className={reverse ? 'md:pr-5' : 'md:pl-5'}>{content}</p>
						</div>
						{/* Small */}
						<div className="mt-3">
							<div className="flex justify-center">
								<div className="w-3/5 flex-shrink-0 md:hidden md:w-1/2">
									<Image
										src={'https:' + image.fields.file.url}
										alt={imageAlt}
										height={200}
										width={200}
										layout="responsive"
										objectFit="cover"
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

export default AboutCard;
