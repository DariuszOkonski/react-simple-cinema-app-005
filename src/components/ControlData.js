import React from 'react';

const ControlData = (props) => {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        id="check"
        value={props.state.checked}
        onChange={props.check}
      />
      <label htmlFor="check">I have at least 16 years</label>

      <button onClick={props.click}>buy ticket</button>
    </React.Fragment>
  );
}

export default ControlData;