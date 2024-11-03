import { Popover, PopoverTrigger, PopoverContent } from '@components/ui/popover';
import { Menu } from 'lucide-react';

const MobileNavPopover: React.FC = () => {
	return (
		<div className='md:hidden'>
			<Popover
			// className='md:hidden flex items-center flex-col m-auto w-full bg-primary text-white border border-transparent rounded-br-sm rounded-bl-sm [&>li]:mt-2 last:mb-2 [&>li]:mx-1'
			>
				<PopoverTrigger asChild>
					<Menu className='h-6 w-6' />
				</PopoverTrigger>
				<PopoverContent className='md:hidden flex items-center flex-col m-auto w-full bg-primary text-white text-lg border border-transparent rounded-br-sm rounded-bl-sm [&>li]:mt-2 last:mb-2 [&>li]:mx-1'>
					<ul aria-haspopup='true' aria-expanded='false'>
						<li>
							<a href='/' aria-label='Home'>
								Home
							</a>
						</li>
						<li>
							<a href='/properties' aria-label='Properties'>
								Properties
							</a>
						</li>
						<li>
							<a href='/about' aria-label='About'>
								About
							</a>
						</li>
						<li>
							<a href='/blog' aria-label='Contact'>
								Contact
							</a>
						</li>
					</ul>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default MobileNavPopover;
