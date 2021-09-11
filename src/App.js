import React, { Component } from 'react';

import  Header from './components/Header'; 
import  Product from './components/Product'; 
import  Contact from './components/Contact';
import  Table from './components/Table';
import  ColorSetting from './components/text_settings/ColorSetting';
import  SizeSetting from './components/text_settings/SizeSetting';
import  ResetSetting from './components/text_settings/ResetSetting';
import  ResultSetting from './components/text_settings/ResultSetting';

class App extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            products: [
            {
                id: 1,
                name: 'Macbook Pro 2021',
                price: '110000000',
                unit: 213213.12321312
            },
            {
                id: 2,
                name: 'Macbook Pro 2022',
                price: '120000000',
                unit: 3
            },
            {
                id: 3,
                name: 'Macbook Pro 2023',
                price: '130000000',
                unit: 4
            },
            {
                id: 4,
                name: 'Macbook Pro 2024',
                price: '140000000',
                unit: 5
            },
            {
                id: 5,
                name: 'Macbook Pro 2024',
                price: '150000000',
                unit: 6
            }, 
            {
                id: 6,
                name: 'Macbook Pro 2024',
                price: '160000000',
                unit: 7
            }, 
            {
                id: 7,
                name: 'Macbook Pro 2024',
                price: '170000000',
                unit: 8
            },
            {
                id: 8,
                name: 'Macbook Pro 2024',
                price: '180000000',
                unit: 9
            }
            ],
            isActive: true,
            color: '#d9534f',
            fontSize: 12
        }
    }

    onSetColor = (color) => {
        this.setState({ color: color })
    }

    onSetFontSize = (fontSize) => {
        this.setState({ fontSize: fontSize })
    }

    onResetSetting = () => {
        this.setState({
            color: '#d9534f',
            fontSize: 12
        })
    }
    render () {
        let productMapping = this.state.products.map((product, index) => {
            return <Product key={ index } id={ product.id } name={ product.name } price={ product.price } unit={ product.unit } />
        });

        return (
            <div className="App container">
            <Header/>
            <h1>App Component</h1>
            <div className="row">
            { productMapping }
            </div>
            <div className="row">
                <ColorSetting color={ this.state.color } onReciveColor={ this.onSetColor }/>
                <SizeSetting fontSize={ this.state.fontSize } onReciveFontSize={ this.onSetFontSize }/>
                <ResultSetting color={ this.state.color } fontSize={ this.state.fontSize }/>
                <ResetSetting onResetSetting={ this.onResetSetting }/>
            </div>
            <Table/>
            <Contact/>
            </div>
            );
    };
}

export default App;
