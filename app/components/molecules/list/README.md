### Example

```js
<List items={[
  {
    title: 'Inbox',
    icon: 'inbox',
    onPress: () => { console.log('ListControl action: Inbox') }
  }, {
    title: 'Subheader',
    type: 'subheader'
  }, {
    active: true,
    title: 'Sent mail',
    icon: 'mail',
    onPress: () => { console.log('ListControl action: sent mail') }
  }, {
    title: 'Drafts',
    icon: 'drafts',
    onPress: () => { console.log('ListControl action: Drafts') }
  }
]} />
```
