import React, { Fragment } from 'react';
import ContentSection from './Content';

export default props => {
  const version = React.version;
  const initialData = props.initialData || {};
  return (
    <Fragment>
      <header style={{ background: 'blue', color: 'white', padding: '20px' }}>
        Some header
      </header>
      <ContentSection initialData={initialData} version={version} />
      <footer
        style={{
          background: 'grey',
          fontSize: '1em',
          textAlign: 'center',
          padding: '2em'
        }}
      >
        {' '}
        This is my footer
      </footer>
    </Fragment>
  );
};
