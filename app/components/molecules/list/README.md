### Example

```js
<ListControl items={[
  {
    title: 'Inbox',
    icon: 'inbox',
    onPress: () => { console.log('ListControl action: Inbox') }
  }, {
    title: 'Subheader',
    type: 'subheader'
  }, {
    title: 'Drafts',
    icon: 'drafts',
    onPress: () => { console.log('ListControl action: Drafts') }
  }
]} />
```
