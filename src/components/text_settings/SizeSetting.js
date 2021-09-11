import React, { Component } from 'react';
class SizeSetting extends Component {
	changeSize = (unit) => {
		let newSize = this.props.fontSize + unit;
		if(newSize >= 8 && newSize <= 24) {
			this.props.onReciveFontSize(newSize);
		}
	}
	render () {
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Size : { this.props.fontSize } </h3>
						</div>
						<div className="panel-body">
							<button type="button" className="btn btn-success mr-3" onClick={ () => { this.changeSize(-1) } }>Down</button>
							<button type="button" className="btn btn-success" onClick={ () => { this.changeSize(1) } }>Up</button>
						</div>
					</div>
				</div>
			);
	};
}

export default SizeSetting;