import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeListItem: '',
      detailsVisible: false,
      
    }
    this.showDescription = this.showDescription.bind(this)
    this.hideDescription = this.hideDescription.bind(this)
  }

  showDescription(listItem) {
    this.setState({
      activeListItem: listItem,
      detailsVisible: true
    })
  }

  hideDescription() {
    this.setState({
      detailsVisible: !this.state
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
              <button className="btn-outline-dark btn-sm" onClick={() => this.props.editingItem(list.id)}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">  
              <p>{list.excerpt}</p>
              <br/>
            {this.state.detailsVisible 
              ? <div>
                  <p>{list.description}</p>
                  <button className="btn-outline-dark" onClick={() => this.hideDescription(list.id)}>Hide Full Text</button>  
                </div>
              : <button className="btn-outline-dark" onClick={() => this.showDescription(list.id)}>Show Full Text</button>
             }
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default List;