import React, { Component } from 'react'
import '../App.css';
import Carousalslide from './Body/carousal';
import Search from './Search_sort/secondpage';
import Homecontent1 from './Body/homecontent1';
import Homecontent2 from './Body/homecontent2';
import Booklist from './Body/booklist';
import Frequentques from './Body/frequentques';

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousalslide/>
                <Booklist/>
                <Homecontent1/>
                <Homecontent2/>
                <Frequentques/>
            </>
        )
    }
}