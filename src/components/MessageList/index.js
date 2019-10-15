import { h, Component } from 'preact';
import Message from '../Messages';
import style from './style';

export default class MessageList extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render (props) {
    return (
        <div class={style.messageList} ref={el => this.scrollList = el}>
        {props.messages.map((message, i) => {
          return <Message message={message} key={i} />
        })}
      </div>
    );
  }
}
