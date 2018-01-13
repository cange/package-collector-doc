import './styles'
import React from 'react'
import cn from 'classnames'
import icons from './../../assets/icons.svg';

export default (props) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={cn('doc-icon', `doc-icon--${props.name}`)}>
      <use width="24" height="24" href={`${icons}#${props.name}`}></use>
    </svg>
  )
}
