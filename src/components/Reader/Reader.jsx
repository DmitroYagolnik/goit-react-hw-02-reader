import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from './Render.module.css';

class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    activePublicationsIndex: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      activePublicationsIndex: prevState.activePublicationsIndex + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      activePublicationsIndex: prevState.activePublicationsIndex - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { activePublicationsIndex } = this.state;
    const itemsLength = items.length;
    return (
      <div className={styles.reader}>
        <Controls
          activePublicationsIndex={activePublicationsIndex}
          itemsLength={itemsLength}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />

        <Counter
          activePublicationsIndex={activePublicationsIndex}
          itemsLength={itemsLength}
        />
        {itemsLength > 0 && (
          <Publication
            activePublicationsTitle={items[activePublicationsIndex].title}
            activePublicationsText={items[activePublicationsIndex].text}
          />
        )}
      </div>
    );
  }
}

export default Reader;
