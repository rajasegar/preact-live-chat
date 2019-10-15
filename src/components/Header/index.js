import { h, Component } from 'preact';
import closeIcon from '../../assets/close-icon.png';
import style from './style';

export default class Header extends Component {
  render(props) {
    return (
        <div class={style.header}>
        <img class={style.img} src={props.imageUrl} alt="" />
        <div class={style.teamName}> {props.teamName} </div>
        <div class={style.closeButton} onClick={props.onClose}>
        <img src={closeIcon} alt="" />
        </div>
        </div>
    );
  }
}
