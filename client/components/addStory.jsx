import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import * as Actions from '../actions/index.js';
import { connect } from 'react-redux';
import store from '../store/createStore.js'
class AddStory extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.saveCallback = this.saveCallback.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.updateBlurb = this.updateBlurb.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
    if (this.props.toEdit) {
      this.state = {
        author: this.props.toEdit.author,
        title: this.props.toEdit.title,
        blub: this.props.toEdit.blurb,
      }
    } else {
      this.state = {
        author: localStorage.name,
        title: 'untitled',
        blurb: 'none',
      }
    }
  }

  saveCallback (e) {
    let html = e.contentDocument.body.innerHTML;
    if (this.props.toEdit) {
      this.props.savePost(
        html.split(' data-mce-bogus="1"').join(' /'),
        this.state.title,
        this.state.author,
        this.state.blurb,
        this.state.photo,
        this.props.toEdit.id,
        )
    } else {
      this.props.savePost(
        html.split(' data-mce-bogus="1"').join(' /'),
        this.state.title,
        this.state.author,
        this.state.blurb,
        this.state.photo,
        )
    }
  }

  componentDidMount() {
    tinymce.init({ 
      selector:`#editArea${this.props.editorCount}`,
      plugins: 'autolink link image lists preview save',
      toolbar: 'save',
      // save_enablewhendirty: true,
      save_onsavecallback: this.saveCallback,
      height: '500px',
      width: '800px',
    });
  }

  componentDidUpdate () {
    tinymce.init({ 
      selector:`#editArea${this.props.editorCount}`,
      plugins: 'autolink link image lists preview save',
      toolbar: 'save',
      // save_enablewhendirty: true,
      save_onsavecallback: this.saveCallback,
      height: '500px',
      width: '800px',
    });
  }

  updateTitle (e) {
    this.state['title'] = e.target.value;
    this.setState(this.state);
  }

  updateAuthor (e) {
    this.state['author'] = e.target.value;
    this.setState(this.state);
  }

  updateBlurb (e) {
    this.state['blurb'] = e.target.value;
    this.setState(this.state);
  }

  uploadPic (e) {
    const reader = new window.FileReader();
    const file = e.target.files[0];
    reader.onload = upload => {
      const newState = Object.assign({}, this.state, {
        photo: {
          data_url: upload.target.result,
          filename: file.name,
          filetype: file.type,
        }
      });
      this.setState(newState);
    };
    reader.readAsDataURL(file);
  }

  componentWillUnmount() {
    this.props.addEditor();
  }

  render () {
    if (this.props.fetching) {
      return (
        <p>Please wait... <br />saving...</p>
        )
    } else if (this.props.saved) {
      this.props.addEditor();
      this.props.saveRedirect();
      return (<Redirect to="/adminMenu"/>)
    } else if (this.props.toEdit !== undefined) {
      return (
        <form>
          <div>
            Title: <input value={this.state.title} onChange={this.updateTitle} />
            <br />
            Author: <input value={this.state.author} onChange={this.updateAuthor} />
            <br />
            Blurb: <input value={this.state.blurb} onChange={this.blurb} />
            <br />
            Add Photo: <input type="file" onChange={this.uploadPic} />
            <br />
          </div>
          <div id={`editArea${this.props.editorCount}`} dangerouslySetInnerHTML={{__html: this.props.toEdit.html}}>
          </div>
        </form>
        )
    } else {
      return (
        <form>
          <div>
            Title: <input value = {this.state.title} onChange={this.updateTitle} />
            <br />
            Author: <input value = {this.state.author} onChange={this.updateAuthor} />
            <br />
            Blurb: <input value = {this.state.blurb} onChange={this.updateBlurb} />
            <br />
            Add Photo: <input type="file" onChange={this.uploadPic} />
            <br />
          </div>
          <div id={`editArea${this.props.editorCount}`}></div>
        </form>
      )
      
    }
  }
}

const mapStateToProps = (state) => {
  return {
    toEdit: state.posts.toEdit,
    fetching: state.posts.fetching,
    saved: state.posts.saved,
    editorCount: state.posts.editorCount
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, Actions)(AddStory);