import * as React from 'react';
import { Card, CardContent } from '@components/ui/card';

import type { PropertyCardProps } from '@types';

function PropertyCard({ property }: PropertyCardProps) {
	// const [responsiveImageStyle, setResponsiveImageStyle] = useState({
	// 	maxHeight: '300px',
	// 	maxWidth: '400px',
	// 	margin: '1rem',
	// });

	// const isMediumViewport = () => {
	// 	return window.innerWidth < 766;
	// };
	// useEffect(() => {
	// 	const medium = isMediumViewport();

	// 	medium ? setResponsiveImageStyle({ width: '100%', padding: '0.5rem' }) : setResponsiveImageStyle({ maxHeight: '300px', maxWidth: '400px', margin: '1rem' });
	// }, []);

	return (
		<Card className='text-center lg:w-2/3 md:w-5/6 w-[90%] flex md:flex-row flex-col-reverse justify-between items-center rental-card card'>
			<CardContent className='flex flex-col justify-center items-center [&>*]:mt-4 last:mb-4'>
				<div className='heading-border-bottom'>
					<h3 className='mb-2'>{property.title}</h3>
				</div>
				<p className='w-3/4 font-medium'>{property.description}</p>
				<div className='w-3/4 mt-2'>
					<a href={property.urlEndpoint} className='p-2 bg-primary font-white hover:opacity-90'>
						Info and Booking
					</a>
				</div>
			</CardContent>
			<img alt='captains hideaway house from the beach' src={property.imgUrl} className='rounded-lg self-center lg:self-start sm-w-5/6 w-full p-2  max-w-[400px] md:max-h-[300px] md:m-4' />
		</Card>
	);
}

export default PropertyCard;
