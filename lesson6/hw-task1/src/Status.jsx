import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = (isOnline) => {
  return <div class="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;
