import React from 'react';

type Props = {
  children?: React.ReactNode;
};

class YourComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
        {/* 他のコンテンツ */}
      </div>
    );
  }
}

export default YourComponent;
