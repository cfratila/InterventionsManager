
'use strict';

import React              from 'react/addons';
import {ListenerMixin}    from 'reflux';

const App = React.createClass({

  getInitialState() {
    return {
      currentUser: {}
    };
  },

  _onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  },

  componentWillMount() {
    console.log('About to mount App');
  },

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  },

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }

});

export default App;