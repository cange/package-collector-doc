module.exports = {
  sections: [
    {
      name: 'Atoms',
      content: 'app/components/atoms/README.md',
      components: 'app/components/atoms/**/[A-Z]*.{js,jsx}'
    },
    {
      name: 'Molecules',
      content: 'app/components/molecules/README.md',
      components: 'app/components/molecules/**/[A-Z]*.{js,jsx}'
    },
    {
      name: 'Organisms',
      content: 'app/components/organisms/README.md',
      components: 'app/components/organisms/**/[A-Z]*.{js,jsx}'
    },
    {
      name: 'Templates',
      content: 'app/components/templates/README.md',
      components: 'app/components/templates/**/[A-Z]*.{js,jsx}'
    }
  ],
  template: 'scripts/templates/index.html'
}
