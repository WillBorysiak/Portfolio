import Image from 'next/image';
import { ProjectTypes as ProjectModel } from '../../../models/project.model';
import ProjectLinks from './ProjectLinks';
import WW2TechStack from './WW2TechStack';

interface ProjectTypes {
	content: { fields: ProjectModel };
}

const WW2EuropeanMap = (props: ProjectTypes) => {
	const content = props.content.fields;
	const { title, description, screenshot } = content;

	return (
		<article className="relative overflow-hidden font-kalam">
			<div className="mb-5 mt-5 rounded-md backdrop-brightness-[0.8] lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pl-8">
				<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
					<div>
						<div className="mt-5">
							<h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:pt-5 md:text-4xl">
								{title}
							</h2>
							<p className="mt-4 text-lg font-bold text-dark dark:text-light md:text-xl">{description}</p>
							<ProjectLinks
								github="https://github.com/WillBorysiak/WW2-European-Map"
								website="https://ww2-european-map.netlify.app/"
							/>
						</div>
					</div>
					<div className="mt-5 border-t border-gray-200">
						<WW2TechStack />
					</div>
				</div>
				<div className="mt-5 sm:mt-5 lg:mt-0">
					<div className="flex flex-col justify-center lg:relative lg:m-0 lg:h-full lg:px-0">
						<div>
							<Image
								src={'https:' + screenshot.fields.file.url}
								alt="Screenshot of the WW2 European Map"
								height={200}
								width={200}
								layout="responsive"
								objectFit="cover"
								priority={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default WW2EuropeanMap;
