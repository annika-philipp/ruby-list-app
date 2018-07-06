import React from 'react';

const List = ({ list, deleteItem, editingItem }) =>

<div className="single-list" key={list.id}>
  <h4>{list.title}</h4>
  <p>{list.excerpt}</p>
  <button onClick={() => deleteItem(list.id)}>Delete</button>
  <button onClick={() => editingItem(list.id)}>Edit</button>
  <hr/>
</div>

export default List;