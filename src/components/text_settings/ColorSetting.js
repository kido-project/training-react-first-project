import React, { Component } from 'react';
class ColorSetting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: ['#d9534f', '#337ab7', '#5cb85c']
		}
	}
	showColor = (color) => {
		return {
			backgroundColor: color
		}
	}
	setActiveColor = (color) => {
		this.props.onReciveColor(color);
	}
	render () {
		let elementColors = this.state.colors.map((color, index) => {
			return <span 
			className={ "box-color btn " + (this.props.color === color ? 'active' : '') }
			key={index} data-color={ color }
			style={ this.showColor(color) }
			onClick={ () => this.setActiveColor(color) }
			></span>;
		});
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title text-success">Color picker</h3>
						</div>
						<div className="panel-body m-auto">
							{ elementColors }
						</div>
					</div>
				</div>
			);
	};
}

export default ColorSetting;