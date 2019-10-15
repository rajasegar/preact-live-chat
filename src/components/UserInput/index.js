import { h, Component } from 'preact';
import SendIcon from '../icons/SendIcon';
import EmojiIcon from '../icons/EmojiIcon';
import EmojiPicker from '../EmojiPicker';
import cx from 'classnames';
import style from './style';

export default class UserInput extends Component {
 constructor() {
    super();
    this.state = {
      inputActive: false
    };
  }

  handleKey(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this._submitText(event);
    }
  }

  _submitText(event) {
    event.preventDefault();
    const text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: { text }
      });
      this.userInput.innerHTML = '';
    }
  }

  _handleEmojiPicked(emoji) {
    this.props.onSubmit({
      author: 'me',
      type: 'emoji',
      data: { emoji }
    });
  }

  render(props) {
    return (
        <form class={cx(style.userInput, this.state.inputActive ? style.active : '')}>
        <div
          role="button"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKey.bind(this)}
          contentEditable="true"
          placeholder="Write a reply..."
      class={style.text}
        >
        </div>
        <div class={style.buttons}>
        <div class={style.button}></div>
        <div class={style.button}>
            { this.props.showEmoji && <EmojiIcon onEmojiPicked={this._handleEmojiPicked.bind(this)} /> }
        </div>
          <div class="{style.buton}">
            <SendIcon onClick={this._submitText.bind(this)} />
          </div>
        </div>
      </form>
    );
  }
}
