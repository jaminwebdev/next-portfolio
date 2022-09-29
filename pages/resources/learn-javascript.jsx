/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import ScrollReveal from "../../components/ScrollReveal";
import SVGSeparator from "../../components/SVGSeparator";
import AppCard from "../../components/cards/AppCard";
import LinkButton from "../../components/buttons/LinkButton";
import AppIcon from "../../components/AppIcon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const LearnJS = () => {
  return (
    <>
      <Head>
        <title>
          Learn JavaScript: Free Tutorials and Videos | HeBuildsWebsites
        </title>
        <meta
          name="description"
          content="These free resources are the best places to start learning JavaScript"></meta>
      </Head>
      <main>
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
              <div className="grid content-center">
                <div className="pr-5 grid content-center gap-8">
                  <h1>
                    Learn <br></br>
                    <span className="text-secondary"> JavaScript</span>
                  </h1>
                  <h4 className="font-normal leading-relaxed">
                    These are <em>the</em> best free resources for learning
                    JavaScript.
                  </h4>
                </div>
              </div>
              <div className="z-10 relative grid place-content-center">
                <ScrollReveal bounce>
                  <div className="hidden lg:block">
                    <Image
                      src="/images/learn-js-heading.png"
                      width={193}
                      height={193}
                      alt="JavaScript Logo"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
          <SVGSeparator
            type="tilt"
            classNames="bottom tiltDownLeft"
            customHeight="100px"
          />
        </header>
        <section id="jsBasics" className="pt-24 pb-12">
          <Container>
            <h2 className="text-center">
              The <span className="text-secondary">Basics</span>
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-10 text-lg">
              Before you tackle the world of frameworks, you should be familiar
              with the fundamentals of both programming and core JS. Any one of
              these should get you up to speed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                heading="freeCodeCamp.org"
                body="Often touted as the best place to start (well deserved), you'll walk away with a strong foundation."
                bgImg="/images/learn-js/learn-freecodecamp.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>

                    <LinkButton
                      origin="external"
                      variant="ghost"
                      link="https://www.youtube.com/watch?v=jS4aFq5-91M">
                      Watch
                      <AppIcon icon="video" classNames="w-5 stroke-secondary" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="Codecademy.org"
                body="Codecademy is another great interactive platform to get up and running with fundamentals in JavaScript."
                bgImg="/images/learn-js/learn-codecademy.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.codecademy.com/learn/learn-intermediate-javascript">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="javascript.info"
                body="Great diagrams, a fantastic table of contents, and solid code examples. What more could you want?"
                bgImg="/images/learn-js/learn-javascriptinfo.jpg"
                btns={
                  <LinkButton origin="external" link="https://javascript.info/">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="JavaScript30"
                body="Looking for more of a video/codealong format with hands on examples? Wes Bos has a fantastic free course."
                bgImg="/images/learn-js/learn-javascript30.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://javascript30.com/">
                    Watch
                    <AppIcon icon="video" classNames="w-5 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Digital Ocean"
                body="Digital Ocean's introduction to JavaScript tutorials are also top notch."
                bgImg="/images/learn-js/learn-digital-ocean.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="closureScope" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  Closure & <span className="text-secondary">Scope</span>
                </h2>
                <p className="my-5">
                  Closure gives you access to an outer scope from within a given
                  function. For every function you write, a new closure is
                  created. This incredible feature in combination with
                  first-class functions gives us the ability to create privacy
                  while achieving a high level of flexibility and reuse.
                </p>
                <p>
                  Check out some of my favorite articles and videos on the topic
                  below.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// closure snippet
function OuterFunction() {
  let outerFnVariable = 5

  function innerFunction() {
    // can access variable outside of function's scope
    alert(outerFnVariable);
  }

  innerFunction();
}
// can't access variables created inside a function 
// from the outside
outerFnVariable = 6 // error - undefined
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="MDN"
                body="Mozilla Developer Network's documentation is excellent for any topic in JS."
                bgImg="/images/learn-js/learn-md.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="JSTutorial"
                body="JSTutorial is another great source for any fundamental JavaScript topics."
                bgImg="/images/learn-js/learn-js-tutorial.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.javascripttutorial.net/javascript-closure/">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Fireship"
                body="Jeff Delaney's channel, Fireship, is a fantastic resource for not just JS, but plenty of other topics."
                bgImg="/images/learn-js/learn-fireship.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=vKJpN5FAeF4">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="James Q Quick"
                body="This is one of the videos (and channels) I found that made closure more concrete for me early on."
                bgImg="/images/learn-js/learn-james-closure.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=Ys9VxrJjAyU">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Kyle Simpson"
                body="Kyle Simpson's talks on anything JavaScript are phenomenal."
                bgImg="/images/learn-js/learn-kyle-simpson.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=dHYhMP8ESuk">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="RoadsideCoder"
                body="RoadsideCoder's video on closure isn't just good for closure, but also for interview preparation in general."
                bgImg="/images/learn-js/learn-roadside-coder.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=sZjlEKbaykc">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="firstClassFunctions" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  First Class <br></br> & Higher Order<br></br>
                  <span className="text-secondary">Functions</span>
                </h2>
                <p className="my-5">
                  Adding to JS’s flexibility, functions are treated like any
                  other variable - meaning you can pass them around to other
                  functions, or return from another function.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// first class functions
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass 'sayHello' as an argument to 'greeting' function
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="MDN"
                body="Mozilla Developer Network's documentation is excellent for any topic in JS."
                bgImg="/images/learn-js/learn-md.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="javatpoint.com"
                body="javatpoint has a lot of good info for the JavaScript newbie."
                bgImg="/images/learn-js/learn-javatpoint.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.javatpoint.com/js-first-class-function">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="DevTuts"
                body="DevTuts covers a great deal of vanilla JS topics - great for newcomers and interview preppers!"
                bgImg="/images/learn-js/learn-devtuts.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=4UeWzn4jzwM">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="procademy"
                body="procademy does a great job of explaining how functions are stored & referenced in memory."
                bgImg="/images/learn-js/learn-procademy.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=RIlfITk-xKw">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="All Things JS"
                body="All Things JS uses callbacks to showcase a higher order functions - the distinction is small, but important."
                bgImg="/images/learn-js/learn-allThings.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=O9lMynNdka4">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="arrayMethods" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  Array <br></br>
                  <span className="text-secondary">Methods</span>
                </h2>
                <p className="my-5">
                  Array&apos;s are incredibly useful, as are all the methods
                  available to the data-type. Mastering these in addition to the
                  previous sections is essential to creating powerful apps.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// array methods
[🐮, 🥔, 🐔, 🌽].map(cook) // [🍔, 🍟, 🍗, 🍿]
[🍔, 🍟, 🍗, 🍿].filter(isVegetarian) // [🍟, 🍿]
[🍔, 🍟, 🍗, 🍿].reduce(eat) // 💩
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="Web Dev Simplified"
                body="Kyle does a great job at quickly summing up the most useful array methods."
                bgImg="/images/learn-js/learn-webdev-arrays.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://www.youtube.com/watch?v=R8rmfD9Y5-c">
                      Watch
                      <AppIcon icon="video" classNames="w-4 stroke-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="javascript.info"
                body="javascript.info's breakdown of array methods is masterful. Tons of great examples."
                bgImg="/images/learn-js/learn-javascriptinfo.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://javascript.info/array-methods">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Freecodecamp"
                body="freeCodeCamp's articles and breakdowns are always great starting points."
                bgImg="/images/learn-js/learn-freecodecamp-arrays.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.freecodecamp.org/news/the-javascript-array-handbook/">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Akshay Saini"
                body="Akshay does a great job of explaining reduce in this lengthy video about array methods."
                bgImg="/images/learn-js/learn-akshay.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=zdp0zrpKzIE">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Traversy Media"
                body="If you've spent any time searching anything JS on YouTube, Traversy Media has likely come up."
                bgImg="/images/learn-js/learn-traversy-arrays.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=rRgD1yVwIvE">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="functional" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  Functional <br></br>
                  <span className="text-secondary">JavaScript</span>
                </h2>
                <p className="my-5">
                  The journey to mastering functional programming is a long one,
                  as it isn’t an easy paradigm for most to intuitively
                  understand. These introductory articles and videos are a good
                  start.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// functional js
greet(firstLetterUppercase(getFirstName('james wilson')))
// bit hard to read, innit?
const greetByFirstName = 
  compose(greet, firstLetterUppercase, getFirstName)

greetByFirstName('james wilson')
// composition makes this easier to reason about
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="JavaScript.plainenglish"
                body="This article is a fantastic intro to functional programming in JS."
                bgImg="/images/learn-js/learn-javascript-plainenglish.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://javascript.plainenglish.io/functional-javascript-17032a113930">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="HolyJS"
                body="This was one of the first videos I watched to wrap my head around the what and why of functional programming."
                bgImg="/images/learn-js/learn-holyjs.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=qtsbZarFzm8">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Fun Fun Function"
                body="Fun Fun Function has one of my favorite series on the building blocks of functional JS."
                bgImg="/images/learn-js/learn-fff-hof.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Fun Fun Function"
                body="I did say this channel was one of my favorites..."
                bgImg="/images/learn-js/learn-fff-functional.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=VGB9HbL1GHk">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Ramda"
                body="If you're serious about functional js, Ramda is a favored library among the community."
                bgImg="/images/learn-js/learn-ramda.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=AINnOyUVEyI">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Lodash"
                body="Lodash is another favorite library among the functional JS crowd. You'll probably see it more in the wild."
                bgImg="/images/learn-js/learn-lodash.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=YyxliogSwrM">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="oop" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  Object Oriented <br></br>
                  <span className="text-secondary">JavaScript</span>
                </h2>
                <p className="my-5">
                  While I’m not the biggest OOP evangelist, it’s another
                  powerful paradigm that many programmers use. Chances are,
                  you’re going to run into some OOP code base or OOP-based
                  library.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// oop js
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(this.name + ': bark! bark!')
  }
}

