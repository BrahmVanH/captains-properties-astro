import * as React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink } from '@components/ui/navigation-menu';
import BrandImage from './BrandImg';
import MobileNavPopover from './MobileNavPopover';

const Nav: React.FC = () => {
	return (
		<nav className='w-full flex justify-between items-center px-7 py-2 text-black bg-white border-b-[5px] border-secondary' aria-label="'Main Navigation">
			<a href='/' className='' aria-label='Home'>
				<BrandImage />
			</a>
			<NavigationMenu className='hidden md:flex list-none [&>*]:ml-2 last:mr-2 text-lg'>
				<NavigationMenuList>
					<NavigationMenuItem>
						<a href='/'> Home </a>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuItem>
					<NavigationMenuTrigger className='bg-transparent text-lg'> Properties </NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 w-[200px]'>
							<li>
								<NavigationMenuLink href='/properties/captains-cottage'> Captain's Cottage </NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink href='/properties/captains-hideaway'> Captain's Hideaway </NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink href='/about'>About</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink href='/blog'>Contact</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenu>
			<MobileNavPopover  />
		</nav>
	);
};

export default Nav;
