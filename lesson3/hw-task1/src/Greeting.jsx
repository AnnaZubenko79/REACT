import React from 'react';

const userAge = (birthDate) => {
  const diffAge = new Date() - birthDate;
  const age = new Date(diffAge).getHours();
  return age;
};

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${userAge(
        props.birthDate
      )} years
      old`}
    </div>
  );
};
export default Greeting;
