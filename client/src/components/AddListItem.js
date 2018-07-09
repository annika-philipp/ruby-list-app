import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

class NewListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      addingItem: false
    }
    this.toggleAdd = this.toggleAdd.bind(this)
  }

  toggleAdd() {
    this.setState({
      addingItem: !this.state.addingItem
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
            <button className="btn-outline-dark btn-sm" onClick={this.toggleAdd}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
          : 
            <div>
              <div className="container">
                <div className="row" id="buttons">
                  <button className="btn-outline-dark btn-sm" onClick={this.toggleAdd}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
              </div>
              <div className="addForm">
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
              </div>
            </div>}
      </div>
    )
  }
}


export default NewListForm



  