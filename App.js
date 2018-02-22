import React, { Fragment } from 'react';
import ContentSection from './Content';
import DataLoader from './dataLoaderHoC';

export default props => {
  const version = React.version;
  // const initialData = getInfo() || {};
  // const info = await getInfo();

  return (
    <Fragment>
      <header style={{ background: 'blue', color: 'white', padding: '20px' }}>
        Some header
      </header>
      <DataLoader component={ContentSection} version={version} />
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
