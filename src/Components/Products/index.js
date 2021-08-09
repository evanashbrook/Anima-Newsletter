import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const instance = axios.create({
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjQxYjFlNDU1YTA3MjE1N2MyYTU0MmY1N2E3NTIzOWY5YmExMDQyMzdiN2Q4ZDlhYmRjMjkyNjI3YWZkNTIyYTI1ZGQ0NTIxZDZlOWUzYTJiIiwiaWF0IjoxNjI3NDQ2MTE1LCJuYmYiOjE2Mjc0NDYxMTUsImV4cCI6MTY1ODk4MjExNSwic3ViIjoiODUxMDg1NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQWpaaW4XNbMuSQ4jGaOCDTDwNxU6YoMpK8UECZhDEGb7puxH8Z3yENJoCO1Pz3y__PG93KuFr8SdI33_eo'}
  });

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            ids: [],
            images: [],
            current_prod: 0
        }
    }

    componentDidMount() {
        instance.get('https://api.printify.com/v1/shops/3270327/products.json')
          .then(res => {
            const prod = res.data;
            const id = [];
            const title = [];
            const image = [];
            prod.data.map((item) => (
                title.push(item.title),
                id.push(item.id),
                image.push(item.images[0].src)
            ))
            this.setState({
                    titles: title,
                    ids: id,
                    images: image})
          })
        }
    render() {
        return (
            <section className='p-sec'>
                <div className='comingsoon'>
                    <p>Coming Soon...</p>
                    <p>once a problem with our supplier is cleared up</p>
                </div>
                <div className='productrow'>
                <div className='prod0'>
                    <NavLink to='/catalog/product0'>
                    <img src={this.state.images[0]} alt='prod0-image' />
                    <p>{this.state.titles[0]}</p>
                    <p>Price: $15.00</p>
                    </NavLink>
                </div>
                <div className='prod1'>
                    <NavLink to='/catalog/product1'>
                    <img src={this.state.images[1]} alt='prod1-image' />
                    <p>{this.state.titles[1]}</p>
                    <p>Price: $15.00</p>
                    </NavLink>
                </div>
                </div>
                <div className='productrow2'>
                <div className='prod2'>
                    <NavLink to='/catalog/product2'>
                    <img src={this.state.images[2]} alt='prod2-image' />
                    <p>{this.state.titles[2]}</p>
                    <p>Price: $15.00</p>
                    </NavLink>
                </div>
                <div className='prod3'>
                    <NavLink to='/catalog/product3'>
                    <img src={this.state.images[3]} alt='prod3-image' />
                    <p>{this.state.titles[3]}</p>
                    <p>Price: $15.00</p>
                    </NavLink>
                </div>
                </div>
                {/*<div className='ids'>
                    <p>{this.state.ids[0]}</p>
                    <p>{this.state.ids[1]}</p>
                    <p>{this.state.ids[2]}</p>
                    <p>{this.state.ids[3]}</p>
        </div>*/}

            </section>
        )
    }
}