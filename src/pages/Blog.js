import React from 'react';
import pink from '../images/avatar.png';

function Blog() {
    return(
        <>

            <div className="blog-article">
                <h1>My Favorite Visual Code Studio Extensions</h1>
                <p>Wednesday, April 25th 2020</p>
                <img className="pink-circle mr-2" src={pink} alt="pink circle"></img>
                Enora Lecuyer (<a href="https://github.com/enoralecuyer">@heyenora</a>)
                <p className="border-top mt-3"></p>
                    <p>
                        Visual Studio Code is by far my favorite code editor. I've tried Sublime and Atom in the past but they really don't make the cut. 
                    </p>
                <p className="title-with-border"><strong>Extensions</strong></p>
                <ul>
                    <li><strong>Bracket Pair Colorizer 2</strong></li>
                    <p>
                        It is a customizable extension for coloring matching brackets and it is simply a life saver. 
                    </p>
                    <li><strong>ES7 React/Redux/GraphQL/React-Native snippets</strong></li>
                    <p>
                        It allows me to write snippets instead of the full code. For example "imr→	import React from 'react'".
                    </p>
                    <li><strong>Highlight Matching Tag</strong></li>
                    <p>
                        The title says it all.
                    </p>
                    <li><strong>Lorem Ipsum</strong></li>
                    <p>
                        Generates and inserts lorem ipsum text in VSC. Faster then pasting it from a website. 
                    </p>
                    <li><strong>Night Owl</strong></li>
                    <p>My favorite Dark Theme for VSC.</p>
                </ul>
                <p>More plugins ideas <a href="https://scotch.io/bar-talk/22-best-visual-studio-code-extensions-for-web-development">here</a>.</p>
            </div>




            <div className="blog-article">
                <h1>My Favorite Developer Tools</h1>
                <p>Wednesday, April 22th 2020</p>
                <img className="pink-circle mr-2" src={pink} alt="pink circle"></img>
                Enora Lecuyer (<a href="https://github.com/enoralecuyer">@heyenora</a>)
                <p className="border-top mt-3"></p>
                <p>Over the years, I've accumulated quite a fiew useful tools and resources for programmers.
                    It's time to organize and share it all! 
                </p>

                <p className="title-with-border"><strong>APIs</strong></p>
                <ul>
                    <li><strong><a href="https://apilist.fun/">API list</a></strong></li>
                    <p>An open-source list of APIs.
                    </p>
                    <li><strong><a href="https://public-apis.xyz/">Public APIs</a></strong></li>
                    <p>A list of public APIs.
                    </p>
                </ul>

                <p className="title-with-border"><strong>App development</strong></p>
                <ul>
                    <li><strong><a href="https://reactnative.dev/">React Native</a></strong></li>
                    <p>React Native creates truly native apps and doesn't compromise on UX/UI.
                    </p>
                    <li><strong><a href="https://expo.io/">Expo</a></strong></li>
                    <p>Very excited to try this one. 
                    </p>
                </ul>

                <p className="title-with-border"><strong>Blogging</strong></p>
                <ul>
                    <li><strong><a href="https://disqus.com/">Disqus</a></strong></li>
                    <p>Comments plug-in.
                    </p>
                </ul>

                <p className="title-with-border"><strong>Career</strong></p>
                <ul>
                    <li><strong><a href="https://www.dice.com/">Dice</a></strong></li>
                    <p>
                    </p>
                </ul>

                <p className="title-with-border"><strong>Code Compatibility</strong></p>
                <ul>
                    <li><strong><a href="https://babeljs.io/repl">BabelJS</a></strong></li>
                    <p>Babel is a JavaScript compiler.
                    </p>
                    <li><strong><a href="https://caniuse.com/">Can I Use</a></strong></li>
                    <p>Browser compatibility tables.
                    </p>
                </ul>

                <p className="title-with-border"><strong>Community</strong></p>
                <ul>
                    <li><strong><a href="/">GitHub</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="/">Stackoverflow</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="https://codepen.io/">CodePen</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="https://www.awwwards.com/">Awwwards</a></strong></li>
                    <p> 
                    </p>
                </ul>

                <p className="title-with-border"><strong>CSS</strong></p>
                <ul>
                    <li><strong><a href="https://css-tricks.com/">CSS Tricks</a></strong></li>
                    <p>Extended library of CSS tools and resources.
                    </p>
                    <li><strong><a href="https://paletton.com">Paletton</a></strong></li>
                    <p>Find the code for your color and find complementary colors. 
                    </p>
                    <li><strong><a href="https://thoughtbot.com/blog/transitions-and-transforms"> CSSTransition and Transform</a></strong></li>
                    <p>A guide to CSS Transition and Transform. 
                    </p>
                    <li><strong><a href="https://thoughtbot.com/blog/css-animation-for-beginners">CSS Animation</a></strong></li>
                    <p>A guide to CSS Animation
                    </p>             
                    <li><strong><a href="https://daneden.github.io/animate.css/">Animate.css</a></strong></li>
                    <p>A CSS animation library.
                    </p> 
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient">Linear Gradient</a></strong></li>
                    <p>Linear Gradient in CSS.
                    </p> 
                    <li><strong><a href="https://styled-components.com/">Styled Component</a></strong></li>
                    <p>Styled Component.
                    </p>   
                    <li><strong><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a></strong></li>
                    <p>A guide to Flexbox.
                    </p>
                    <li><strong><a href="https://darekkay.com/dev/flexbox-cheatsheet.html">Flexbox Cheatsheet</a></strong></li>
                    <p>A comprehensive visual guide all of combinations of Flexbox.
                    </p>
                    <li><strong><a href="http://grid.malven.co/">Grid Guide</a></strong></li>
                    <p>A visual grid guide.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align/">Vertical Align</a></strong></li>
                    <p>The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.
                    </p>
                    <li><strong><a href="https://specificity.keegan.st/">CSS Specificity Calculator</a></strong></li>
                    <p>A visual way to understand the hierachy of CSS Specificity. 
                    </p>
                    <li><strong><a href="https://www.cleancss.com/css-minify/">CSS Minify</a></strong></li>
                    <p>A tool to compress our CSS.
                    </p>
                </ul>

                <p className="title-with-border"><strong>Fonts/icons/photos</strong></p>
                <ul>
                    <li><strong><a href="https://fonts.google.com/">Google Fonts</a></strong></li>
                    <p>Free library of fonts.
                    </p>
                    <li><strong><a href="https://fontawesome.com/">Font Awesome</a></strong></li>
                    <p>Free library of icons.
                    </p>
                    <li><strong><a href="https://react-icons.netlify.com/">React Icons</a></strong></li>
                    <p>Free library of react compatible icons.
                    </p>
                    <li><strong><a href="https://unsplash.com/">Unsplash</a></strong></li>
                    <p>Best library of free high-quality photos.
                    </p>
                    <li><strong><a href="https://compressjpeg.com/">Compress JPG</a></strong></li>
                    <p>Compress JPEG files.
                    </p>
                </ul>


                <p className="title-with-border"><strong>JavaScript</strong></p>
                <ul>
                    <li><strong><a href="https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/">Back to Top Arrow</a></strong></li>
                    <p>Functional and elegant back to top arrow.
                    </p>
                    <li><strong><a href="https://www.w3schools.com/jsref/jsref_obj_array.asp">Array Methods</a></strong></li>
                    <p>Exhaustive lists of array methods.
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Events">Event Reference</a></strong></li>
                    <p>Exhaustive lists of events, for example onClick. 
                    </p>
                    <li><strong><a href="https://objectexplorer.netlify.app/">JS Object Explorer</a></strong></li>
                    <p>JS Object Explorer.
                    </p>
                    <li><strong><a href="https://sdras.github.io/array-explorer/">JS Array Explorer</a></strong></li>
                    <p>JS Array Explorer.
                    </p>
                    <li><strong><a href="https://www.npmjs.com/">NPM JS</a></strong></li>
                    <p>The whole npm plugins library.
                    </p>
                    <li><strong><a href="https://github.com/daumann/ECMAScript-new-features-list">ECMA new features</a></strong></li>
                    <p>ECMA new features.
                    </p>
                    <li><strong><a href="https://momentjs.com/docs/#/displaying/">Time Display</a></strong></li>
                    <p>Display of Time, Hours, Timezone...
                    </p>
                </ul>

                <p className="title-with-border"><strong>jQuery/json</strong></p>
                <ul>
                    <li><strong><a href="http://youmightnotneedjquery.com/">You Might Not Need jQuery</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="http://jsonplaceholder.typicode.com/">json placeholder</a></strong></li>
                    <p>
                    </p>
                </ul>

                <p className="title-with-border"><strong>React</strong></p>
                <ul>
                    <li><strong><a href="https://github.com/facebook/create-react-appl">React Repository</a></strong></li>
                    <p>create-react-app repository.
                    </p>
                    <li><strong><a href="https://github.com/facebook/create-react-applhttps://upmostly.com/tutorials/create-simple-web-app-react-airtable">Airtable + React</a></strong></li>
                    <p>Build an app with React and Airtable API.
                    </p>
                    <li><strong><a href="https://reactjs.org/docs/react-component.html">React Component</a></strong></li>
                    <p>A guide on React components.
                    </p>
                </ul>

                <p className="title-with-border"><strong>React Plugins</strong></p>
                <ul>
                    <li><strong><a href="https://reacttraining.com/react-router/web/guides/quick-start">react-router-dom</a></strong></li>
                    <p>Routing between pages.
                    </p>
                    <li><strong><a href="https://vx-demo.now.sh/gallery">VX</a></strong></li>
                    <p>Collection of reusable low-level visualization components.
                    </p>
                    <li><strong><a href="https://www.react-spring.io/docs/hooks/examples">react-spring</a></strong></li>
                    <p>Bring components to life with simple animations.
                    </p>
                    <li><strong><a href="https://www.react-reveal.com/examples/common/custom/">react-reveal</a></strong></li>
                    <p>Create various reveal on scroll effects.
                    </p>
                </ul>

                <p className="title-with-border"><strong>Templates</strong></p>
                <ul>
                    <li><strong><a href="https://www.creative-tim.com/">Creative Tim</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="https://cruip.com/">Cruip</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="http://www.mashup-template.com/">Mashup Template</a></strong></li>
                    <p>
                    </p>
                </ul>            

                <p className="title-with-border"><strong>Extra Resources</strong></p>
                <ul>
                    <li><strong><a href="https://www.w3schools.com/">W3 Schools</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="/">CodeAcademy</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="/">FreeCodeCamp</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="https://developer.mozilla.org/en-US/">Developer Mozilla</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/?LSNPUBID=vedj0cWlu2Y&ranEAID=vedj0cWlu2Y&ranMID=39197&ranSiteID=vedj0cWlu2Y-yWqD0q.y.40IynlaUUWxwg">
                        Zero to Mastery</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="/">Harvard CS50</a></strong></li>
                    <p> 
                    </p>
                    <li><strong><a href="https://zerotomastery.io/resources/">ZTM Resources</a></strong></li>
                    <p>
                    </p>
                    <li><strong><a href="https://zero-to-mastery.github.io/resources/">Developer Resources</a></strong></li>
                    <p>
                    </p>
                </ul>
            </div>


        <div className="blog-article">
            <h1>How to Deploy Your Website on GitHub</h1>
            <p>Wednesday, April 20th 2020</p>
            <img className="pink-circle mr-2" src={pink} alt="pink circle"></img>
            Enora Lecuyer (<a href="https://github.com/enoralecuyer">@heyenora</a>)
            <p className="border-top mt-3"></p>
            <p>GitHub is a free server to host our websites, and I've been using it for years now and I highly
                recommend it. 
            </p>
            <p className="title-with-border"><strong>Setup</strong></p>
            <ol>
                <li>Create a repository on your Github</li>
                <li>Copy the url associated with it</li>
                <li>On your cmd line, type git clone url of your repository</li>
                <li>git commit -m "first commit of my website"</li>
                <li>git add .</li>
                <li>git push u origin master</li>
            </ol>
            <p>And there you have it!</p>
        </div>
        </>
    );
}


export default Blog;