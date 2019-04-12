import React from 'react';

const DisplayData = (props) => {
  const showMessage = !props.state.checked ? 'You can not watch that movie if you have less then 16 year old!' : 'You can watch that movie! Enjoy!';

  return (
    <>
      {props.state.showData ? <h2>{showMessage}</h2> : null}

    </>
  );
}

export default DisplayData;