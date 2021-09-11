import React, { Component } from 'react';
class Table extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isActive: true
		}
	}
	setActiveButton = () => {
		this.state.isActive === true ? this.setState({ isActive: false }) : this.setState({ isActive: true });
	}
	render () {
		return (
			<div className="alert alert-warning">
				<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<legend><b>Information Technology</b></legend>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>MacBook Pro 2024</td>
								<td>18.000.000.000</td>
							</tr>
						</tbody>
					</table>
					<button type="button" className="btn btn-primary" onClick={ this.setActiveButton }>
				{ this.state.isActive === true ? 'Deactive' : 'Active' }</button>
				</div>
			</div>
			</div>
			);
	};
}

export default Table;