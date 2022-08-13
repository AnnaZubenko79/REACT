import React from 'react';

const Greeting = (props) => {
  const age = new Date(new Date() - props.birthDate).getHours();
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
    </div>
  );
};
export default Greeting;
