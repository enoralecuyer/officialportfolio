import React from 'react';
import Emoji from '../../components/Emoji';


function Blog() {
    return (
        <>
            <div className="blog-article">
                <h1>
                    <Emoji symbol="💕" label="two hearts" />
                    My Favorite Visual Code Studio Extensions
                </h1>
                <p>
                    April 25, 2020
                </p>
                <p>
                    Visual Studio Code is by far my favorite code editor. I've tried Sublime and Atom in the past but they really don't make the cut.
                </p>
                <p className="title-with-border">
                    <strong>
                        Extensions
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2">
                                Bracket Pair Colorizer 2
                            </a>
                        </strong>
                    </li>
                    <p>
                        Colors matching brackets.
                    </p>
                    <li>
                        <strong>
                            <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippetsES7">
                                React/Redux/GraphQL/React-Native snippets
                            </a>
                        </strong>
                    </li>
                    <p>
                        Writes snippets instead of the full text.
                    </p>
                    <li>
                        <strong>
                            <a href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag">
                                Highlight Matching Tag
                            </a>
                        </strong>
                    </li>
                    <p>
                        Highlights matching tags.
                    </p>
                    <li>
                        <strong>
                            <a href="https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum">
                                Lorem Ipsum
                            </a>
                        </strong>
                    </li>
                    <p>
                        Generates lorem ipsum paragraphs.
                    </p>
                    <li>
                        <strong>
                            <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
                                Night Owl
                            </a>
                        </strong>
                    </li>
                    <p>
                        Favorite night theme.
                    </p>
                </ul>
            </div>
        </>
    );
}

export default Blog;