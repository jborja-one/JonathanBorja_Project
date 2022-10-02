import React from 'react';

import ProgressBar from './ProgressBar';

import './Bundle.css';

const Bundle = (props) => {
	return (
		<div className="container-fluid mb-5">
			<div className="bundle-content">
				<div className="bundle-header text-center my-5">
					<h1>
						Add{' '}
						<span className="text-bold">
							${props.totalPurchase}
						</span>{' '}
						to save{' '}
						<span className="text-bold">{props.discount}%</span>
					</h1>
				</div>
				<div className="bundle-body row">
					<div className="col">
						<div className="bundle bundle-price">
							<h1 className="light-text">Bundle Price</h1>
							<h2 className="text-bold">${props.cost}</h2>
						</div>
					</div>
					<div className="col">
						<div className="bundle bundle-savings text-end">
							<h1 className="light-text">Your Savings</h1>
							<h2 className="text-bold">${props.savings}</h2>
						</div>
					</div>
				</div>
				<div className="bundle-bar py-5">
					<ProgressBar cost={props.cost} />
				</div>
			</div>
		</div>
	);
};

export default Bundle;
