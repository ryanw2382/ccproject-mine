import React from "react";
import ReactDOM from "react-dom";

const Footer = <div className="w3-center w3-black w3-padding-16">
                <footer>
                    <p>Powered by <a href="https://www.codercamps.com" title="Best Group Ever" target="_blank" rel="noopener noreferrer" className="w3-hover-text-green">Best Coder Camps Group Ever!</a></p>
                </footer>
            </div>;

ReactDOM.render(
    Footer,
    document.getElementById('root')
);
