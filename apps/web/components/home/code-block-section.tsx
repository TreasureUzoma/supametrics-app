import { SectionHeader } from '../section-header';

export const CodeSample = () => {
	return (
		<section className="my-13 flex_center">
			<div className="fixed_width">
				<SectionHeader words="Simple to Implement, Powerful to Use" />
				<p className="text-sm md:text-[1.28rem] text-center mb-7 mt-2 text-neutral-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold text-center">
					Get your site analytics running in mintes with just a few lines of code.
				</p>
				<div></div>
			</div>
		</section>
	);
};
