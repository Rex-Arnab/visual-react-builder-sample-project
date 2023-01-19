import styles from './header.module.scss';
import classNames from 'classnames';
export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>This is From A Heading Componetn</div>
    );
};
