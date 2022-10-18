// Import react and reactDom library
import React from 'react';
import ReactDom from 'react-dom';

import CommentDetail from './CommentDetail';

import { Button } from 'semantic-ui-react';


// Import react component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" date="Tuesday at 8:00PM" comment="It was awesome"/>
            <CommentDetail author="Alex" date="Tuesday at 5:00PM" comment="It was amazing experince"/>
            <CommentDetail author="Jane" date="Tuesday at 12:00PM" comment="I think update needed"/>
      </div>
    );
};


// Take the react componenent and show it on screen
ReactDom.render(<App/>,document.querySelector('#root'))