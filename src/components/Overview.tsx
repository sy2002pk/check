import React, { useEffect, useState } from 'react';
import bgr from '../assets/images/overview/bgr.png';
import header from '../assets/images/overview/header.png';
import navigation_icon from '../assets/images/navigation_icon.png';
const Overview = () => {
	const [isVisible, setVisible] = useState(false);

	return (
		<>
			<div className={` max-w-dvw max-h-screen overflow-hidden `}>
				<img
					className='blur-md scale-[1.3] brightness-90 z-0'
					src={bgr}
					alt=''
				/>
				<img
					className='z-1 absolute scale-[0.8] top-4  -left-10'
					src={header}
					alt=''
				/>
				<div
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
					className='flex justify-center'
				>
					<img
						className={`z-10  transition-opacity duration-500 ease-in-out  absolute animate-reverse-bounce -scale-y-1 shadow-sm top-6 hover:brightness-150
                            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
						src={navigation_icon}
						alt=''
					/>
				</div>
				<div
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
					className='flex justify-center '
				>
					<img
						className={`z-10 transition-opacity duration-500 ease-in-out  absolute shadow-sm motion-safe:animate-bounce bottom-4
                            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
						src={navigation_icon}
						alt=''
					/>
				</div>
			</div>
		</>
	);
};

export default Overview;
