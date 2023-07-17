import classNames from 'classnames/bind';

import TitlePage from '../../layouts/Components/TitlePage/TitlePage';
import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
  return (

    <div className={cx('wrapper')}>
      <TitlePage title="Giới thiệu" sizes="large" />
      <p className={cx('content')} style={{fontSize: "large"}}> Âm nhạc là sự kết hợp của giọng hát và các giai điệu của nhạc cụ nhằm 
      tạo nên vẻ đẹp, sự hài hoà của cảm xúc, mang đến cho con người những giây phút tuyệt vời. Không những thế, nó còn giúp cải thiện 
      chất lượng giấc ngủ, ngăn ngừa chứng trầm cảm, giảm đau, kiểm soát cơn thèm ăn để làm đẹp vóc dáng, tăng cường sự tập trung… 
      Nếu như chúng ta bỏ qua việc nghe nhạc, chúng ta đã bỏ lỡ rất nhiều lợi ích tốt cho sức khỏe. Cùng với sự phát triển nhanh chóng 
      của Internet và công nghệ, nhu cầu nghe nhạc của người dùng cũng ngày càng phát triển, đó là nhu cầu được nghe nhạc một cách 
      nhanh chóng, tiện lợi, nghe nhạc ở mọi lúc mọi nơi và dễ dàng cập nhật xu hướng âm nhạc hiện tại. Bên cạnh sự phát triển quá 
      dữ dội của công nghệ, việc người dùng dùng đĩa để nghe nhạc lại càng ít đi, thay vào đó người dùng lại có thói quen nghe nhạc 
      trên các nền tảng web. Và không chỉ nghe nhạc, chúng ta còn có thể sử dụng nhạc để giúp tăng sự tập trung, việc tích hợp thêm 
      todolist, notes hay timer cũng giúp việc học tập và làm việc được gia tăng sự hiệu quả.</p>
      <br/>
      <p className={cx('content')} style={{fontSize: "large"}}> Thấu hiểu rõ những điều trên, nhóm đã quyết định lên ý tưởng và xây dựng 
      một website nghe nhạc trực tuyến với định hướng đáp ứng đầy đủ các nhu cầu hiện tại của người dùng. Đó là LUXMUSIC.</p>
      <br/>
      <p className={cx('content')} style={{fontSize: "large"}}> LuxMusic là dịch vụ nghe nhạc mới. Với nhiều tính năng hữu ích 
      giúp người nghe luôn có trải nghiệm âm nhạc tuyệt vời và xuyên suốt trên các thiết bị của mình 
      (từ PC, điện thoại, máy tính bảng đến Smart TV). LuxMusic mang đến cho người yêu nhạc thư viện nhạc khổng lồ 
      với hàng chục triệu bài hát chất lượng cao có bản quyền đầy đủ tất cả các thể loại và được cập nhật liên tục nội dung 
      mới nhất mỗi ngày. Thành viên của LuxMusic có thể tự tổ chức thư viện nhạc cá nhân cho riêng mình, upload và lưu trữ kho nhạc 
      của mình ngay trên website và tạo playlist để nghe và chia sẻ cho bạn bè rất dễ dàng.</p>

      
    </div>
  );
}

export default Introduce;
