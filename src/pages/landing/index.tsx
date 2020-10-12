import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

import './styles.css'
import logoImg from '../../images/logo.svg'


export default class Landing extends Component {
  render() {
    return (
      <div id='landing-page'>
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          <div className="location">
            <strong>Palmas</strong>
            <span>Tocantins</span>
          </div>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Link>
        </div>
      </div>
    );
  }
}