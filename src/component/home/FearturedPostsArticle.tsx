import Image from 'next/image';
import styles from './FearturedPostsArticle.module.css';
import { PostType } from '@/models/posts';

const FearturedPostsArticle = ({ id, title, subtitle, tags, date, image }: PostType) => {
    return (
        <article className={styles.article}>
            <Image src={image} alt="메인 포스트" width={1000} height={1000} className={styles.image} />
            <div>
                <div>{date}</div>
                <div>
                    <h6>{title}</h6>
                    <p>{subtitle}</p>
                    {tags.map(tag => (
                        <span>{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default FearturedPostsArticle;
