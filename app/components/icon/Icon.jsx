import './styles'

export default (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" class="icon icon--{props.name}">
    <use href="#icon-{props.name}"></use>
  </svg>
)
