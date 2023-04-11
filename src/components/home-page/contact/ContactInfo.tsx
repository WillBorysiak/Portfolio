import { faFileLines } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ContactInfo = () => {
	return (
		<div className="w-screen pt-12 font-kalam font-extrabold sm:pt-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-extrabold text-dark dark:text-light sm:text-4xl">
						I&lsquo;m currently employed as junior software developer in the UK.
					</h2>
					<p className="dark:text-v mt-3 text-2xl text-dark dark:text-light sm:mt-4">
						Feel free to browse my site and see the self taught projects I&lsquo;ve made.
					</p>
				</div>
			</div>
			<div className="mt-10 pb-12 sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 " />
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<dl className="rounded-lg bg-black/[.75] shadow-lg dark:bg-black/[.5] sm:grid sm:grid-cols-2">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
									<dt className="order-2 mt-2 leading-6">
										<Link href="/cv.pdf" target="_blank" rel="noreferrer">
											<FontAwesomeIcon className="text-light dark:text-light" icon={faFileLines} size="3x" />
										</Link>
									</dt>
									<dd className="order-1 text-4xl font-extrabold text-wideLightTransition">CV</dd>
								</div>
								<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
									<dt className="order-2 mt-5 text-2xl font-medium leading-6 text-light dark:text-light">
										Links in the footer
									</dt>
									<dd className="order-1 text-4xl font-extrabold text-wideLightTransition">Socials</dd>
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
