import React, { Component } from 'react'
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import './style.css'
import axios from 'axios'

axios.defaults.headers.common = {'Authorization': `Bearer $eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjQxYjFlNDU1YTA3MjE1N2MyYTU0MmY1N2E3NTIzOWY5YmExMDQyMzdiN2Q4ZDlhYmRjMjkyNjI3YWZkNTIyYTI1ZGQ0NTIxZDZlOWUzYTJiIiwiaWF0IjoxNjI3NDQ2MTE1LCJuYmYiOjE2Mjc0NDYxMTUsImV4cCI6MTY1ODk4MjExNSwic3ViIjoiODUxMDg1NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQWpaaW4XNbMuSQ4jGaOCDTDwNxU6YoMpK8UECZhDEGb7puxH8Z3yENJoCO1Pz3y__PG93KuFr8SdI33_eo`}
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const instance = axios.create({
    headers: {'Authorization': 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjQxYjFlNDU1YTA3MjE1N2MyYTU0MmY1N2E3NTIzOWY5YmExMDQyMzdiN2Q4ZDlhYmRjMjkyNjI3YWZkNTIyYTI1ZGQ0NTIxZDZlOWUzYTJiIiwiaWF0IjoxNjI3NDQ2MTE1LCJuYmYiOjE2Mjc0NDYxMTUsImV4cCI6MTY1ODk4MjExNSwic3ViIjoiODUxMDg1NSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQWpaaW4XNbMuSQ4jGaOCDTDwNxU6YoMpK8UECZhDEGb7puxH8Z3yENJoCO1Pz3y__PG93KuFr8SdI33_eo'}
  });

  const list = ["places"]

export default class Product3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'string',
            id: 0,
            image: 'string',
            images: [],
            form_variant: 0,
            form_email: '',
            form_phone: '',
            form_country: '',
            form_state: '',
            form_address: '',
            form_city: '',
            form_zip: '',
            form_firstname: '',
            form_lastname: '',
            variant_ids: [],
            variant_titles: [],
            ordernumber: '',
            googleMapLink: {},
        }
        this.handleChange_variant = this.handleChange_variant.bind(this);
        this.handleChange_email = this.handleChange_email.bind(this);
        this.handleChange_phone = this.handleChange_phone.bind(this);
        this.handleChange_country = this.handleChange_country.bind(this);
        this.handleChange_state = this.handleChange_state.bind(this);
        this.handleChange_address = this.handleChange_address.bind(this);
        this.handleChange_city = this.handleChange_city.bind(this);
        this.handleChange_zip = this.handleChange_zip.bind(this);
        this.handleChange_firstname = this.handleChange_firstname.bind(this);
        this.handleChange_lastname = this.handleChange_lastname.bind(this);
        this.handleClick0 = this.handleClick0.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.autocomplete = null
        this.onLoad = this.onLoad.bind(this)
        this.onPlaceChanged = this.onPlaceChanged.bind(this)
    }
    handleChange_variant(event) {
        this.setState({form_variant: event.target.value})

    }

    handleChange_email(event) {
        this.setState({form_email: event.target.value})

    }

    handleChange_phone(event) {
        this.setState({form_phone: event.target.value})

    }

    handleChange_country(event) {
        this.setState({form_country: event.target.value})

    }

    handleChange_state(event) {
        this.setState({form_state: event.target.value})

    }

    handleChange_address(event) {
        this.setState({form_address: event.target.value})

    }

    handleChange_city(event) {
        this.setState({form_city: event.target.value})

    }

    handleChange_zip(event) {
        this.setState({form_zip: event.target.value})

    }

    handleChange_firstname(event) {
        this.setState({form_firstname: event.target.value})

    }

    handleChange_lastname(event) {
        this.setState({form_lastname: event.target.value})

    }

    handleClick0() {
        this.setState({image: this.state.images[0]})
    }

    handleClick1() {
        this.setState({image: this.state.images[1]})
    }

    handleClick2() {
        this.setState({image: this.state.images[2]})
    }

    handleClick3() {
        this.setState({image: this.state.images[3]})
    }

    onLoad (autocomplete) {
        console.log('autocomplete: ', autocomplete)
    
        this.autocomplete = autocomplete
      }
    
      onPlaceChanged () {
        if (this.autocomplete !== null) {
          console.log(this.autocomplete.getPlace())
          let addressObject = this.autocomplete.getPlace()
    let address = addressObject.address_components
    this.setState({
      name: addressObject.name,
      form_address: `${address[0].long_name} ${address[1].long_name}`,
      form_city: address[2].long_name,
      form_state: address[4].short_name,
      form_zip: address[6].short_name,
      form_country: address[5].long_name
    })
        } else {
          console.log('Autocomplete is not loaded yet!')
        }
      }

    handleSubmit(event) {
        const order = {
            label: '00001',
            line_items: [{
                product_id: "6110a814850bc3359c2bea38",
                variant_id: this.state.form_variant,
                quantity: 1
            }
        ],
            shipping_method: 1,
            address_to: {
                first_name: this.state.form_firstname,
                last_name: this.state.form_lastname,
                email: this.state.form_email,
                phone: this.state.form_phone,
                country: this.state.form_country,
                region: this.state.form_state,
                address: this.state.form_address,
                city: this.state.form_city,
                zip: this.state.form_zip
            }

        }
        instance.post('https://api.printify.com/v1/shops/3270327/orders.json', order)
        .then(res => {
            const order_id = res.id
            this.setState({
                ordernumber: order_id,
                form_firstname: '',
                form_lastname: '',
                form_email: '',
                form_phone: '',
                form_country: '',
                form_region: '',
                form_address: '',
                form_city: '',
                form_zip: '',
            })
        })
        alert('Your Order Has Been Recieved, Proceed To Payment Portal')
        event.preventDefault();
    }

    componentDidMount() {
        instance.get('https://api.printify.com/v1/shops/3270327/products/6110a814850bc3359c2bea38.json')
          .then(res => {
            const prod = res.data;
            const variant_id = [];
            const variant_title = [];
            const imagesb = [];
            prod.variants.map((vari) => (
                variant_id.push(vari.id),
                variant_title.push(vari.title)
            ));
            prod.images.map((image) => (
                imagesb.push(image.src)
            ));
            this.setState({
                    title: prod.title,
                    ids: prod.id,
                    image: prod.images[0].src,
                    variant_ids: variant_id,
                    variant_titles: variant_title,
                    images: imagesb
                })
          })
        }

    render() {
        return (
            <section className='sec-0'>
                <div className='productinfodiv'>
                <div className='img-0-div'>
                    <img src={this.state.image} alt='prod0' />
                    <p>{this.state.title}</p>
                    <p>Price: $15.00</p>
                </div>
                <div className='productinfo'>
                <div className='colorOptions'>
                <button onClick={this.handleClick0}><img src={this.state.images[0]} alt='var1' /></button>
                    <button onClick={this.handleClick1}><img src={this.state.images[1]} alt='var2' /></button>
                    <button onClick={this.handleClick2}><img src={this.state.images[2]} alt='var3' /></button>
                    <button onClick={this.handleClick3}><img src={this.state.images[3]} alt='var4' /></button>
                </div>
                <p className='title-0-p'>Order the {this.state.title}... but not yet</p>
                <form className='prodform' onSubmit={this.handleSubmit}>
                <label className='varlabel'>
                    Color/Size:
                    <select name='sizeandcolor' id='sizeandcolor' value={this.state.form_variant} onChange={this.handleChange_variant}>
                        <option value={this.state.variant_ids[0]}>{this.state.variant_titles[0]}</option>
                        <option value={this.state.variant_ids[1]}>{this.state.variant_titles[1]}</option>
                        <option value={this.state.variant_ids[2]}>{this.state.variant_titles[2]}</option>
                        <option value={this.state.variant_ids[3]}>{this.state.variant_titles[3]}</option>
                        <option value={this.state.variant_ids[4]}>{this.state.variant_titles[4]}</option>
                        <option value={this.state.variant_ids[5]}>{this.state.variant_titles[5]}</option>
                        <option value={this.state.variant_ids[6]}>{this.state.variant_titles[6]}</option>
                        <option value={this.state.variant_ids[7]}>{this.state.variant_titles[7]}</option>
                        <option value={this.state.variant_ids[8]}>{this.state.variant_titles[8]}</option>
                        <option value={this.state.variant_ids[9]}>{this.state.variant_titles[9]}</option>
                        <option value={this.state.variant_ids[10]}>{this.state.variant_titles[10]}</option>
                        <option value={this.state.variant_ids[11]}>{this.state.variant_titles[11]}</option>
                        <option value={this.state.variant_ids[12]}>{this.state.variant_titles[12]}</option>
                        <option value={this.state.variant_ids[13]}>{this.state.variant_titles[13]}</option>
                        <option value={this.state.variant_ids[14]}>{this.state.variant_titles[14]}</option>
                        <option value={this.state.variant_ids[15]}>{this.state.variant_titles[15]}</option>
                        <option value={this.state.variant_ids[16]}>{this.state.variant_titles[16]}</option>
                        <option value={this.state.variant_ids[17]}>{this.state.variant_titles[17]}</option>
                        <option value={this.state.variant_ids[18]}>{this.state.variant_titles[18]}</option>
                        <option value={this.state.variant_ids[19]}>{this.state.variant_titles[19]}</option>
                        <option value={this.state.variant_ids[20]}>{this.state.variant_titles[20]}</option>
                        <option value={this.state.variant_ids[21]}>{this.state.variant_titles[21]}</option>
                        <option value={this.state.variant_ids[22]}>{this.state.variant_titles[22]}</option>
                        <option value={this.state.variant_ids[23]}>{this.state.variant_titles[23]}</option>
                        <option value={this.state.variant_ids[24]}>{this.state.variant_titles[24]}</option>
                        <option value={this.state.variant_ids[25]}>{this.state.variant_titles[25]}</option>
                        <option value={this.state.variant_ids[26]}>{this.state.variant_titles[26]}</option>
                        <option value={this.state.variant_ids[27]}>{this.state.variant_titles[27]}</option>
                        <option value={this.state.variant_ids[28]}>{this.state.variant_titles[28]}</option>
                        
                        
                    </select>
                </label>
                <label className='firstnamelabel'>
                    First Name:
                    <input type="text" value={this.state.form_firstname} onChange={this.handleChange_firstname} />
                </label>
                <label className='lastnamelabel'>
                    Last Name:
                    <input type="text" value={this.state.form_lastname} onChange={this.handleChange_lastname} />
                </label>
                <label className='emaillabel'>
                    Email:
                    <input type="text" value={this.state.form_email} onChange={this.handleChange_email} />
                </label>
                <label className='phonelabel'>
                    Phone:
                    <input type="text" value={this.state.form_phone} onChange={this.handleChange_phone} />
                </label>
                <label className='autocompletelabel'>
                <LoadScript googleMapsApiKey="AIzaSyCbyxZ7eVqv0hKZo7kJUum61YVjmVdkwyw" libraries={list}>
                    <Autocomplete onLoad={this.onLoad} onPlaceChanged={this.onPlaceChanged}>
                        <input type="text" placeholder="Autcomplete Address"/>
                    </Autocomplete>
                </LoadScript>
                </label>
                <label className='countrylabel'>
                    Country: 
                    <input type="text" value={this.state.form_country} onChange={this.handleChange_country} />
                </label>
                <label className='statelabel'>
                    State/Province:
                    <input type="text" value={this.state.form_state} onChange={this.handleChange_state} />
                </label>
                <label className='addresslabel'>
                    Address:
                    <input type="text" value={this.state.form_address} onChange={this.handleChange_address} />
                </label>
                <label className='citylabel'>
                    City:
                    <input type="text" value={this.state.form_city} onChange={this.handleChange_city} />
                </label>
                <label className='ziplabel'>
                    Zip: 
                    <input type="text" value={this.state.form_zip} onChange={this.handleChange_zip} />
                </label>
                <input className='submit-o' type="submit" value="Submit"/>
                </form>
                <a className='submit-p' href='https://buy.stripe.com/00g7sB4woeVQddC5kk'>Submit Payment</a>
                <p className='ChkoutHelp0'>*READ BEFORE FILLING OUT FORM*</p>
                <p className='ChkoutHelp1'>intrinsic's checkout process consists of two quick steps:</p>
                <ul className='ChkoutSteps'>
                    <li>Enter your shipping information and click "Submit Order" to get your information into our system.</li>
                    <li>Next, click "Submit Payment" to navigate to our payment page and complete your purchase.</li>
                </ul>
                <p className='ChkoutHelp2'>Once we see your order and confirm your payment, we'll send you an email to let you know your item has been sent to production.</p>
                </div>
                </div>
                {/*<div className='variants'>
                    <p>{this.state.variant_titles[0]}: {this.state.variant_ids[0]}</p>
                    <p>{this.state.variant_titles[1]}: {this.state.variant_ids[1]}</p>
                    <p>{this.state.variant_titles[2]}: {this.state.variant_ids[2]}</p>
                    <p>{this.state.variant_titles[3]}: {this.state.variant_ids[3]}</p>
                    <p>{this.state.variant_titles[4]}: {this.state.variant_ids[4]}</p>
                    <p>{this.state.variant_titles[5]}: {this.state.variant_ids[5]}</p>
                    <p>{this.state.variant_titles[6]}: {this.state.variant_ids[6]}</p>
                    <p>{this.state.variant_titles[7]}: {this.state.variant_ids[7]}</p>
                    <p>{this.state.variant_titles[8]}: {this.state.variant_ids[8]}</p>
                    <p>{this.state.variant_titles[9]}: {this.state.variant_ids[9]}</p>

        </div>*/}

            </section>
        )
    }
}