import Image from 'next/image';
import javascript_profile from '../../../public/images/javascript_profile.png';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <section className={styles.section}>
            <Image src={javascript_profile} alt="프로필" className={styles.profile_image} />
            <div className={styles.profile_text}>
                <h3>
                    Hi, there <b>Here is next.js exercise-blog</b>
                </h3>
                <p>여기는 next.js 연습장입니다.</p>
            </div>
            <button className={styles.profile_contact}>Contact Me</button>
        </section>
    );
};

export default Profile;
