import { h, Component } from 'preact';
import style from './style';

export default class EmojiMessage extends Component {
  render(props) {
    return(
        <div class={style.this}>{props.data.emoji}</div>
    );
  }
}
