import React from 'react';

const AsyncAlert = (() => {

  // 非同期処理の作成
  async function showJsonText() {
    const response = await fetch ('http://127.0.0.1:5500/test.json');
    const json = await response.json();
    const resultBox = document.querySelector('.result');
    resultBox.textContent = json.text;
  }
  showJsonText();

  return (
    <>
      <div className='result'>今日も一日お疲れ様。</div>
    </>
  )
})

export default AsyncAlert;
