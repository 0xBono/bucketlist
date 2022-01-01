import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

interface CardProps {
  id: string;
  emoji: string;
  title: string;
}

export const Card = (card: CardProps) => {
  return (
    <div id={card.id} className={cx('card')}>
      <span className={cx('emoji')}>{card.emoji}</span>
      <span className={cx('title')}>
        {card.title.length > 18
          ? card.title?.substring(0, 18) + '..'
          : card.title}
      </span>
    </div>
  );
};

Card.defaultProps = {
  id: undefined,
  emoji: '🚫',
  title: '목표가 존재하지 않아요!',
};
