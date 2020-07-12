import React from 'react';

const Welcome = ({ username: { username } }) => {
  return <h1>{`Hello Welcome ${username}!`}</h1>;
};

export default Welcome;
