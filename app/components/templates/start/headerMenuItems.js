export default [
  {
    type: 'checkbox',
    checked: false,
    label: 'Inverted Page Theme',
    onChange: (event) => {
      console.log('Theme:target', event.target)
    }
  }, {
    type: 'divider'
  }, {
    type: 'command',
    label: 'Simple item',
    onPress: (event) => {
      console.log('Theme:target', event.target)
    }
  }, {
    type: 'divider'
  }, {
    type: 'checkbox',
    checked: true,
    label: 'Contrast in Examples',
    onChange: (event) => {
      console.log('Contrast:target', event.target)
    }
  }, {
    type: 'checkbox',
    checked: false,
    label: 'Grid in Examples',
    onChange: (event) => {
      console.log('Example:target', event.target)
    }
  }
]
