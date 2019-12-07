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

  handleControlsBtn = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      activePublicationsIndex:
        name === 'decrementBtn'
          ? prevState.activePublicationsIndex - 1
          : prevState.activePublicationsIndex + 1,
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
          handleControlsBtn={this.handleControlsBtn}
        />

        <Counter
          activePublicationsIndex={activePublicationsIndex}
          itemsLength={itemsLength}
        />
        {itemsLength && (
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
