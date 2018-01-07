import main from './components/main'
import Layout from './components/layout'
import Header from './components/header'

const layout = new Layout()
const header = new Header()

document.body.innerHTML = layout.render({
  main: main.render(),
  header: header.render()
})
