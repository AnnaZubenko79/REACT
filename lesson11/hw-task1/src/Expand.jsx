import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  onToggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.onToggleDialog}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isOpen && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
Expand.defaultProps = {
  isOpen: false,
  title: '',
};

export default Expand;
