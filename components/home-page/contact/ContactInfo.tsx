import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/pro-thin-svg-icons';

const ContactInfo = () => {
	return (
		<div className="w-screen pt-12 font-kalam font-extrabold  sm:pt-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-extrabold text-dark dark:text-light sm:text-4xl">
						I am currently looking for a junior web developer job based in the UK.
					</h2>
					<p className="dark:text-v mt-3 text-2xl text-dark dark:text-light sm:mt-4">
						Hybrid or remote working practises are preferred.
					</p>
				</div>
			</div>
			<div className="mt-10 pb-12 sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 " />
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<dl className="rounded-lg  shadow-lg backdrop-brightness-[0.4] dark:backdrop-brightness-[0.2] sm:grid sm:grid-cols-3">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
									<dt className="order-2 mt-2 leading-6">
										<a href="/cv.pdf" target="_blank" rel="noreferrer">
											<FontAwesomeIcon className="text-light dark:text-light" icon={faFileLines} size="3x" />
										</a>
									</dt>
									<dd className="order-1 text-4xl font-extrabold text-wideLightTransition">CV</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
									<dt className="order-2 mt-5 text-2xl font-medium leading-6 text-light dark:text-light">
										Links in the footer
									</dt>
									<dd className="order-1 text-4xl font-extrabold text-wideLightTransition">Socials</dd>
								</div>
								<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
									<dt className="order-2 mt-5 text-2xl font-medium leading-6 text-light dark:text-light">
										will.boz@icloud.com
									</dt>
									<dd className="order-1 text-4xl font-extrabold text-wideLightTransition">Email Me</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
