import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class NewListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
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
    const { title, description } = this.state
    this.props.addNewListItem(title, description)
    this.setState({
      title: '',
      description: '',
      addingItem: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.addingItem
        ? <div className="addItem">
            <p>Add new Item</p>
            <button className="btn-outline-dark btn-sm" onClick={this.addingItem.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        : <div className="addForm">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input className="form-control" name="title" type="text" placeholder="Title..." onChange={this.handleChange} />
              </div> 
              <div>
                <label>Full description</label>  
                <textarea className="form-control" rows="10" name="description" type="text" placeholder="Full description..." onChange={this.handleChange} />
              </div>
              <button className="btn-outline-dark btn-sm">Submit</button>
            </form>
          </div>}
      </div>
    )
  }
}


export default NewListForm



  