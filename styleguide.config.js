module.exports = {
  sections: [
    {
      name: 'UI essentials',
      content: 'app/components/essentials/README.md',
      components: 'app/components/essentials/**/[A-Z]*.{js,jsx}'
    },
    {
      name: 'UI layout',
      components: 'app/components/layout/[A-Z]*.{js,jsx}'
    }
  ],
  template: 'scripts/templates/index.html'
}
