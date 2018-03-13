### Example

```js
<Drawer open={false} onClose={() => {}} items={[
  {
    title: 'Inbox',
    icon: 'inbox',
    onPress: () => { console.log('Drawer action: Inbox') }
  }, {
    title: 'Subheader',
    type: 'subheader'
  }, {
    title: 'Drafts',
    icon: 'drafts',
    onPress: () => { console.log('Drawer action: Drafts') }
  }
]} />
```
