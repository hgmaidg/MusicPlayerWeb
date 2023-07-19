import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Images from '../Image';
import Introduce from '../../pages/Introduce/Introduce';
import Loading from '../../pages/Loading/Loading';
import { ImgFooter } from '../../assets/images/Footer';
import { combinedStatusSelector } from '../../redux/selector';

const cx = classNames.bind(styles);

function Footer() {
    const { isLoadingPage } = useSelector(combinedStatusSelector);
    const renderPartner = () => {
        const result = ImgFooter.map((img, index) => {
            return isLoadingPage ? (
                <Loading key={index} styles={{ height: '8vh', maxWidth: '10vw' }} />
            ) : (
                <figure className={cx('item_partner')} key={index}>
                    <Images type={cx('img_partner')} src={img} />
                </figure>
            );
        });
        return result;
    };
    return (
        <div className={cx('wrapper')}>
            {/* <h3 className={cx('title_footer')}>VỀ CHÚNG TÔI</h3> */}
            {/* <hr></hr> */}
            <h3 className={cx('title_footer')}>ĐỐI TÁC ÂM NHẠC</h3>
            <div className={cx('container')}>{renderPartner()}</div>
            
            <div className={cx('about-container')}>   
                 <div className={cx('logo-bg')}></div>
                <div className={cx('text_footer')}><a href="Introduce">GIỚI THIỆU</a></div>
                <div className={cx('text_footer')}><a href="">BẢN QUYỀN</a></div>
                <div className={cx('text_footer')}><a href="https://zalo.careers/about#Adtima">QUẢNG CÁO</a></div>
                <div className={cx('text_footer')}><a href="https://zalo.careers/jobs">TUYỂN DỤNG</a></div>
                <div className={cx('text_footer')}><a href="">LIÊN HỆ</a></div>

            </div>
            
        </div>
    );
}

export default Footer;
