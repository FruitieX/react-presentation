import React, { Component } from 'react';

import Counter from './examples/Counter';
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

const styleSheet = createStyleSheet('Components', theme => ({
  title: {
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    fontSize: 30,
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

class Components extends Component {
  render() {
    return (
      <div>
        <Step id="components" x={-200} y={600} z={500} rotate={5}>
          <Card>
            <CardContent>
              <center>
                <div className="App-header">
                  <div>Components</div>
                </div>
              </center>
              <Typography className={this.props.classes.title}>
                So far we have only dealt with one component at a time: the
                Counter
              </Typography>
              <ul style={{ fontSize: 30 }}>
                <li>Components are an important concept in React</li>
                <li>They allow us to split our app into logical parts</li>
                <li>
                  Components are <b>reusable</b>, can reduce code duplication
                </li>
                <li>They can be nested as we'll see in the next example...</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-counters" x={500} y={1200} z={700} rotate={5}>
          <Card>
            <CardContent>
              <h4>Let's try rendering a list of Counters!</h4>
              <PrismCode component="pre" className="language-jsx">
                {`// Import the Counter component we implemented before in another file
import Counter from './Counter';

class CounterContainer extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}`}
              </PrismCode>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
                <div style={{ paddingRight: 32 }}>
                  <Counter />
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="components-case-sensitive"
          x={50}
          y={1200}
          z={720}
          rotateY={2}
          rotateZ={7}
        >
          <div style={{ width: 400 }}>
            <Card>
              <CardContent>
                <h5
                  style={{
                    color: 'blue',
                    fontFamily: "'Gloria Hallelujah', cursive",
                    fontSize: 48,
                    opacity: 0.5,
                  }}
                >
                  Note on case-sensitivity
                </h5>
                <ul
                  style={{
                    fontSize: 28,
                  }}
                >
                  <li>
                    Element names are <b>case sensitive</b>
                  </li>
                  <li>React assumes that names starting with:</li>
                  <ul
                    style={{
                      fontSize: 22,
                    }}
                  >
                    <li>
                      An <b>upper-case</b> letter are <b>React components</b>
                    </li>
                    <li>
                      A <b>lower-case</b> letter are <b>normal HTML elements</b>
                    </li>
                  </ul>
                  <li>
                    So remember to capitalize the first letter in your React
                    components!
                  </li>
                </ul>
                <div
                  style={{
                    color: 'blue',
                    width: 300,
                    left: 700,
                    top: 280,
                    position: 'absolute',
                    fontFamily: "'Gloria Hallelujah', cursive",
                    fontSize: 32,
                    textAlign: 'center',
                    transform: 'rotate(-10deg)',
                    opacity: 0.5,
                  }}
                >
                  &lt;- Components
                </div>
                <div
                  style={{
                    color: 'blue',
                    width: 300,
                    left: 650,
                    top: 410,
                    position: 'absolute',
                    fontFamily: "'Gloria Hallelujah', cursive",
                    fontSize: 32,
                    textAlign: 'center',
                    transform: 'rotate(16deg)',
                    opacity: 0.5,
                  }}
                >
                  &lt;- HTML element
                </div>
              </CardContent>
            </Card>
          </div>
        </Step>
        <Step id="components-parts" x={1400} y={1200} z={700} rotate={7}>
          <Card>
            <CardContent>
              <h4>Components split the app into logical parts</h4>
              <ul style={{ fontSize: 30 }}>
                <li>Development work can easily be split up accordingly</li>
                <li>Components are independent from each other</li>
                <li>TODO: diagram</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-props" x={1500} y={1800} z={900} rotate={-7}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Component properties or "props"</h4>
              <ul style={{ fontSize: 26 }}>
                <li>
                  We can pass key/value pairs known as <b>props</b> to
                  components
                </li>
                <li>
                  This is useful for passing <b>data</b> & <b>functions</b> to
                  child components
                </li>
                <li>
                  Children receive props as a JS object called{' '}
                  <b>
                    <code>this.props</code>
                  </b>
                </li>
              </ul>
              <div className={this.props.classes.codeContainer}>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-jsx">
                    {`class TextDisplay extends Component {
  render() {
    return <div>{ this.props.text }</div>;
  }
}

const sampleText = 'Testing 1, 2';
class TextContainer extends Component {
  render() {
    return
      <div>
        <TextDisplay text="Yay this works!" />
        <TextDisplay text={sampleText} />
      </div>;
  }
}`}
                  </PrismCode>
                </div>
                <div className={this.props.classes.code}>
                  <PrismCode component="pre" className="language-html">
                    {`<div>
  <div>
    Yay this works!
  </div>
  <div>
    Testing 1, 2
  </div>
</div>`}
                  </PrismCode>
                </div>
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="props-counter"
          x={600}
          y={450}
          z={-200}
          rotate={-4}
          rotateX={-20}
        >
          <div style={{ height: 700, width: 900 }}>
            <div>
              <h4
                style={{
                  color: 'blue',
                  width: 300,
                  left: 100,
                  top: 530,
                  position: 'absolute',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  fontSize: 32,
                  opacity: 0.5,
                }}
              >
                In our counter example, we passed the onClick functions as props
              </h4>
            </div>
            <div
              style={{
                color: 'blue',
                fontFamily: "'Gloria Hallelujah', cursive",
                left: 420,
                top: 480,
                position: 'absolute',
                fontSize: 64,
                textAlign: 'center',
                transform: 'rotate(-70deg)',
                opacity: 0.5,
              }}
            >
              -&gt;
            </div>
          </div>
        </Step>
        <Step id="components-state" x={2200} y={1100} z={1200} rotate={-2}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Component state</h4>
              <ul style={{ fontSize: 26 }}>
                <li>
                  In React we can have stateful components that manage their own{' '}
                  <b>state</b>
                </li>
                <li>
                  Our Counter component is an example of a stateful component
                </li>
              </ul>
              <Typography className={this.props.classes.title}>
                Read/write access to component state
              </Typography>
              <ul style={{ fontSize: 26 }}>
                <li>
                  Components can access their own state via a JS object{' '}
                  <b>
                    <code>this.state</code>
                  </b>
                </li>
                <li>
                  We may provide an initial state by manually setting{' '}
                  <b>
                    <code>this.state</code>
                  </b>
                </li>
                <li>
                  Further state updates <b>must</b> be done using{' '}
                  <b>
                    <code>this.setState()</code>
                  </b>
                </li>
                <ul style={{ marginTop: 0 }}>
                  <li>This tells React that a component re-render is needed</li>
                  <li>
                    Note that{' '}
                    <b>
                      <code>setState()</code>
                    </b>{' '}
                    is asynchronous, changes are not applied immediately and may
                    be batched for performance reasons
                  </li>
                </ul>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="state-counter"
          x={500}
          y={450}
          z={-200}
          rotate={4}
          rotateX={-10}
        >
          <div style={{ height: 700, width: 900 }}>
            <div>
              <h4
                style={{
                  color: 'blue',
                  width: 300,
                  left: 50,
                  top: 30,
                  position: 'absolute',
                  fontFamily: "'Gloria Hallelujah', cursive",
                  fontSize: 32,
                  opacity: 0.5,
                }}
              >
                Let's recall the counter example again...
              </h4>
              <Card
                style={{
                  width: 350,
                  left: 0,
                  top: 230,
                  position: 'absolute',
                  fontSize: 20,
                }}
              >
                <CardContent>
                  Here, we:
                  <ul>
                    <li>Set an initial state:</li>

                    <PrismCode component="pre" className="language-jsx">
                      {`state = { value: 0 };`}
                    </PrismCode>
                    <li>Update state using:</li>
                    <PrismCode component="pre" className="language-jsx">
                      {`this.setState()`}
                    </PrismCode>
                    <li>Display current state with:</li>
                    <PrismCode component="pre" className="language-jsx">
                      {`{this.state.value}`}
                    </PrismCode>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Step>
        <Step id="state-mutation" x={2500} y={1700} z={1200} rotate={3}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Mutating component state</h4>
              <ul style={{ fontSize: 26 }}>
                <li>
                  We have to be careful{' '}
                  <b>
                    not to even accidentally mutate <code>this.state</code>{' '}
                    directly
                  </b>, for example say we want to add an element to an array:
                </li>

                <PrismCode component="pre" className="language-jsx">
                  {`// This stores a reference to this.state.someArray in arr
const arr = this.state.someArray;

// Here we append to arr, but this is merely a reference to
// this.state.someArray! As such we just mutated this.state. 🔥🔥🔥
arr.push(someElement);

// While this part is correct, the damage has already been done
this.setState({ someArray: arr })
`}
                </PrismCode>

                <li>One possible solution:</li>

                <PrismCode component="pre" className="language-jsx">
                  {`// This creates a new array with all elements from arr + someElement
this.setState({ someArray: [ ...arr, someElement ] });`}
                </PrismCode>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="component-lifecycle" x={600} y={2000} z={1400} rotate={-3}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Component lifecycle methods</h4>
              <ul style={{ fontSize: 26 }}>
                <li>
                  Components may not be "active" or "visible" all the time in
                  your app
                </li>
                <ul style={{ marginTop: 0, color: '#777' }}>
                  <li>
                    Example: User navigates between views in app, we only render
                    visible components
                  </li>
                </ul>
                <li>
                  We may want to handle events such as component being rendered
                  for the first time, or component being removed
                </li>
                <ul style={{ marginTop: 0, color: '#777' }}>
                  <li>
                    Example: Fetch data from an API as soon as component is
                    visible
                  </li>
                </ul>
                <li>
                  React conveniently allows us to do that with lifecycle
                  methods!
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="lifecycle-example" x={-400} y={2000} z={1400} rotate={-5}>
          <Card style={{ width: 900 }}>
            <CardContent>
              <h4>Most common lifecycle methods:</h4>
              <PrismCode component="pre" className="language-jsx">
                {`class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    // Called before component renders for the first time.
    // Avoid introducing any side-effects here.
    // Setting up initial state here based on props is fine.
  }
  componentDidMount() {
    // Called when component has been rendered for the first time.
    // This is a good place to do API calls for example.
    // You can also set up timers with setTimeout() here.
  }
  componentWillReceiveProps(nextProps) {
    // Called when props passed to component have changed.
    // You can use this to compare old/new props and take action accordingly.
  }
  componentWillUnmount() {
    // Called before a component unmounts (= about to be removed from the DOM)
    // Good place to cancel any setTimeout() timers with clearTimeout()
  }
}`}
              </PrismCode>
            </CardContent>
          </Card>
        </Step>
        <Step id="coding-2" x={-700} y={2800} z={1300} rotateY={15} rotateZ={7}>
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
            <div className={this.props.classes.codeContainer}>
              <div className={this.props.classes.code}>
                <Card>
                  <CardContent>
                    <p style={{ fontSize: 22 }}>
                      1. Implement multiple Counters
                    </p>
                    <ul style={{ fontSize: 18, marginTop: 0 }}>
                      <li>
                        Hint: Write a <b>CounterWrapper</b> component that
                        renders multiple Counter components like so:
                      </li>
                      <PrismCode component="pre" className="language-jsx">
                        {`render() {
  <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
}`}
                      </PrismCode>
                    </ul>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 32 }}>
                  <CardContent>
                    <p style={{ fontSize: 22 }}>
                      3. Try making each counter value increase once every
                      second
                    </p>
                    <ul style={{ fontSize: 18, marginTop: 0 }}>
                      <PrismCode component="pre" className="language-jsx">
                        {`componentDidMount() {
  this.timer = setTimeout(...);
}
componentWillUnmount() {
  clearTimeout(this.timer);
}`}
                      </PrismCode>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className={this.props.classes.code}>
                <Card>
                  <CardContent>
                    <p style={{ fontSize: 22 }}>
                      2. Implement <b>Add counter</b> &amp;{' '}
                      <b>Remove counter</b> buttons
                    </p>
                    <ul style={{ fontSize: 18, marginTop: 0 }}>
                      <li>
                        Hint: Keep track of how many counters you have in the
                        state of CounterWrapper
                      </li>
                      <li>Hint: Use a loop:</li>
                      <PrismCode component="pre" className="language-jsx">
                        {`render() {
  const counters = [];

  for (let i = 0; i < ?; i++) {
    counters.push(<Counter />);
  }

  return
    <div>
      { counters }
    </div>;
}`}
                      </PrismCode>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Components);
