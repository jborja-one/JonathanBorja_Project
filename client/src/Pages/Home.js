import React from 'react';

import Card from '../Components/Card';
import Bundle from '../Components/Bundle';
import './Home.css';

const products = [
	{
		id: 1,
		name: 'Probiotic Gel Cream',
		price: 40,
		rating: 5,
		reviews: 7,
		image: 'https://jborja-bucket.s3.us-west-1.amazonaws.com/Interview-Project/img-1.png',
	},
	{
		id: 2,
		name: 'Creamy Foam Cleanser',
		price: 32,
		rating: 5,
		reviews: 146,
		image: 'https://jborja-bucket.s3.us-west-1.amazonaws.com/Interview-Project/img-2.png',
	},
	{
		id: 3,
		name: 'Volume Mascara',
		price: 22,
		rating: 5,
		reviews: 25,
		image: 'https://jborja-bucket.s3.us-west-1.amazonaws.com/Interview-Project/img-3.png',
	},
	{
		id: 4,
		name: 'Cleansing Balm',
		price: 38,
		rating: 5,
		reviews: 184,
		image: 'https://jborja-bucket.s3.us-west-1.amazonaws.com/Interview-Project/img-4.png',
	},
];

const Home = () => {
	let [total, setTotal] = React.useState(0);
	let [savings, setSavings] = React.useState(0);
	let [discount, setDiscount] = React.useState(10);
	let [totalToPurchase, setTotalToPurchase] = React.useState(100);

	const handlePriceAdd = (price) => {
		setTotal((total += price));

		switch (true) {
			case total < 100:
				return savings;
			case total >= 100 && total < 300:
				setSavings((total * (discount / 100)).toFixed(2));
				setDiscount((discount = 15));
				setTotalToPurchase((totalToPurchase = 300));
				break;
			case total >= 300 && total < 500:
				setSavings((total * (discount / 100)).toFixed(2));
				setTotalToPurchase((totalToPurchase = 500));
				setDiscount((discount = 20));
				break;
			case total >= 500 && total < 1000:
				setSavings((total * (discount / 100)).toFixed(2));
				setDiscount((discount = 25));
				setTotalToPurchase((totalToPurchase = 1000));
				break;
			case total >= 1000:
				setSavings((total * (discount / 100)).toFixed(2));
				break;
			default:
				return savings;
		}
	};

	return (
		<React.Fragment>
			<div className="container">
				<div className="text-center mt-5">
					<h1 className="header-title">Add a Product</h1>
				</div>
				<div className="product-card__container">
					{products.map((product) => (
						<Card
							key={product.id}
							name={product.name}
							price={product.price}
							rating={product.rating}
							reviews={product.reviews}
							image={product.image}
							onClick={() => {
								handlePriceAdd(product.price);
							}}
							type="button"
						/>
					))}
				</div>
			</div>
			<Bundle
				cost={total}
				savings={savings}
				totalPurchase={totalToPurchase}
				discount={discount}
			/>
		</React.Fragment>
	);
};

export default Home;
