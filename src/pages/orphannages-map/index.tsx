import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../images/map-marker.svg'

import './styles.css'

export default class OrphanagesMap extends Component {
  render() {
    return (
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão
              esperando a sua visita :)</p>
          </header>
          <footer>
            <strong>Palmas</strong>
            <span>Tocantins</span>
          </footer>
        </aside>
        <Map
          center={[-10.3124935,-48.3090716]}
          zoom={15}
          style={{
            width: '100%',
            height: '100%'
          }}>
          <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png '/>
        </Map>
        <Link to='/' className='create-orphanage'>
          <FiPlus size={32} color={'#FFF'}/>
        </Link>
      </div>
    );
  }
}