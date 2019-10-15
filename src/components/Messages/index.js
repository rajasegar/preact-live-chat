import { h, Component } from 'preact';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import chatIconUrl from '../../assets/chat-icon.svg';
import cx from 'classnames';
import style from './style';


export default class Messages extends Component {
  _renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage {...this.props.message} />
    case 'emoji':
      return <EmojiMessage {...this.props.message} />
    }
  }

  render (props) {
    return (
        <div class={style.message}>
        <div class={cx(style.content, props.message.author === "me" ? style.sent : style.received)}>
        <div class={style.avatar} style={{
          backgroundImage: `url(${chatIconUrl})`
        }}></div>
        {this._renderMessageOfType(props.message.type)}
      </div>
        </div>
    );
  }
}
