### Example

```js
<Menu>
  <MenuItem label="Action" />
  <MenuItem label="Command with event listener" type="command" onPress={(event) => (console.log('command pressed'))} />
  <MenuItem type="divider" />
  <MenuItem label="Checkbox" type="checkbox" />
  <MenuItem label="Checked item" type="checkbox" checked />
  <MenuItem label="Checkbox with event listener" type="checkbox" onChange={(event) => (console.log('checked:', event.target.checked))} />
</Menu>
```
