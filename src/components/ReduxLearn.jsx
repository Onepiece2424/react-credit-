import React from 'react'
import { connect } from "react-redux";

const ReduxLearn = (({ count }) => {

  return (
    <>
      <div>こんにちは。</div>
      <div>Appコンポーネントから持ってきた{count}</div>
    </>
  )
})

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(ReduxLearn);
