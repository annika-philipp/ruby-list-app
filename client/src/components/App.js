import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ListItem from './ListItem';
import AddListItem from './AddListItem';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: [],
    }
    this.fetchLists = this.fetchLists.bind(this)
    this.addNewListItem = this.addNewListItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editListItem = this.editListItem.bind(this)
  }
  
  componentDidMount() {
    this.fetchLists()
  }


  fetchLists() {
    axios.get('api/v1/lists')
      .then(response => {
        this.setState({
          lists: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewListItem(title, description) {
    axios.post('/api/v1/lists', { list: {title, description} })
    .then(response => {
      const newLists = [ ...this.state.lists, response.data ]
      this.setState({
        lists: newLists
      })
    })
    .catch(error => console.log(error)); 
  }

  deleteItem(id) {
    axios.delete( '/api/v1/lists/' + id )
    .then(response => {
      const lists = this.state.lists.filter(
        list => list.id !== id
      )
      this.setState({lists})
    })
    .catch(error => console.log(error))
  }

  
  editListItem(id, title, description) {
    console.log("editing")
    axios.put( '/api/v1/lists/' + id, {
      list: {
        title,
        description
      }
    })
    .then(response => {
      const lists = this.state.lists
      lists[id-1] = {id, title, description}
      console.log("line above ", lists[id-1])
      this.setState(() => ({
        lists
      }))
      console.log("new list ", this.state.lists)
    })
    .catch(error => console.log(error))
  }


  render() {
    const lists = this.state.lists
    return (
      <div>
        
        <div className="jumbotron" id="header">
          <h1>Lists Items Galore!</h1>
        </div>

        <div className="container">

          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <AddListItem addNewListItem={this.addNewListItem} />
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="row justify-content-md-center">
              {lists.map( list => {
                  return <ListItem 
                          list={list} 
                          key={list.id} 
                          deleteItem={this.deleteItem} 
                          editListItem={this.editListItem} />
                })}    
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;