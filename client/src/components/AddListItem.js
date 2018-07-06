import React, { Component } from 'react';

class NewListForm extends Component {
  constructor(props){
    super(props)
    this.state = {...props.list} || {
      title: '',
      excerpt: ''
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state !== nextProps.list) {
      this.setState({...nextProps.list})
    }
  }

   
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, excerpt } = this.state
    this.props.addNewListItem(title, excerpt)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" placeholder="Title..." onChange={this.handleChange} required />
        <input name="excerpt" type="text" placeholder="Excerpt..." onChange={this.handleChange} required />
        <button>Add List</button>
      </form>
    )
  }
}


export default NewListForm



  