import React, {Component} from 'react';
import savePost from '../utils/savePost.js';

export default class AddStory extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.saveCallback = this.saveCallback.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    tinymce.init({ 
      selector:'textarea',
      // plugins: 'autolink link image lists preview save',
      // toolbar: 'save',
      // // save_enablewhendirty: true,
      // save_onsavecallback: this.saveCallback,
      height: '500px',
      width: '800px',
    }).then(editors => {
      console.log(editors)
    });
    this.state = {
      author: 'anonomous',
      title: 'untitled',
    }
  }

  saveCallback (e) {
    console.log('saved');
    console.log('author: ', this.state.author);
    console.log('title: ', this.state.title);
    console.log('html: ', e.contentDocument.body.innerHTML);
  }


  updateTitle (e) {
    this.state['title'] = e.target.value
    this.setState(this.state);
  }

  updateAuthor (e) {
    this.state['author'] = e.target.value
    this.setState(this.state);
  }

  render () {
    return (
      <form>
        <div>
          Title: <input value = {this.state.title} onChange={this.updateTitle} />
          <br />
          Author: <input value = {this.state.author} onChange={this.updateAuthor} />
          <br />
        </div>
        <textarea></textarea>
      </form>
    )
  }
}