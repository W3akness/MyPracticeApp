import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import HangManPage from './components/hangman/HangManPage';
import TicTacToePage from "./components/ticatactoe/TicTacToePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="hangman" component={HangManPage} />
        <Route path="tictactoe" component={TicTacToePage} />
    </Route>
);
