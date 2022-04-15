import React, { useState } from 'react';
import './App.css';



function App() {

  let [title, titleChg] = useState(['여름 티셔츠 추천', '선글라스 어디 브랜드가 간지임?']);
  let [likes, likesChg] = useState(0);

  function test(){
    let titleCopy = [...title];
    titleCopy[0] = '여름 모자 추천';
    titleChg(titleCopy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>나만의 로그</div>
      </div>
      <button onClick={test}>버튼</button>
      <div className="list">
        <h3>{title[0]} <span onClick={() => { likesChg(likes + 1) }}>👍</span> {likes}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
