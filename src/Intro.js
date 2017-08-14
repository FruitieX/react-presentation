import React, { Component } from 'react';

import { PrismCode } from 'react-prism';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import JQueryCounter from './examples/JQueryCounter';
import ReactCounter from './examples/ReactCounter';

import jqueryLogo from './assets/jquery-logo.png';
import reactLogo from './assets/react-logo.png';

import jquerySmall from './assets/jquery-small.svg';
import jqueryBig from './assets/jquery-big.svg';
import reactSmall from './assets/react-small.svg';
import reactBig from './assets/react-big.svg';

import logo from './assets/react-logo.png';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Intro', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  code: {
    padding: 16,
    flex: 1,
  },
}));

class Intro extends Component {
  render() {
    return (
      <div>
        <Step id="welcome" x={1100} y={800} z={2000}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="React logo" />
              <div>Welcome to React!</div>
              <div>Find this presentation at:</div>
              <h6>https://haaga-helia-react.surge.sh</h6>
            </div>
          </center>
        </Step>
        <Step id="agenda" x={1800} y={100} z={2000}>
          <Card>
            <CardContent>
              <h4>Monday (Lecture 1)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Modern JavaScript - ES6</li>
                <li>React basics through examples</li>
                <li>Background, comparison to other frameworks</li>
                <li>JSX syntax</li>
                <li>
                  <b>Exercise: </b>Environment setup
                </li>
                <li>
                  <b>Exercise: </b>Implementing a counter
                </li>
              </ul>
              <h4>Tuesday (Lecture 2)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>React Components:</li>
                <ul style={{ fontSize: 24, marginTop: 0 }}>
                  <li>Component props</li>
                  <li>Component state</li>
                  <li>Lifecycle methods</li>
                </ul>
                <li>
                  <b>Exercise: </b>Implementing multiple counters using React
                  components
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="es6-intro" x={1200} y={-800} z={2000} rotate={-10}>
          <Card>
            <CardContent>
              <h4>Modern JavaScript - ES6</h4>
              <ul style={{ fontSize: 32 }}>
                <li>ES6 is a set of extensions to JavaScript</li>
                <li>React makes use of a few of these:</li>
              </ul>
            </CardContent>
          </Card>
          <div style={{ marginLeft: -32 }}>
            <div className={this.props.classes.codeContainer}>
              <div className={this.props.classes.code}>
                <Card>
                  <CardContent>
                    <div style={{ fontSize: 30 }}>
                      <code>let</code>
                    </div>
                    <div style={{ fontSize: 22 }}>
                      <code>let</code> is block scoped (to <b>any</b>{' '}
                      <code>{`{}`}</code>-block):
                    </div>
                    <PrismCode component="pre" className="language-jsx">
                      {`{
  var a = 42;
  let b = 42;
}
console.log(a); // 42
console.log(b); // ReferenceError:
                // b is not defined
`}
                    </PrismCode>
                  </CardContent>
                </Card>
              </div>
              <div className={this.props.classes.code}>
                <Card>
                  <CardContent>
                    <div style={{ fontSize: 30 }}>
                      <code>const</code>
                    </div>
                    <div style={{ fontSize: 22 }}>
                      <code>const</code> is like <code>let</code> but its
                      reference cannot be changed:
                    </div>
                    <PrismCode component="pre" className="language-jsx">
                      {`const a = 42;
a = 43; // TypeError: Assignment
        // to a constant variable.`}
                    </PrismCode>
                    <div style={{ fontSize: 22 }}>
                      Note: const objects are <b>not immutable</b>:
                    </div>
                    <PrismCode component="pre" className="language-jsx">
                      {`const a = []; const b = {};
a.push(42);
b.foo = 'bar'
console.log(a, b); // [ 42 ],
                   // { foo: 'bar'}
`}
                    </PrismCode>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Step>
        <Step id="es6-arrow" x={200} y={-600} z={2000} rotate={-7}>
          <Card>
            <CardContent>
              <h4>ES6 - arrow functions</h4>
              <div
                className={this.props.classes.codeContainer}
                style={{ margin: -16, marginBottom: -32 }}
              >
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`[1, 2, 3].map(elem => {
  return elem * 2
}); // [2, 4, 6]`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`// Or even shorter, leaving out
// {} implies returning result:
[1, 2, 3].map(elem => elem * 2);`}
                  </PrismCode>
                </div>
              </div>
              <div style={{ fontSize: 22, marginTop: 16 }}>
                is equivalent to:
              </div>
              <PrismCode component="pre" className="language-jsx">
                {`[1, 2, 3].map(function(elem) {
  return elem * 2;
});`}
              </PrismCode>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 16 }}>
            <CardContent>
              <div style={{ fontSize: 22 }}>
                Arrow functions bind the value of "<code>this</code>" from
                lexical scope (surrounding code):
              </div>
              <div
                className={this.props.classes.codeContainer}
                style={{ margin: -16, marginBottom: -32 }}
              >
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`// With arrow functions
  this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v);
});`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`// Old way using .bind(this)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step id="es6-classes" x={-200} y={-1400} z={2000} rotate={-4}>
          <Card>
            <CardContent>
              <h4>ES6 - classes</h4>
              <div
                className={this.props.classes.codeContainer}
                style={{ margin: -16, marginBottom: -32 }}
              >
                <div className={this.props.classes.code}>
                  <div style={{ fontSize: 24 }}>Class definition</div>
                  <PrismCode component="pre" className="language-jsx">
                    {`class Shape {
  constructor (id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move (x, y) {
    this.x = x;
    this.y = y;
  }
}`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <div style={{ fontSize: 24 }}>ES5 equivalent</div>
                  <PrismCode component="pre" className="language-jsx">
                    {`var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};`}
                  </PrismCode>
                </div>
              </div>
              <div style={{ marginTop: 16, fontSize: 24, textAlign: 'center' }}>
                <b>Subclassing works too (React uses this a lot)</b>
              </div>
              <div
                className={this.props.classes.codeContainer}
                style={{ margin: -16, marginBottom: -32 }}
              >
                <div className={this.props.classes.code}>
                  <div style={{ fontSize: 24 }}>ES6</div>
                  <PrismCode component="pre" className="language-jsx">
                    {`class Circle extends Shape {
  constructor (id, x, y, r) {
    super(id, x, y);
    this.radius = r;
  }
}`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <div style={{ fontSize: 24 }}>ES5 equivalent</div>
                  <PrismCode component="pre" className="language-jsx">
                    {`var Circle = function (id, x, y, r) {
  Shape.call(this, id, x, y);
  this.radius = r;
};
Circle.prototype = Object.create(
  Shape.prototype);
