import React from 'react';
import Alert from '../Alert';
import Form from '../Form/form';
import Notes from '../Notes';

export const HomePage = () => {
  const notes = new Array(4).fill('').map((_, i) => ({id: i, title: `Note ${i + 1}`}));

  return (
    <div>
      <Alert />
      <Form />
      <hr />
      <Notes notes={notes} />
    </div>
  );
};
