import React, { Component } from 'react';
class Header extends Component {
	render () {
		const circle = {
				marginLeft: "2px",
				backgroundColor: "white",
				borderRadius: "50%",
				fontWeight: "bold",
				padding: "1px 4px 1px 3px",
				fontSize: "10px"
			};
		return (
			<nav className="navbar navbar-inverse">
			<div className="container-fluid">
			<a className="navbar-brand" href="google.com">Kido Shop</a>
			<ul className="nav navbar-nav">
			<li className="active">
			<a href="google.com">Home</a>
			</li>
			<li>
			<a href="google.com">Product</a>
			</li>
			<li>
			<a href="google.com">
			<i className="fas fa-shopping-cart" style={{ color: "white" }}></i>
			<span style={ circle } id="count_cart">0</span>
			</a>
			</li>
			<li>
			<a href="google.com">
			<i className="fas fa-heart" style={{ color: "white" }}></i>
			<span style={ circle } id="count_favorite">0</span>
			</a></li>
			</ul>
			</div>
			</nav>
			);
	};
}

export default Header;
