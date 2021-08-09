import React, { Component } from 'react'
import './style.css'
import axios from 'axios'

axios.defaults.headers.common = {'Authorization': `Bearer $eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjQxYjFlNDU1YTA3MjE1N2MyYTU0MmY1N2E3NTIzOWY5YmExMDQyMzdiN2Q4ZDlhYmRjMjkyNjI3YWZkNTIyYTI1ZGQ0NTIxZDZlOWUzYTJiIiwiaWF0IjoxNjI3NDQ2MTE1LCJuYmYiOjE2Mjc0NDYxMTUsImV4cCI6MTY1ODk4MjExNSwic3ViIjoiODUxMDg1NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQWpaaW4XNbMuSQ4jGaOCDTDwNxU6YoMpK8UECZhDEGb7puxH8Z3yENJoCO1Pz3y__PG93KuFr8SdI33_eo`}
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const instance = axios.create({
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjQxYjFlNDU1YTA3MjE1N2MyYTU0MmY1N2E3NTIzOWY5YmExMDQyMzdiN2Q4ZDlhYmRjMjkyNjI3YWZkNTIyYTI1ZGQ0NTIxZDZlOWUzYTJiIiwiaWF0IjoxNjI3NDQ2MTE1LCJuYmYiOjE2Mjc0NDYxMTUsImV4cCI6MTY1ODk4MjExNSwic3ViIjoiODUxMDg1NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQWpaaW4XNbMuSQ4jGaOCDTDwNxU6YoMpK8UECZhDEGb7puxH8Z3yENJoCO1Pz3y__PG93KuFr8SdI33_eo'}
  });

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "string",
            sales_channel: "string"
        }
    }

    componentDidMount() {
        instance.get('https://api.printify.com/v1/shops.json')
          .then(res => {
            const store = res.data;
            store.map((item) => (
                this.setState({
                    id: item.id,
                    title: item.title,
                    sales_channel: item.sales_channel
                })
            ))
          })
        }
    render() {
        return (
            <div className='sdiv'>
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
                <p>{this.state.sales_channel}</p>
            </div>
        )
    }
}
