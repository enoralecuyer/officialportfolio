import React from 'react';
import Emoji from '../../components/Emoji';


function Blog() {
    return (
        <>
            <div className="blog-article">
                <h1>
                    <Emoji symbol="🎉" label="party popper" />
                    My Favorite Developer Tools
                </h1>
                <p>
                    April 22, 2020
                </p>
                <p>
                    Over the years, I've accumulated quite a fiew useful tools and resources for programmers. It's time to organize and share it all!
                </p>

                <p className="title-with-border">
                    <strong>
                        APIs
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://apilist.fun/">
                                Open Source APIs
                            </a>
                        </strong>
                    </li>
                    <p>
                        An open-source list of APIs.
                    </p>
                    <li>
                        <strong>
                            <a href="https://public-apis.xyz/">
                                Public APIs
                            </a>
                        </strong>
                    </li>
                    <p>
                        A list of public APIs.
                    </p>
                </ul>

                <p className="title-with-border">
                    <strong>
                        App development
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://expo.io/">
                                Expo
                            </a>
                        </strong>
                    </li>
                    <p>
                        The fastest way to build an app.
                    </p>
                    <li>
                        <strong>
                            <a href="https://reactnative.dev/">
                                React Native
                            </a>
                        </strong>
                    </li>
                    <p>
                        Creates truly native apps and doesn't compromise on UX/UI.
                    </p>
                </ul>

                <p className="title-with-border">
                    <strong>
                        Code Compatibility
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://babeljs.io/repl">
                                BabelJS
                            </a>
                        </strong>
                    </li>
                    <p>
                        Babel is a JavaScript compiler.
                    </p>
                    <li>
                        <strong>
                            <a href="https://caniuse.com/">
                                Can I Use?
                            </a>
                        </strong>
                    </li>
                    <p>
                        Browser compatibility tables.
                    </p>
                </ul>

                <p className="title-with-border">
                    <strong>
                        CSS
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://daneden.github.io/animate.css/">
                                Animate.css
                            </a>
                        </strong>
                    </li>
                    <p>
                        A CSS animation library.
                    </p>
                    <li>
                        <strong>
                            <a href="https://thoughtbot.com/blog/css-animation-for-beginners">Animation for Beginner</a></strong></li>
                    <p>A guide to CSS Animation
                    </p>
                    <li><strong><a href="https://css-tricks.com/">CSS Tricks</a></strong></li>
                    <p>Extended library of CSS tools and resources.
                    </p>
                    <li><strong><a href="https://darekkay.com/dev/flexbox-cheatsheet.html">Flexbox Cheatsheet</a></strong></li>
                    <p>A comprehensive visual guide all of combinations of Flexbox.
                    </p>
                    <li><strong><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a></strong></li>
                    <p>A guide to Flexbox.
                    </p>
                    <li><strong><a href="http://grid.malven.co/">Grid Guide</a></strong></li>
                    <p>A visual grid guide.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient">Linear Gradient</a></strong></li>
                    <p>Linear Gradient in CSS.
                    </p>
                    <li><strong><a href="https://www.cleancss.com/css-minify/">Minify</a></strong></li>
                    <p>A tool to compress our CSS.
                    </p>
                    <li><strong><a href="https://paletton.com">Paletton</a></strong></li>
                    <p>Find the code for your color and find complementary colors.
                    </p>
                    <li><strong><a href="https://specificity.keegan.st/">Specificity Calculator</a></strong></li>
                    <p>A visual way to understand the hierachy of CSS Specificity.
                    </p>
                    <li><strong><a href="https://styled-components.com/">Styled Component</a></strong></li>
                    <p>Styled Component.
                    </p>
                    <li><strong><a href="https://thoughtbot.com/blog/transitions-and-transforms">Transition and Transform</a></strong></li>
                    <p>A guide to CSS Transition and Transform.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align/">Vertical Align</a></strong></li>
                    <p>The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.
                    </p>
                </ul>

                <p className="title-with-border"><strong>JavaScript</strong></p>
                <ul>
                    <li><strong><a href="https://sdras.github.io/array-explorer/">Array Explorer</a></strong></li>
                    <p>JS Array Explorer.
                    </p>
                    <li><strong><a href="https://www.w3schools.com/jsref/jsref_obj_array.asp">Array Methods</a></strong></li>
                    <p>Exhaustive lists of array methods.
                    </p>
                    <li><strong><a href="https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/">Back to Top Arrow</a></strong></li>
                    <p>Functional and elegant back to top arrow.
                    </p>
                    <li><strong><a href="https://towardsdatascience.com/write-beautiful-javascript-with-%CE%BB-fp-es6-350cd64ab5bf">Data structure</a></strong></li>
                    <p>Javascript data structure with map, reduce, filter, and ES6.
                    </p>
                    <li><strong><a href="https://github.com/daumann/ECMAScript-new-features-list">ECMA new features</a></strong></li>
                    <p>ECMA new features.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Events">Event Reference</a></strong></li>
                    <p>Exhaustive lists of events, for example onClick.
                    </p>
                    <li><strong><a href="https://www.npmjs.com/">npm</a></strong></li>
                    <p>The whole npm plugins library.
                    </p>
                    <li><strong><a href="https://objectexplorer.netlify.app/">Object Explorer</a></strong></li>
                    <p>JS Object Explorer.
                    </p>
                    <li><strong><a href="https://kentcdodds.com/blog/prop-drilling">Props Drilling</a></strong></li>
                    <p>Props Drilling in JS.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a></strong></li>
                    <p>Description of the set object.
                    </p>
                    <li><strong><a href="https://momentjs.com/docs/#/displaying/">Time Display</a></strong></li>
                    <p>Display of Time, Hours, Timezone...
                    </p>
                    <li><strong><a href="https://tylermcginnis.com/var-let-const/">var, let, const</a></strong></li>
                    <p>var vs let vs const in JavaScript.
                    </p>
                </ul>

                <p className="title-with-border"><strong>jQuery</strong></p>
                <ul>
                    <li><strong><a href="https://api.jquery.com/">jQuery Documentation</a></strong></li>
                    <p>Official jQuery documentation.
                    </p>
                    <li><strong><a href="http://youmightnotneedjquery.com/">You Might Not Need jQuery</a></strong></li>
                    <p>Blog Article on the use of jQuery.
                    </p>
                </ul>

                <p className="title-with-border"><strong>json</strong></p>
                <ul>
                    <li><strong><a href="https://www.w3schools.com/js/js_json_intro.asp">json Introduction</a></strong></li>
                    <p>Learn about json with we3schools.
                    </p>
                    <li><strong><a href="http://jsonplaceholder.typicode.com/">json placeholder</a></strong></li>
                    <p>Fake Online REST API for Testing and Prototyping.
                    </p>
                </ul>

                <p className="title-with-border"><strong>React</strong></p>
                <ul>
                    <li><strong><a href="https://reactjs.org/docs/react-component.html">Component</a></strong></li>
                    <p>Guide of React components.
                    </p>
                    <li><strong><a href="https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0">Destructuring props</a></strong></li>
                    <p>Destructuring props in React.
                    </p>
                    <li><strong><a href="https://www.robinwieruch.de/react-hooks-fetch-data">Fetching Data with React Hooks</a></strong></li>
                    <p>Fetching Data with React Hooks.
                    </p>
                    <li><strong><a href="https://reactjs.org/docs/hooks-overview.html">Hooks</a></strong></li>
                    <p>React Hooks Overview.
                    </p>
                    <li><strong><a href="https://reactjs.org/docs/hooks-reference.html">Hooks API Reference</a></strong></li>
                    <p>Hooks API Reference.
                    </p>
                    <li><strong><a href="https://lucybain.com/blog/2016/react-state-vs-pros/">Props vs. State</a></strong></li>
                    <p>React Props vs. State.
                    </p>
                    <li><strong><a href="https://github.com/facebook/create-react-appl">Repository</a></strong></li>
                    <p>Repository of create-react-app.
                    </p>
                </ul>

                <p className="title-with-border"><strong>React Plugins</strong></p>
                <ul>
                    <li><strong><a href="https://www.react-reveal.com/examples/common/custom/">react-reveal</a></strong></li>
                    <p>Reveals on scroll effects.
                    </p>
                    <li><strong><a href="https://reacttraining.com/react-router/web/guides/quick-start">react-router-dom</a></strong></li>
                    <p>Routing between pages.
                    </p>
                    <li><strong><a href="https://www.react-spring.io/docs/hooks/examples">react-spring</a></strong></li>
                    <p>Simple animations.
                    </p>
                    <li><strong><a href="https://vx-demo.now.sh/gallery">react-vx</a></strong></li>
                    <p>Low-level visualization components.
                    </p>


                </ul>

                <p className="title-with-border"><strong>UI</strong></p>
                <ul>
                    <li><strong><a href="https://fontawesome.com/">Font Awesome</a></strong></li>
                    <p>Free library of icons.
                    </p>
                    <li><strong><a href="https://fonts.google.com/">Google Fonts</a></strong></li>
                    <p>Free library of fonts.
                    </p>
                    <li><strong><a href="https://material-ui.com/">Material UI</a></strong></li>
                    <p>Free library of React components.
                    </p>
                    <li><strong><a href="https://react-icons.netlify.com/">React Icons</a></strong></li>
                    <p>Free library of React icons.
                    </p>
                    <li><strong><a href="https://unsplash.com/">Unsplash</a></strong></li>
                    <p>Free library of photographs.
                    </p>
                </ul>
            </div>
        </>
    );
}


export default Blog;