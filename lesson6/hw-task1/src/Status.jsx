import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = (isOnline) => {
  return <div class="status">{isOnline ? <Offline /> : <Online />}</div>;
};

export default Status;
