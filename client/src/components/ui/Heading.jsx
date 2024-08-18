import React from 'react';

export default function Heading( {header, children}) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="py-4">{header}</h1>
      {children}
    </div>
  );
}
