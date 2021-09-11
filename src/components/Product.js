import React, { Component } from 'react';
let listProductCarts = [];
let listProductFavorites = [];
class Product extends Component {

    // constructor(props) {
        // super(props);
        // this.addToCart = this.addToCart.bind(this);
        // this.addToFavorite = this.addToFavorite.bind(this);
    // }
    getPrice = (price, unit) => {
        return this.formatNumber(price * unit) + ' VND';
    }
    formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }       

  addToCart = () => {
    if(listProductCarts.includes(this.props.id)) {
        alert('Sản phẩm đã có trong giỏ hàng')
    } else {
        listProductCarts.push(this.props.id)
        let countCart = parseInt(document.getElementById('count_cart').textContent);
        document.getElementById('count_cart').textContent = countCart + 1;
    }
}       
addToFavorite = () => {

    if(listProductFavorites.includes(this.props.id)) {
        alert('Sản phẩm đã có trong danh mục ưa thích')
    } else {
        listProductFavorites.push(this.props.id);
        let countFavorite = parseInt(document.getElementById('count_favorite').textContent);
        document.getElementById('count_favorite').textContent = countFavorite + 1;
    }
}   
render () {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
        <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/05/mac-pro-13.jpg" alt=""/>
        <div className="caption">
        <h3>{ this.props.name }</h3>
        <p>
        { this.getPrice(this.props.price, this.props.unit) }
        </p>
        <p>
        <button className="btn btn-primary" onClick={ this.addToFavorite }>Add Favorite</button>
        <button className="btn btn-default" onClick={ this.addToCart }>Add To Card</button>
        </p>
        </div>
        </div>
        </div>
        );
};
}

export default Product;
