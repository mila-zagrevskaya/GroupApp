import React from 'react';
// import {Link} from 'react-router-dom';
import Button from "../buttons/button";
import About from "./aboutUs";
import Team from "./team"

export default class Main extends React.Component {


    render() {
        // const {data, flag} = this.props
        return (
            <main className = "main">
                <div className="container">
                    <div className="wrapper">
                                <div className="title-box">
                                    <img className = "logotype" src="./images/logo.png" alt=""/>
                                    <h1>Стоматология для всей семьи</h1>
                                    <Button className = "btn" text = "Записаться на приём" onClick = { ( ) => { } }/>
                                </div>
                        </div>
                </div>
                 <div className="wrapper">
                    <About/>
                 </div>
                <div className=" case">
                        <img className = "banner" src="./images/medical.jpeg" alt="medical"/>
                        <div className="button-box">
                            <Button className = "btn" text = "Записаться на приём" onClick = { ( ) => { } }/>
                        </div>     
                 </div>
                 <div className="wrapper">
                    <Team/>
                 </div>

            </main>
        )
    }
}