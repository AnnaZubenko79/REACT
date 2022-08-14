import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  mouseFocusHandle = (color) => {
    this.setState({
      color,
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.mouseFocusHandle('Coral')}
            onMouseOut={() => this.mouseFocusHandle('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.mouseFocusHandle('Aqua')}
            onMouseOut={() => this.mouseFocusHandle('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.mouseFocusHandle('Bisque')}
            onMouseOut={() => this.mouseFocusHandle('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
