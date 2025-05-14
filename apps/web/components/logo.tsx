import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link className="flex_center gap-1" href="/">
			<Image src="/logo.png" width={23} height={23} alt="Analytix Logo" className="dark:invert" />
			<span className="font-bold text-[22px] text-black dark:text-white">Supametrics</span>
		</Link>
	);
};

export default Logo;