Circle.prototype.constructor = Circle;`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="es6-template-literals"
          x={-1200}
          y={-1600}
          z={2000}
          rotate={-8}
        >
          <Card>
            <CardContent>
              <h4>ES6 - template literals</h4>
              <PrismCode component="pre" className="language-jsx">
                {`let s = \`Today is \${new Date()}\`;
console.log(s); // Today is Mon Aug 14 2017 10:14:17 GMT+0300 (EEST)

let name = 'World';
console.log(\`Hello, \${name}!\`); // Hello, World!
`}
              </PrismCode>
            </CardContent>
          </Card>
        </Step>
        <Step id="beyond-es6-spread" x={-1000} y={-600} z={2000} rotate={-4}>
          <Card>
            <CardContent>
              <h4>Beyond ES6 - spread notation</h4>
              <div style={{ fontSize: 24 }}>
                Object spread notation is useful when you want to create a new
                object instead of modifying the old instance:
              </div>
              <div
                className={this.props.classes.codeContainer}
                style={{ margin: -16, marginBottom: -32 }}
              >
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`let a = {
  name: 'Apple',
  price: 42
};

// This only causes b to reference a!
let b = a;
b.name = 'Orange'; // 🔥🔥🔥‼️

console.log(a, b);
// { name: 'Orange', price: 42 }
// { name: 'Orange', price: 42 }
`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`let a = {
  name: 'Apple',
  price: 42
};

let b = {
  ...a, // All properties from a
  name: 'Orange'
};

console.log(a, b);
// { name: 'Apple', price: 42 }
// { name: 'Orange', price: 42 }
`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step id="what-is-react" x={600} y={100} z={2000} rotate={-20}>
          <Card>
            <CardContent>
              <img
                alt="React logo"
                src={reactLogo}
                className="Full-width"
                style={{ width: 300 }}
              />
              <span
                style={{
                  color: 'blue',
                  position: 'absolute',
                  top: 35,
                  right: 480,
                  fontFamily: "'Gloria Hallelujah', cursive",
                  fontSize: 100,
                  transform: 'rotate(20deg)',
                  opacity: 0.5,
                }}
              >
                ?
              </span>

              <ul>
                <li>JS library for rendering user interfaces</li>
                <li>Maintained by Facebook</li>
                <li>Reusable components</li>
                <li>Core idea:</li>
              </ul>
              <center>
                <code>
                  {'App State => User Interface'}
                </code>
              </center>
            </CardContent>
          </Card>
        </Step>
        <Step id="jquery-counter" x={800} y={-400} z={-500} rotate={0}>
          <h4>Let's build a simple counter</h4>
          <JQueryCounter />
        </Step>
        <Step id="react-counter" x={800} y={300} z={-500} rotate={10}>
          <h4>Counter v2, using React</h4>
          <ReactCounter />
        </Step>
        <Step id="counter-comparison" x={1400} y={0} z={500} rotate={0}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <img
                alt="Small jQuery diagram"
                src={jquerySmall}
                className="Full-width"
                style={{ flex: 1 }}
              />
              <img
                alt="Small React diagram"
                src={reactSmall}
                className="Full-width"
                style={{ flex: 1 }}
              />
            </div>

            <div style={{ flex: 1, fontSize: 20 }}>
              <Card style={{ marginBottom: 32 }}>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>In the</span>
                    <img
                      alt="jQuery logo"
                      src={jqueryLogo}
                      className="Full-width"
                      style={{ width: 200 }}
                    />
                    <span> example, we:</span>
                  </div>

                  <ul>
                    <li>Create DOM elements in HTML</li>
                    <li>Set initial state for counter</li>
                    <li>Set up event handlers which:</li>
                    <ul>
                      <li>Update counter state</li>
                      <li>Find counter element from DOM</li>
                      <li>Update counter to reflect state</li>
                    </ul>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>In the</span>
                    <img
                      alt="React logo"
                      src={reactLogo}
                      className="Full-width"
                      style={{ width: 120 }}
                    />
                    <span style={{ marginLeft: 8 }}> example, we:</span>
                  </div>
                  <ul>
                    <li>Set initial state for counter</li>
                    <li>Set up event handlers which:</li>
                    <ul>
                      <li>Update counter state</li>
                    </ul>
                    <li>
                      Describe the UI in <code>render()</code>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Step>
        <Step
          id="counter-comparison-2"
          x={1400}
          y={600}
          z={400}
          rotateX={-30}
          rotateZ={-10}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }} />
            <div style={{ flex: 2, fontSize: 20 }}>
              <Card style={{ marginBottom: 32 }}>
                <CardContent>
                  <h4>
                    In the jQuery example, <i>we are responsible</i> for keeping
                    the UI in sync with state
                  </h4>
                  <ul>
                    <li>
                      In React, <b>this is not the case</b>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4>React handles DOM manipulation for us!</h4>
                  <ul>
                    <li>Based on the state we provide it</li>
                    <li>
                      And the user interface we have described in the{' '}
                      <code>render()</code> method
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Step>
        <Step id="large-app-comparison" x={2500} y={500} z={300} rotate={10}>
          <div style={{ display: 'flex' }}>
            <Card>
              <CardContent>
                <h4>The benefits show in larger apps...</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <img
                      alt="jQuery logo"
                      src={jqueryLogo}
                      className="Full-width"
                    />
                  </div>
                  <div style={{ flex: 4 }}>
                    <img
                      alt="Large jQuery diagram"
                      src={jqueryBig}
                      className="Full-width"
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <img
                      alt="React logo"
                      src={reactLogo}
                      className="Full-width"
                    />
                  </div>
                  <div style={{ flex: 4 }}>
                    <img
                      alt="Large React diagram"
                      src={reactBig}
                      className="Full-width"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Step>
        <Step id="virtual-dom-1" x={2500} y={-200} z={-200} rotate={-5}>
          <h4>It gets even better: Virtual DOM</h4>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <ul>
                <li>Manual DOM manipulation is hard and bug prone</li>
                <li>Naive implementations may do a lot of extra DOM updates</li>
              </ul>
              <Typography className={this.props.classes.title}>
                Each DOM update potentially causes the browser to:
              </Typography>
              <ul>
                <li>Recalculate CSS styles</li>
                <li>
                  Recalculate the entire layout <b>(slow)</b>
                </li>
                <li>Repaint elements</li>
                <li>Composite elements</li>
                <li>...?</li>
              </ul>
            </CardContent>
          </Card>
        </Step>

        <Step id="virtual-dom-2" x={3400} y={-200} z={-200} rotate={-10}>
          <h4>React uses Virtual DOM</h4>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                Virtual DOM aims to improve performance by:
              </Typography>
              <ul>
                <li>Bundling together multiple DOM updates</li>
                <li>Comparing new state to old, then:</li>
                <ul>
                  <li>Making only the necessary DOM updates</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                All this happens automatically behind the scenes...
              </Typography>
              <ul>
                <li>
                  And we don't need to care about it!{' '}
                  <span
                    style={{
                      color: 'blue',
                      position: 'absolute',
                      marginLeft: 32,
                      fontFamily: "'Gloria Hallelujah', cursive",
                      fontSize: 64,
                      transform: 'rotate(90deg)',
                      opacity: 0.5,
                    }}
                  >
                    :)
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="jsx-recall" x={500} y={550} z={-200} rotate={20} rotateX={20}>
          <div
            style={{
              color: 'blue',
              fontFamily: "'Gloria Hallelujah', cursive",
              fontSize: 64,
              textAlign: 'center',
              transform: 'rotate(-70deg)',
              opacity: 0.5,
            }}
          >
            -&gt;
          </div>
          <div>
            <h4
              style={{
                color: 'blue',
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 64,
                opacity: 0.5,
              }}
            >
              Recall this strange "HTML in JS" syntax...
            </h4>
          </div>
        </Step>
        <Step id="jsx" x={200} y={1400} z={-850} rotate={20} rotateX={-10}>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                ...This is JSX and it's just syntactic sugar. This:
              </Typography>
              <PrismCode component="pre" className="language-jsx">
                {`render() {
  return (
    <div>
      <div>{this.state.value}</div>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
  );
}`}
              </PrismCode>
              <Typography className={this.props.classes.title}>
                gets turned into:
              </Typography>
              <PrismCode component="pre" className="language-jsx">
                {`render() {
  return React.createElement(
    "div",
    null,
    React.createElement("div", null, this.state.value),
    React.createElement("button", { onClick, this.increment }, "+"),
    React.createElement("button", { onClick, this.decrement }, "-")
  );
}`}
              </PrismCode>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="jsx-optional"
          x={-600}
          y={1100}
          z={-450}
          rotate={30}
          rotateX={-10}
          rotateY={-10}
        >
          <div
            style={{
              color: 'blue',
              right: 200,
              top: 0,
              position: 'absolute',
              fontFamily: "'Gloria Hallelujah', cursive",
              fontSize: 64,
              textAlign: 'center',
              transform: 'rotate(-40deg)',
              opacity: 0.5,
            }}
          >
            -&gt;
          </div>
          <div>
            <h5
              style={{
                width: 600,
                color: 'blue',
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 48,
                opacity: 0.5,
              }}
            >
              Both are equally valid, but I would recommend the former...
            </h5>
          </div>
        </Step>
        <Step id="jsx-javascript-1" x={-800} y={400} z={-700} rotate={30}>
          <Card style={{ marginBottom: 32, fontSize: 30 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                JSX can contain inline JavaScript code...
              </Typography>
              <ul style={{ fontSize: 28 }}>
                <li>
                  ...by putting it in curly braces: <code>{`{ ... }`}</code>
                </li>
              </ul>
              <PrismCode component="pre" className="language-jsx">
                {`render() {
  let variable = 1;

  return (
    <div>
      { Math.round(2 / 3 + variable) }
    </div>
  );
}`}
              </PrismCode>

              <Typography className={this.props.classes.title}>
                becomes:
              </Typography>

              <PrismCode component="pre" className="language-html">
                {`<div>
  2
</div>`}
              </PrismCode>
            </CardContent>
          </Card>
        </Step>
        <Step id="jsx-javascript-2" x={-600} y={-400} z={-800} rotate={25}>
          <Card style={{ marginBottom: 32, fontSize: 30, width: 900 }}>
            <CardContent>
              <Typography className={this.props.classes.title}>
                More useful JSX examples
              </Typography>
              <div className={this.props.classes.codeContainer}>
                <div className={this.props.classes.code}>
                  <Typography className={this.props.classes.title}>
                    Loops
                  </Typography>
                  <PrismCode component="pre" className="language-jsx">
                    {`const exampleArray = [1, 2, 3];
...
<div>
  {
    exampleArray.map(item =>
      <div key={item}>
        { item }
      </div>
    )
  }
</div>`}
                  </PrismCode>
                  <PrismCode component="pre" className="language-html">
                    {`<div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <Typography className={this.props.classes.title}>
                    Conditional expressions
                  </Typography>
                  <PrismCode component="pre" className="language-jsx">
                    {`<div>
  { false && <div>Hidden</div> }
  { true && <div>Rendered</div> }
  { 5 === 4
    ? <div>5 is equal to 4</div>
    : <div>5 is not equal to 4</div>
  }
</div>`}
                  </PrismCode>
                  <PrismCode component="pre" className="language-html">
                    {`<div>
  <div>Rendered</div>
  <div>5 is not equal to 4</div>
</div>`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step id="coding-1" x={550} y={320} z={-300} rotateY={15} rotateZ={7}>
          <Card
            style={{
              marginLeft: -130,
              width: 430,
              marginBottom: 32,
              fontSize: 28,
            }}
          >
            <CardContent>
              <div>
                <h5
                  style={{
                    color: 'blue',
                    fontFamily: "'Gloria Hallelujah', cursive",
                    fontSize: 48,
                    opacity: 0.5,
                  }}
                >
                  Coding excercise
                </h5>
                <ol
                  style={{
                    fontSize: 28,
                  }}
                >
                  <li>
                    Make sure <b>Node.js</b> and <b>npm</b> are installed on
                    your machine, then:
                  </li>
                  <li>
                    <pre>npm install -g create-react-app</pre>
                  </li>
                  <li>
                    <pre>create-react-app counter-app</pre>
                  </li>
                  <li>
                    <pre>cd counter-app/</pre>
                  </li>
                  <li>
                    <pre>npm start</pre>
                  </li>
                  <li>
                    Edit <b>src/App.js</b>, implement the counter example
                  </li>
                  <li>
                    Try to implement a reset button that zeroes counter value
                  </li>
                </ol>
                <div
                  style={{
                    color: 'blue',
                    left: 300,
                    top: 425,
                    position: 'absolute',
                    fontFamily: "'Gloria Hallelujah', cursive",
                    fontSize: 64,
                    textAlign: 'center',
                    transform: 'rotate(-20deg)',
                    opacity: 0.5,
                  }}
                >
                  -&gt;
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
