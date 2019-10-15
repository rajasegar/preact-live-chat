import { h, Component } from 'preact';
import EmojiConvertor from 'emoji-js';
import emojiData from '../../emojiData';
import style from './style';

export default class EmojiPicker extends Component {
   constructor() {
    super();
    this.emojiConvertor = new EmojiConvertor();
    this.emojiConvertor.init_env();
  }

  componentDidMount() {
    const elem = this.domNode;
    elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
      elem.style.transition = 'opacity 350ms';
      elem.style.opacity = 1;
    });
    this.domNode.focus();
  }

  render(props) {
    return (
      <div
        tabIndex="0"
        onBlur={props.onBlur}
        class={style.emojiPicker}
        ref={(e) => { this.domNode = e; }}
      >
        <div class={style.content}>
          {emojiData.map((category) => {
            return (
              <div class={style.category} key={category.name}>
                <div class={style.categoryTitle}>{category.name}</div>
                {category.emojis.map((emoji) => {
                  return (
                    <span
                      key={emoji}
                      class={style.emoji}
                      onClick={() => {
                        props.onEmojiPicked(emoji);
                        this.domNode.blur();
                      }}
                    >
                      {emoji}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
