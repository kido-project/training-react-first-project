import React, { Component } from 'react';
class ResetSetting extends Component {
	resetSetting = () => {
		this.props.onResetSetting();
	}
	render () {
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<button type="button" className="btn btn-primary" onClick={ this.resetSetting }>Reset</button>
				</div>	
			);
	};
}

export default ResetSetting;