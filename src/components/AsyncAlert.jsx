import React from 'react';

const AsyncAlert = (() => {

  function syncAlert() {
    setTimeout(() => {alert("まだだ。。。")},0)
    console.log("今だ！いけー")
  }
  syncAlert();

  return (
    <>
      <div>今日も一日お疲れ様。</div>
    </>
  )
})

export default AsyncAlert;
