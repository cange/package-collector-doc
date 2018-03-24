export default [
  {
    title: 'Inbox',
    icon: 'inbox',
    id: 'inbox',
    onPress: () => { console.log('Inbox') }
  }, {
    title: 'Starred',
    icon: 'star',
    id: 'starred',
    onPress: () => { console.log('Starred') }
  }, {
    title: 'Sent mail',
    id: 'sent-mail',
    icon: 'send',
    onPress: () => { console.log('Sent mail') }
  }, {
    title: 'Drafts',
    id: 'drafts',
    icon: 'drafts',
    onPress: () => { console.log('Drafts') }
  }, {
    title: 'Subheader',
    type: 'subheader'
  }, {
    title: 'All mails',
    id: 'all-mails',
    icon: 'mail',
    onPress: () => { console.log('All mails') }
  }, {
    title: 'Trash',
    icon: 'delete',
    id: 'trash',
    onPress: () => { console.log('Trash') }
  }, {
    title: 'Spam',
    id: 'spam',
    icon: 'report',
    onPress: () => { console.log('Spam') }
  }
]
