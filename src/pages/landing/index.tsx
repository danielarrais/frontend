import React, {Component} from 'react'

import './styles.css'

import logoImg from '../../images/logo.svg'

import {FiArrowRight} from 'react-icons/fi'

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
          <a href="" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </a>
        </div>
      </div>
    );
  }
}