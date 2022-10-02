import React from 'react';

import './ProgressBar.css';

const ProgressBar = (props) => {
	return (
		<React.Fragment>
			<div className="progress-bar">
				<div className="bar-section_1">
					<div
						className="progress-bar__fill-section-1"
						style={{
							width: props.cost + '%',
							maxWidth: '100%',
						}}></div>
				</div>
				<div className="bar-section_2">
					<div
						className="progress-bar__fill-section-2"
						style={{
							width: props.cost - 100 + '%',
							maxWidth: '100%',
						}}></div>
				</div>
				<div className="bar-section_3">
					<div
						className="progress-bar__fill-section-3"
						style={{
							width: props.cost - 200 + '%',
							maxWidth: '100%',
						}}></div>
				</div>
				<div className="bar-section_4">
					<div
						className="progress-bar__fill-section-4"
						style={{
							width: props.cost - 500 + '%',
							maxWidth: '100%',
						}}></div>
				</div>
			</div>
			<div>
				<ul className="marker-list mt-2">
					<li className="marker marker-1" style={{ left: '49%' }}>
						10%
					</li>
					<li className="marker marker-2" style={{ left: '57%' }}>
						15%
					</li>
					<li className="marker marker-3" style={{ left: '65%' }}>
						20%
					</li>
					<li className="marker marker-4" style={{ left: '73%' }}>
						25%
					</li>
				</ul>
			</div>
			<div className="bar-section__footer">
				<div className=""></div>
			</div>
		</React.Fragment>
	);
};

export default ProgressBar;
