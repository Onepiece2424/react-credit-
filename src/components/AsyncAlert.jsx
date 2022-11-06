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

  // AWSのとあるJSONデータを取得
  useEffect (() => {
    (async() => {
      const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=AWS");
      const test_place = await fetch("https://jsonplaceholder.typicode.com/users")
      const res_data = await res.json()
      const test_place_data = await test_place.json()

      // console.log(res_data.totalItems)
      // console.log(test_place_data)
    })()
  },[])

  return (
    <>
      <div className='result'>今日も一日お疲れ様。</div>
    </>
  )
})

export default AsyncAlert;
