import React, { useState, useEffect } from 'react';

const Clock = () => {
	const [currentTime, setCurrentTime] = useState(new Date());
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};
	useEffect(() => {
		const intervalID = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalID);
	}, []);

	return <span>{currentTime.toLocaleString('en-US', options)}</span>;
};

export default Clock;
