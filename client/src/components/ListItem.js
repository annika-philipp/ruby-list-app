import React, { Component } from 'react';
import EditForm from './EditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.list.id,
      editVisible: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }


  toggleEdit() {
    this.setState({
      editVisible: !this.state.editVisible
    })
  }


  render() {
    const list = this.props.list
    return(
      <div className="col-lg-8 col-12" key={list.id} id="listItem">
        <div className="container">
          <div className="row" id="header-list">
            <div className="col-8">
              <h4>{list.title}</h4>
            </div>
            <div className="col-4" id="buttons">
              <button className="btn-outline-dark btn-sm" onClick={() => this.props.deleteItem(list.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              <button className="btn-outline-dark btn-sm" onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">  
              <p>{list.description}</p>
            </div>
          </div>
        </div>
        {this.state.editVisible && <EditForm hideVisible={this.toggleEdit} list={this.props.list} editListItem={this.props.editListItem}/>}
      </div>  
    )
  }
}

export default List;