const Ralph = new Dog();
Ralph.bark(); // Ralph: bark! bark!
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="CSS Tricks"
                body="CSS-Tricks isn't just for CSS - they have a great introduction to OOP JS."
                bgImg="/images/learn-js/learn-csstricks.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="MDN"
                body="MDN has a great series on not just OOP, but also the basics of objects and prototypes."
                bgImg="/images/learn-js/learn-md.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Programming with Mosh"
                body="Mosh has great visualizations (and background music 😎)."
                bgImg="/images/learn-js/learn-mosh.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=PFmuCDHHpwk">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Traversy Media"
                body="Traversy Media's laid back approach to complicated topics makes intro OOP a breeze."
                bgImg="/images/learn-js/learn-traversy-oop.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=vDJpGenyHaA">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Codesmith"
                body="Will does a great job in this video - and he has great courses on Frontend Masters."
                bgImg="/images/learn-js/learn-codesmith.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=aAAS9cEuFYI">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="PedroTech"
                body="PedroTech is another favorite for a laid back approach."
                bgImg="/images/learn-js/learn-pedrotech.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=GEuS0tfLfEY">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
        <section id="async" className="pt-32 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2>
                  Async <br></br>
                  <span className="text-secondary">JavaScript</span>
                </h2>
                <p className="my-5">
                  JavaScript’s single-threaded nature can make asynchronous
                  tasks and events confusing to even intermediate developers.
                  These resources really solidifed things for me, and now
                  asynchronous code is second nature.
                </p>
              </div>
              <div className="row-start-1 lg:row-start-auto">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`// async js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
// promise
resolveAfter2Seconds.then(console.log)
// async/await
const asyncCall = async() => { 
  const result = await resolveAfter2Seconds()
  console.log(result)
}
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
              <AppCard
                heading="MDN"
                body="Async can be tricky to wrap your head around. Start with the holy grail - MDN."
                bgImg="/images/learn-js/learn-md.jpg"
                btns={
                  <>
                    <LinkButton
                      origin="external"
                      link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing">
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  </>
                }></AppCard>
              <AppCard
                heading="freeCodeCamp.org"
                body="freeCodeCamp has a great breakdown for async newbies."
                bgImg="/images/learn-js/learn-fcc-async.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.freecodecamp.org/news/asynchronous-javascript-explained/">
                    Read
                    <AppIcon icon="eyes" classNames="w-4 fill-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Codevolution"
                body="Codevolutionhas a great breakdown of all things async - history, examples, use cases, etc."
                bgImg="/images/learn-js/learn-codevolution.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=exBgWAIeIeg">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Fun Fun Function"
                body="Fun Fun Function's video made async far more concrete after discovering the channel."
                bgImg="/images/learn-js/learn-fff-async.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=568g8hxJJp4">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="Fireship"
                body="Fireship is fantastic for those bite-size 5 minute breakdowns + extra tips & tricks."
                bgImg="/images/learn-js/learn-fireship-async.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=vn3tm0quoqE">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
              <AppCard
                heading="James Q Quick"
                body="There's something about James's presentation that makes it all so easy."
                bgImg="/images/learn-js/learn-quick-js.jpg"
                btns={
                  <LinkButton
                    origin="external"
                    link="https://www.youtube.com/watch?v=GEuS0tfLfEY">
                    Watch
                    <AppIcon icon="video" classNames="w-4 stroke-white" />
                  </LinkButton>
                }></AppCard>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default LearnJS;
