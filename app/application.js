import React from 'react'
import ReactDom from 'react-dom'
import headerItems from './data/headerItems'
import navigationItems from './data/navigationItems'
import { Templates } from './components'
import './styles/base.scss'

ReactDom.render(<Templates.Start navigationItems={navigationItems} headerItems={headerItems} />, document.getElementById('mount'))
