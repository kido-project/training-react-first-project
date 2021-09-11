import React, { Component } from 'react';
class ResultSetting extends Component {
	setStyle = () => {
		return {
			color: this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.fontSize
		}
	}
	render () {
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p>Color: { this.props.color } - Font size: { this.props.fontSize }</p>
					<div id="content_text" style={ this.setStyle() }
					><b>Im Fullstack Developer</b></div>
				</div>
			);
	};
}

export default ResultSetting;