import classNames from 'classnames/bind';
// import { TextField } from '@react-ui-org/react-ui';

import TitlePage from '../../layouts/Components/TitlePage/TitlePage';
import styles from './Contact.module.scss';
import Button from '../../Components/Button/Button';

// import { TextField, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
const cx = classNames.bind(styles);

function Contact() {
  
  return (
    
    <div className={cx('wrapper')}>
      <TitlePage title="Liên hệ" sizes="large" />
      <p className={cx('content')} style={{ fontSize: "large" }}> Chúng tôi luôn ghi nhận các đóng góp ý kiến của bạn để cải tiến
        và nâng cấp sản phẩm LuxMusic ngày một hoàn thiện và hữu ích hơn. Đừng ngại chia sẻ ý tưởng cho chúng tôi.</p>
      <br />
      <input className={cx('input')} placeholder="Chọn vấn đề cần liên hệ" list="opts" style={{ fontSize: "15px", padding: "8px", width: "355px", borderRadius: "5px", color: "black" }} />
      <datalist style={{ color: "red" }} className={cx('datalist')} id="opts">
        <option>Báo lỗi</option>
        <option >Góp ý sản phẩm</option>
        <option>Phát hành nội dung</option>
        <option>Hợp tác nội dung</option>
        <option>Tài khoản người dùng</option>
        <option>Vấn đề khác</option>
      </datalist>
      <br /><br />
      <textarea typeof='reset' id='text_area' placeholder="Nội dung" 
        style={{ padding: "8px", color: "black", fontSize: "15px", width: "355px", height: "150px", borderRadius: "5px" }}></textarea>
      <br /><br />
      <Button style={{width: "120px"}} purplePrimary>
        Gửi
      </Button>
    </div>
  );
}

export default Contact;
