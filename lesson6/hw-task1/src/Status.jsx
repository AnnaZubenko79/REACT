import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = (props) => (props.isOnline ? <Online /> : <Offline />);

export default Status;
