import React, { useState } from 'react';
import './App.css';



function App() {

  let [title, titleChg] = useState(['여름 티셔츠 추천', '선글라스 어디 브랜드가 간지임?', '오늘 설사 오지게 하네..']);
  let [likes, likesChg] = useState(0);
  let [modal, modalChg] = useState(false);
  let [titleIdx, titleIdxChg] = useState(0);

  //React 에서의 반복문(2)
  function example(){
    let arr = [];
    for(var i=0; i<3; i++){
      arr.push(<div>hi</div>);
    }

    return arr;
  }

  function modalOpen(){
    if(modal){
      modalChg(false);
    }else{
      modalChg(true);
    }   
  }

  function addPost(text){
    console.log(text)
    let arr = [...title];
    arr.unshift(text);
    titleChg(arr);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>나만의 로그</div>
      </div>
      {/* <div className="list">
        <h3>{title[0]} <span onClick={() => { likesChg(likes + 1) }}>👍</span> {likes}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}

      {/* React 에서의 반복문(1) */}
      {
        title.map((el, idx) => {
          return (
            <div className="list" key={idx}>
              <h3 onClick={modalOpen} data-id={idx}>{el}</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {/* React 에서의 반복문(2) */}
      {/* {
        example()
      } */}

        <div className="publish">
          <input></input>
        <button onClick={() => addPost()}>저장</button>
        </div>
      
      {
        modal === true
        ? <Modal title={title}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <h2>{props.title[0]}</h2>
    </div>
  )
}

export default App;
