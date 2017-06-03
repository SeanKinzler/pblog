import react, { Component } from 'react';
import store from '../store/createStore.js';
import {browserHistory} from 'react-router-dom';
import ua from 'universal-analytics';
import _ from 'underscore';
export default class Analytics extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    let visitor;
    if (localStorage.PoliBlogVisitor === undefined) {
      visitor = ua('UA-100409522-1');
      localStorage.PoliBlogVisitor = visitor.cid;
    } else {
      visitor = ua('UA-100409522-1', localStorage.PoliBlogVisitor);
    }
    visitor.pageview(this.props.history.location.pathname, err => {
      if(err) {
        console.log('analytics err: ', err);
      } else {
        console.log('sent visitor page view');
      }
    });
    this.visitor = visitor;
  }
  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.visitor.pageview(this.props.history.location.pathname, err => {
        if(err) {
          console.log('analytics err: ', err);
        } else {
          console.log('sent visitor page view');
        }
      });
    });
    
  }

  render() {
    return null;
  }
}
