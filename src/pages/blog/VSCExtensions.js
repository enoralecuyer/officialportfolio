import React from 'react';
import Emoji from '../../components/Emoji';


function Blog() {
    return(
        <>
            <div className="blog-article">
                <h1><Emoji symbol="💕" label="two hearts"/>My Favorite Visual Code Studio Extensions</h1>
                <p>April 25, 2020</p>
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
            </div>
        </>
    );
}

export default Blog;