import { h, Component } from 'preact';
import style from './style';

export default class MessageCount extends Component {
  render(props) {
    if (props.count === 0 || props.isOpen === true ) {
      return null;
    }
     return(
         <div class={style.messageCount}>
         {props.count}
       </div>
     );
  }
}
