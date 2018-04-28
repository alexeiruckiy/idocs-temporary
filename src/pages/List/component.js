import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from '@/components/Post';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    find: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.find();
  }

  render() {
    const { items } = this.props;

    return items.map(item => <Post key={item.id} data={item} />);
  }
}

export default List;