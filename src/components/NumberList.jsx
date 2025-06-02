import React from 'react';

function NumberList({numbers}) {
  return (
    <ul>
        {numbers.map((number) => (<li>
                                    {number}
                                 </li>))}
    </ul>
  );
};

export default NumberList;