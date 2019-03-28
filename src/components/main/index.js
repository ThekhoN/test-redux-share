import React from "react";
import { connect } from "react-redux";
import { updateData } from "../../redux/modules/data/actions";

const testData = [{ id: 1, name: "Noob1K" }];

function Main(props) {
  const { count, data, updateData } = props;
  return (
    <div>
      <button onClick={() => console.log("decrement")}>-</button>
      <span>{count}</span>
      <button onClick={() => console.log("increment")}>+</button>
      <br />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <br />
      <button
        onClick={() => {
          console.log("trigger fetch!");
          updateData(testData);
        }}
      >
        fetch
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count,
  data: state.data.data
});

const mapDispatchToProps = dispatch => ({
  updateData: payload => dispatch(updateData(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
