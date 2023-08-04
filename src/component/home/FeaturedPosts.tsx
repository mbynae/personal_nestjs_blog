import FearturedPostsArticle from './FearturedPostsArticle';
import { POSTS } from '@/data/dummy-data';
import styles from './FeaturedPosts.module.css';

const FeaturedPosts = () => {
    return (
        <section className={styles.featured_section}>
            <h3>Featured Posts</h3>
            <div className={styles.posts_box}>
                {POSTS.map(data => (
                    <FearturedPostsArticle key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;
