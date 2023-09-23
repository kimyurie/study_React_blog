import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let [글제목1, a] = useState('여자 코트 추천');
  // let [글제목2, b] = useState('강남 우동 맛집');
  // let [글제목3, c] = useState('파이썬독학');

  let [글제목, a] = useState(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']);


  // let num = [1,2];
  // let [a, c] = [1,2];

  // let a = num[0];
  // let c = num[1];

  // 왜 state 써야함?
  // 자동재랜더링 때문
  // 언제 state 써야함?
  // 변동시 자동으로 html에 반영되게 만들고 싶으면 state
  // => 자주 변경될거 같은 html 부분은 state로 만들어놓기

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
