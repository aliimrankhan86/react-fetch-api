import React from "react";

export default class Names extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.names.map(e => {
            return (
              <p>{e.name}</p>
            )
          })
        }
      </div>
    );
  }
}
