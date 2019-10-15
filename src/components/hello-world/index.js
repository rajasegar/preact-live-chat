import { h, Component } from "preact";
import messageHistory from '../../messageHistory';
import Launcher from '../Launcher';
import "./style.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      let _message = {
        author: 'them',
        type: 'text',
        data: {
          text : text
        }
      };

      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, _message]
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render(props) {
    return (
      <div>
        <Launcher
        teamName='preact-live-chat'
        imageUrl='https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
      onMessageWasSent={this._onMessageWasSent.bind(this)}
      messageList={this.state.messageList}
      newMessagesCount={this.state.newMessagesCount}
      handleClick={this._handleClick.bind(this)}
      isOpen={this.state.isOpen}
      showEmoji="true"
        />
      </div>
    );
  }
}
