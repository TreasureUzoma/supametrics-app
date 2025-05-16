/* import { ModeToggle } from '@/components/mode-toggle';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';
import { cn } from '@workspace/ui/lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

*/

import { Hero } from '@/components/hero';
import { PrivacyFeatures } from '@/components/home/privacy-section';
import { CodeSample } from '@/components/home/code-block-section';

export default function Home() {
	return (
		<>
			<Hero />
			<PrivacyFeatures />
			<CodeSample />
		</>
	);
}
