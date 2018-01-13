import './styles'
import React from 'react'
import icons from './../../assets/icons.svg';

export default (props) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={`icon icon--${props.name}`}>
      <use width="24" height="24" href={`${icons}#${props.name}`}></use>
    </svg>
  )
}
