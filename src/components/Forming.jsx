import React from "react"
import MyForm from "./MyForm";
import showResults from "./func/showResults";

const Forming = (() => {
  return (
    <>
      <div>おはよ。</div>
      <h3>フォーム画面</h3>
      <MyForm onSubmit={showResults}/>
    </>
  )
})

export default Forming;
