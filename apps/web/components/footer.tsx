import Link from 'next/link';
import footer from '@/data/footer-data.json';
import { BrandTwitter, BrandFacebook, BrandLinkedin, BrandYoutube } from 'tabler-icons-react';

const Footer = () => {
	return (
		<footer className="py-8 px-4">
			<div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8">
				{Object.entries(footer).map(([sectionTitle, links]) => (
					<div key={sectionTitle} className="min-w-[150px]">
						<h4 className="text-base font-semibold mb-3">{sectionTitle}</h4>
						<ul className="space-y-2">
							{links.map((link) => {
								const isExternal = link.url.startsWith('http');
								return (
									<li key={link.name} className="flex items-center space-x-2">
										{isExternal ? (
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="supametrics-link flex items-center space-x-2"
											>
												{/* Check if it's a social link */}
												{link.name === 'Twitter' && <BrandTwitter size={18} />}
												{link.name === 'Facebook' && <BrandFacebook size={18} />}
												{link.name === 'LinkedIn' && <BrandLinkedin size={18} />}
												{link.name === 'YouTube' && <BrandYoutube size={18} />}
												<span>{link.name}</span>
											</a>
										) : (
											<Link href={link.url} className="supametrics-link flex items-center space-x-2">
												{/* Check if it's a social link */}
												{link.name === 'Twitter' && <BrandTwitter size={18} />}
												{link.name === 'Facebook' && <BrandFacebook size={18} />}
												{link.name === 'LinkedIn' && <BrandLinkedin size={18} />}
												{link.name === 'YouTube' && <BrandYoutube size={18} />}
												<span>{link.name}</span>
											</Link>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
