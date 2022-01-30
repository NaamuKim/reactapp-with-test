import React from 'react';

function Options({ name }) {
  return (
    <form>
      <input type='checkbox' id={`${name} options`} /> <label htmlFor={`${name} options`}>{name}</label>
    </form>
  );
}

export default Options;
