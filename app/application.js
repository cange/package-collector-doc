import React from 'react'
import ReactDom from 'react-dom'
import { Templates } from './components'
import './styles/base.scss'

ReactDom.render(<Templates.Start nav="my nav" />, document.getElementById('mount'))
