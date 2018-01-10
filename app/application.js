import './styles/base'

import React from 'react'
import ReactDom from 'react-dom'
import { Layout } from './components/layout'

ReactDom.render(<Layout nav="my nav" />, document.getElementById('mount'))
