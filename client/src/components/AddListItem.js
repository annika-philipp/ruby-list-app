import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class NewListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      excerpt: '',
      description: '',
      addingItem: false
    }
  }

  addingItem() {
    this.setState({
      addingItem: true
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, excerpt, description } = this.state
    this.props.addNewListItem(title, excerpt, description)
    // shouldn't the this.setState clear state again (so that the placeholders show again?)
    this.setState({
      title: '',
      excerpt: '',
      description: '',
      addingItem: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.addingItem
        ? <div className="addItem">
            <button onClick={this.addingItem.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>
            <p>Add new Item</p>
          </div>
        : <form onSubmit={this.handleSubmit}>
            <input name="title" type="text" placeholder="Title..." onChange={this.handleChange} required />
            <input name="excerpt" type="text" placeholder="Excerpt..." onChange={this.handleChange} required />
            <input name="description" type="text" placeholder="Description..." onChange={this.handleChange} required />
            <button>Submit</button>
          </form>}
      </div>
    )
  }
}


export default NewListForm



  