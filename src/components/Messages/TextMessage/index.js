import { h, Component } from 'preact';
import chatIconUrl from '../../../assets/chat-icon.svg';
import style from './style';

export default class TextMessage extends Component {
  render(props) {
    return (
        <div className={style.textMessage}>{props.data.text}</div>
    );
  }
}
