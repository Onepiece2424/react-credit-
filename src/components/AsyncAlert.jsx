import React from 'react';

const AsyncAlert = (() => {

  function syncAlert() {
    alert('アラート表示')
    console.log("コンソール表示")
  }
  syncAlert();

  return (
    <>
      <div>今日も一日お疲れ様。</div>
    </>
  )
})

export default AsyncAlert;
