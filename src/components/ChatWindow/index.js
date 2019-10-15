import { h, Component } from 'preact';
import MessageList from '../MessageList';
import UserInput from '../UserInput';
import Header from '../Header';
import cx from 'classnames';
import style from './style.scss';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onMessageReceived(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  render(props) {
    let messageList = props.messageList || [];
    return (
        <div class={cx(style.chatWindow, props.isOpen ? style.opened : style.closed)}>
        <Header
      teamName={props.teamName}
      imageUrl={props.imageUrl}
      onClose={props.onClose}
        />
        <MessageList
      messages={messageList}
      imageUrl={props.imageUrl}
        />
        <UserInput showEmoji={props.showEmoji} onSubmit={this.onUserInputSubmit.bind(this)}/>
        </div>
    );
  }

}
