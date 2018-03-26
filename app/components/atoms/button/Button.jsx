// @flow
import './styles.scss'
import * as React from 'react'
import classNames from 'classnames'

type Props = {
  children: React.Node,
  /** Class to add additional styles */
  className: string,
  /** If true, disable all interactions for this component */
  disabled: boolean,
  /** Text to display for blindness accessibility features */
  title: string,
  /** The [type values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) of the button */
  type: 'button' | 'submit' | 'reset',
  /** Handler to be called when the user taps the button */
  onPress: (event: SyntheticEvent<HTMLButtonElement>) => void
}

class Button extends React.Component<Props> {
  static defaultProps = {
    type: 'button',
    className: '',
    title: '',
    disabled: false,
    onPress: () => {}
  }

  handlePress(event: SyntheticEvent<HTMLButtonElement>) {
    this.props.onPress(event)
  }

  render(): React.Node {
    const {
      children,
      className,
      disabled,
      title,
      type
    } = this.props
    let props: Object = {
      className: classNames('doc-button', className),
      type,
      onClick: this.handlePress.bind(this)
    }

    if (title.length) {
      props.title = title
    }

    if (disabled) {
      props.disabled = disabled
    }

    return (
      <button {...props}>
        {children}
      </button>
    )
  }
}

export default Button
