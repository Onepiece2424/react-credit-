import React, { useEffect } from 'react';

const AsyncAlert = (() => {

  // 非同期処理の作成
  async function showJsonText() {
    const response = await fetch ('http://127.0.0.1:5500/test.json');
    const json = await response.json();
    const resultBox = document.querySelector('.result');
    resultBox.textContent = json.text;
  }
  showJsonText();

  // AWSのとあるJSONデータ
  useEffect (() => {
    (async() => {
      const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=AWS");
      const data = await res.json()
      console.log(data.items)
    })()
  },[])
  // const test_place = fetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      <div className='result'>今日も一日お疲れ様。</div>
    </>
  )
})

export default AsyncAlert;
