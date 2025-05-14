import Link from 'next/link';
import { Badge } from './hero-badge';

export const Hero = () => {
	return (
		<div className="h-[50rem] w-full flex_center">
			<div className="w-[80%] md:w-[68%] ">
				<div className="flex justify-center">
					<Badge text="Introducing Public Beta" />
				</div>
				<div className="text-center px-8 text-neutral-500 dark:text-neutral-400 md:px-0">
					<h1 className="md:px-12 tracking-[-1px] text-4xl sm:text-5xl font-bold text-black dark:text-white">
						Open-source analytics that put <span className="text-main">*you*</span> in control
					</h1>
					<p className="text-base font-medium z-20 md:text-[1.3rem] mt-8 leading-[1.4rem] md:leading-[2.2rem] px-3 md:px-0 text-black dark:text-white">
						A lightweight, privacy-first alternative to Google Analytics — built for self-hosting, GDPR compliance, and
						full data ownership. No cookies, less than 2kb, just insights.
					</p>
					<div className="mt-9 font-medium flex_center gap-2">
						<Link
							href="/signup"
							className="z-20 text-[0.88rem] md:text-[0.96rem] px-6 md:px-7 py-2 md:py-3 bg-black dark:bg-white text-white dark:text-black rounded-3xl hover:bg-neutral-300 dark:hover:bg-neutral-200"
						>
							Start Now
						</Link>
						<Link
							href="/docs"
							className="z-20 text-[0.88rem] md:text-[0.96rem] px-6 md:px-7 py-2 md:py-3 bg-white border text-black dark:bg-black text-400 rounded-3xl dark:text-zinc-500 dark:border-neutral-800 hover:bg-neutral-500 dark:hover:bg-neutral-900"
						>
							Documentation
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
