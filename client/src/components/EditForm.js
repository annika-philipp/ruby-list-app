import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

class EditListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      description: this.props.list.description
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id, title, description } = this.state
    this.props.editListItem(id, title, description)
    this.props.hideVisible()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="buttons">
            <div className="button">
              <button className="btn-outline-dark btn-sm" onClick={() => this.props.deleteItem(this.props.list.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
            <div className="button">
              <button className="btn-outline-dark btn-sm" onClick={this.props.hideVisible}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
          </div>
        </div>
        <div className="editForm">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </div> 
            <div>
              <label>Full description</label>  
              <textarea className="form-control" rows="10" name="description" type="text" value={this.state.description} onChange={this.handleChange} />
            </div>
            <button className="btn-outline-dark btn-sm">Submit</button>
          </form>
        </div>
      </div>
    )
  }

}

export default EditListForm