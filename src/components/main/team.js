import React from 'react';
import {Link} from 'react-router-dom';
// import Button from "../buttons/button";

const doctorsArr = [ 
    {
        "name": "Грегори Хаус",
        "photo": "./images/doctors/gregoryhaus.jpg",
        "experience": 30,
        "rank": "Стоматолог-хирург",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 1
    },
    {
        "name": "Лиза Кадди",
        "photo": "./images/doctors/lisa.jpg",
        "experience": 15,
        "rank": "Стоматолог-ортодонт",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 2
    },
    {
        "name": "Эллисон Кэмерон",
        "photo": "./images/doctors/alison.jpg",
        "experience": 6,
        "rank": "Стоматолог-терапевт",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 3
    },
    {
        "name": "Лоренс Катнер",
        "photo": "./images/doctors/lorenskatner.jpg",
        "experience": 4,
        "rank": "Стоматолог-терапевт",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 4
    },
    {
        "name": "Эрик Форман",
        "photo": "./images/doctors/ericforman.jpg",
        "experience": 10,
        "rank": "Стоматолог-терапевт",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 5
    },
    {
        "name": "Крис Тауб",
        "photo":  "./images/doctors/kris_taub.jpg",
        "experience": 20,
        "rank": "Стоматолог-терапевт",
        "speciality": ["service1","service2","service3","service4","service5"],
        "skillsDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
        "id": 6
    }
]




export default class Team extends React.Component {
    render() {

        return (
            <>
            <h2>Наши врачи</h2>
                <div className="team-container">
                    {doctorsArr.map  ( el => 
                        <div className="item"  key = {el.id} >
                            <div className="photo"><img src= {el.photo} alt= {el.name}/></div>
                            <h3>{el.name}</h3>
                            <div className="desc">
                                <p className="experience">Опыт работы {el.experience} лет</p>
                                <p className="rank">{el.rank}</p>
                            </div>
                            <div className="link-box">
                                <Link to = "/doctors" className = "btn link more">Подробнее ...</Link>
                                <Link to = "/doctors" className = "btn link ">Записаться на приём</Link>
                            </div>
                        </div>
                    )}
                 </div>
            </>
        ) 
    }
}        