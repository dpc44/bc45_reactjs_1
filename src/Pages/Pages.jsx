import cssOb from './style.module.css'
import Header from './Header'
import React, { Component } from 'react'
const dataProduct = [
  {
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "url": "./glassesImage/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "url": "./glassesImage/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "url": "./glassesImage/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "url": "./glassesImage/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "url": "./glassesImage/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "url": "./glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "url": "./glassesImage/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "url": "./glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]
export default class Pages extends Component {
  state = {
    glasses: {
      "id": '',
      "price": '',
      "name": "",
      "url": "",
      "desc": ""
    }
  }
  renderState = (prod) => {
    this.setState({
      glasses: prod
    })
  }
  renderGlassesButton() {
    return dataProduct.map((glasses) => {
      return <div className={'col-2 my-4'}>
        <button className='btn p-3' ><img src={glasses.url} alt="" width={100} onClick={() => {
          this.renderState(glasses)
        }} /></button>

      </div>
    })
  }


  render() {

    return (

      <div>
        <Header />
        <div className='container text-center ' >

          <div className='Avarta my-5'>
            <div className='row'>
              <div className={`col-6`} style={{ position: 'relative' }}>
                <img src="./glassesImage/model.jpg" alt="" width={'50%'} className={`${cssOb.imageLayer}`} />
                <div className={`${cssOb.glassesLayer}`}>
                  <img src={this.state.glasses.url} alt="" width={'150'} />
                </div>
                <div className={`${cssOb.contentLayer} text-start`}>
                  <h1>{this.state.glasses.name}</h1>
                  <h3>{this.state.glasses.price}</h3>
                  <p>{this.state.glasses.desc}</p>

                </div>
              </div>
              <div className='col-6'>
                <img src="./glassesImage/model.jpg" alt="" width={'50%'} />
              </div>
            </div>
          </div>


          <div className={`${cssOb.ListGlasses} my-5`}>
            <div className='row'>
              {this.renderGlassesButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
