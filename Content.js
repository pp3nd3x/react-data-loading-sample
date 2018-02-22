import React, { Fragment } from 'react';

class ContentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData || []
    };
  }

  render() {
    return (
      <Fragment>
        <h1>My awesome application using React {this.props.version}!!!</h1>
        {this.state.data &&
          this.state.data.length &&
          this.state.data.map(user => {
            return (
              <div>
                <code
                  style={{
                    display: 'block',
                    background: 'black',
                    color: 'green',
                    padding: '2em'
                  }}
                >
                  {JSON.stringify(user.data.results, 2, null)}
                </code>
              </div>
            );
          })}
      </Fragment>
    );
  }
}

export default ContentSection;
