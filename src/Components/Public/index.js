import axios from 'axios'
import React, { Component } from 'react'
import './style.css'

/**
* @author
* @function Public
**/

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const instancetwo = axios.create()
  delete instancetwo.defaults.headers.common['Authorization'];


export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Author: '',
      Created: '',
      Published: '',
      Edited: '',
      Content: '',
    }
  }

  componentDidMount() {
    instancetwo.get('https://backendstrapiblog.herokuapp.com/articles/1')
    .then(res => {
      this.setState({
        Title: res.data.Title,
        Author: res.data.Author,
        Created: res.data.created_at,
        Published: res.data.published_at,
        Edited: res.data.updated_at,
        Content: res.data.Content
      })
      }
    )
  }

  render() {
    return (
      <section className='article1'>
        <div className='article-wrap'>
           <div className='article-title'>
          {this.state.Title}
        </div>
        <div className='article-author'>
          By: {this.state.Author}
        </div>
        <div className='article-published'>
          Published: {this.state.Published}
        </div>
        <div className='article-edited'>
          Last Edited: {this.state.Edited}
        </div>
        <div className='article-content'>
          {this.state.Content.split('\n\n').map(paragraph =>
            <p>
                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
            </p>
        )}
        </div>
        </div>

      </section>

    )
  }

}