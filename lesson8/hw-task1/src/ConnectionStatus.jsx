import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    connectStatus: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggle);
    window.addEventListener('offline', this.onToggle);
  }

  onToggle = (e) => {
    this.setState({
      connectStatus: e.type,
    });
  };

  render() {
    const offlineStatusClass =
      this.state.connectStatus === 'offline' ? 'status_offline' : '';
    return (
      <div className={`status ${offlineStatusClass}`}>
        {this.state.connectStatus}
      </div>
    );
  }
}
export default ConnectionStatus;
