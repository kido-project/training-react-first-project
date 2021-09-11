import React, { Component } from 'react';
class Contact extends Component {
	onSubmitMail = () => {
		console.log(this.refs.contact_email.value);
	}
	render () {
		return (
			<div className="alert alert-success">
				<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<legend><b>Contact us</b></legend>
				
					<div className="form-group">
						<label>Email</label>
						<input type="text" className="form-control" ref="contact_email"/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={ this.onSubmitMail }>Submit</button>
				</div>
			</div>
			</div>
			);
	};
}

export default Contact;