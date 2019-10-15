import { h, Component } from "preact";
import launcherIcon from '../../assets/logo-no-bg.svg';
import launcherIconActive from '../../assets/close-icon.png';
import MessageCount from '../MessageCount';
import ChatWindow from '../ChatWindow';
import cx from 'classnames';
import style from './style.scss';


export default class Launcher extends Component {
  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render(props) {
    const isOpen = props.hasOwnProperty('isOpen') ? props.isOpen : this.state.isOpen;
    return (
        <div>
        <div>
        </div>
        <div class={cx(style.launcher, isOpen ? style.opened : '')} onClick={this.handleClick.bind(this)}>
        <MessageCount count={props.newMessagesCount} isOpen={isOpen} />
        <img class={style.openIcon} src={launcherIconActive} />
        <img class={style.closedIcon} src={launcherIcon} />
        </div>
        <ChatWindow
      messageList={props.messageList}
      onUserInputSubmit={props.onMessageWasSent}
      teamName={props.teamName}
      imageUrl={props.imageUrl}
      isOpen={isOpen}
      onClose={this.handleClick.bind(this)}
      showEmoji={props.showEmoji}
        />
        </div>
    );

  }
}
