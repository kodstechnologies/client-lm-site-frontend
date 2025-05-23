import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';
const PUBLIC_URL = import.meta.env.VITE_API_URL;


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link to={PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
					<img src={PUBLIC_URL + portfolio.image} alt="icon" />
				</Link>
				</div>
				<div className="content">
				<h4 className="title"> 
					<Link to={PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
				</h4>
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				</div>
			</div>
		</>
    )
}

export default PropOne;