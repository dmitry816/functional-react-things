import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddColorForm extends Comment {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const {_title, _color} = this.refs
    e.preventDefault();
    alert(`new color: ${_title.value} ${_color.value}`)
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input ref='_title'
               type='text'
               placeholder='color title...' required />
        <input ref='_color'
               type='color' required />
        <button>ADD</button>
      </form>
    )
  }
}

export default AddColorForm;
 