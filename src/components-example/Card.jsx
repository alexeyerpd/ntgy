import React from 'react';
import avatar from '../img/logo192.png';

/* Исходная разметка
<div className='card'>
    <div className='card__avatar'>
        <img className='card__avatar-img' src={avatar} alt='avatar' />
    </div>
    <h2 className='card__title'>Карточка студента</h2>
    <p className='card__fio'>Иванов Сергей Петрович</p>
    <p className='card__about'>Являюсь студентом Нетологии, обучаюсь фронтенду. В свободное время занимаюсь волонтёрством</p>
    <h3 className='card__skills-title'>Мои навыки</h3>
    <ul className='skills card__skills'>
        <li className='skills__item'>Трудолюбие</li>
        <li className='skills__item'>Находчивость</li>
        <li className='skills__item'>Чувство прекрасного</li>
    </ul>
</div>
*/

// Функциональный компонент
function Avatar() {
    return (
        <div className='card__avatar'>
            <img className='card__avatar-img' src={avatar} alt='avatar' />
        </div>
    );
}

// Функциональный компонент
function SkillList() {
    return (
        <ul className='skills__list'>
            <li className='skills__item'>Трудолюбие</li>
            <li className='skills__item'>Находчивость</li>
            <li className='skills__item'>Чувство прекрасного</li>
        </ul>
    );
}

// Функциональный компонент
function Skills() {
    return (
        <div className='skills'>
            <h3 className='skills__title'>Мои навыки</h3>
            <SkillList />
        </div>
    );
}

// Классовый компонент
class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <Avatar />
                <h2 className='card__title'>Карточка студента</h2>
                <p className='card__fio'>Иванов Сергей Петрович</p>
                <p className='card__about'>Являюсь студентом Нетологии, обучаюсь фронтенду. В свободное время занимаюсь волонтёрством</p>
                <Skills />
            </div>
        );
    }
}

// Функциональный компонент
// function Card(props) {
//     return (
//         <div className='card'>
//             <Avatar />
//             <h2 className='card__title'>Карточка студента</h2>
//             <p className='card__fio'>Иванов Сергей Петрович</p>
//             <p className='card__about'>Являюсь студентом Нетологии, обучаюсь фронтенду. В свободное время занимаюсь волонтёрством</p>
//             <Skills />
//         </div>
//     );
// }

export default Card;
