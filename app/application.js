import main from './components/main'
import Layout from './components/layout'

const layout = new Layout()

document.body.innerHTML = layout.render({ main: main.render() })
