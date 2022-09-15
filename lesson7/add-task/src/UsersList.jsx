import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToRender = this.props.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={itemsPerPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
