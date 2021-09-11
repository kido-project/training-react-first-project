import React, { Component } from 'react';
class TextSetting extends Component {
	render () {
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Color picker</h3>
						</div>
						<div className="panel-body m-auto">
							<span className="box-color btn btn-danger active"></span>
							<span className="box-color btn btn-primary"></span>
							<span className="box-color btn btn-success"></span>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Size : 12px</h3>
						</div>
						<div className="panel-body">
							<button type="button" className="btn btn-success mr-3">Down</button>
							<button type="button" className="btn btn-success">Up</button>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p>Color : Red - Font size : 12px</p>
					<div id="content_text">Im Fullstack Developer</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<button type="button" className="btn btn-primary">Reset</button>
				</div>		
			</div>
			);
	};
}

export default TextSetting;