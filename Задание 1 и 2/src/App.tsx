import React from "react";
import "./App.scss";
import Button from "./components/Button";
import { FaReact } from "react-icons/fa";
import List from "./components/List";

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.target);
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="sections">
          <h2>Buttons</h2>
          <div className="section__element">
            <p>
              loading: false; <br />
              disable: false; <br />
              type: primary; <br />
            </p>
            <Button
              loading={false}
              disabled={false}
              type="primary"
              onClick={handleClick}
            >
              <FaReact />
              this is button
            </Button>
          </div>
          <div className="section__element">
            <p>
              loading: true; <br />
              disable: false; <br />
              type: danger; <br />
              block;
            </p>
            <Button
              loading={true}
              disabled={false}
              type="danger"
              block
              onClick={handleClick}
            >
              <FaReact />
              this is button
            </Button>
          </div>
          <div className="section__element">
            <p>
              loading: false; <br />
              disable: true; <br />
              type: warning; <br />
              outlined;
            </p>
            <Button
              loading={false}
              disabled={true}
              type="warning"
              outlined
              onClick={handleClick}
            >
              <FaReact />
              this is button
            </Button>
          </div>
        </section>
        <section className="section">
          <h2>Dropdown</h2>
          <div className="section__element">
            <p>regular</p>
            <List
              title={"This is dropdown menu"}
              items={["first", "second", "third", "forth"]}
            />
          </div>
          <div className="section__element">
            <p>block</p>
            <List
              title={"This is dropdown menu"}
              items={["first", "second", "third", "forth"]}
              block
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
