// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let post = "강남 우동 맛집";
  // document.querySelector("h4").innerHTML = post;
  let [a, changeTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "아기 코트 추천",
  ]);
  let [like, addLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "20px" }}>블로그임</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...a];
          copy = copy.sort();
          changeTitle(copy);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          // 1
          // changeTitle(["여자 코트 추천", "남자 코트 추천", "아기 코트 추천"]);

          //2 fail
          // a[0] = "여자 코트 추천";
          // changeTitle(a);

          //3
          let copy = [...a];
          copy[0] = "여자 코트 추천";
          changeTitle(copy);
        }}
      >
        글 수정
      </button>

      <div className="list">
        <h4>
          {a[0]}
          <span
            onClick={() => {
              addLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>detail</p>
    </div>
  );
}

export default App;
