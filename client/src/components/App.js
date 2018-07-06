import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ListItem from './ListItem';
import AddListItem from './AddListItem';
import EditForm from './EditForm';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: [],
      editingListId: null
    }
    this.fetchLists = this.fetchLists.bind(this)
    this.addNewListItem = this.addNewListItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editingItem = this.editingItem.bind(this)
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

  addNewListItem(title, excerpt) {
    axios.post('/api/v1/lists', { list: {title, excerpt} })
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

  editingItem(id) {
    console.log("I got clicked ", id)
    this.setState({
      editingListId: id
    })
  }
  
  editListItem(id, title, excerpt) {
    console.log("i got triggered")
    axios.put( '/api/v1/lists/' + id, {
      list: {
        title, 
        excerpt
      }
    })
    .then(response => {
      console.log("Edit response, ", response)
      const lists = this.state.lists
      lists[id-1] = {id, title, excerpt}
      this.setState(() => ({
        lists,
        editingListId: null
      }))
    })
    .catch(error => console.log(error))
  }


  render() {
    const lists = this.state.lists
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">Lists Galore!</h1>
        </div>
        <div className="lists-container">
          {lists.map( list => {
            if (this.state.editingListId === list.id) {
              return <EditForm list={list} key={list.id} editListItem={this.editListItem} />
            } else {
              return <ListItem list={list} key={list.id} deleteItem={this.deleteItem} editingItem={this.editingItem} />
            }
            })}
          <AddListItem addNewListItem={this.addNewListItem} />    
        </div>
      </div>
    )
  }
}

export default App;