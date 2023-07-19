// import React from "react";
// import styled from "styled-components";
// import { AiOutlineSearch } from "react-icons/ai";
// import { CgProfile} from "react-icons/cg"

// // export default function Header() {
// function Header() {
//     return <Container>
//         <div className="search__bar">
//             <AiOutlineSearch />
//             <input type="text" placeholder="Nhập tên bài hát, ca sĩ, thể loại..."/>
//         </div>
//         <div className="avatar">
//             <a href="https://facebook.com">
//                 <CgProfile />
//                 <span>Username</span>
//             </a>
//         </div>
//     </Container>;
// }

// const Container = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1.5rem;
//     height: 5vh;
//     position: sticky;
//     top: 0;
//     transition: 0.3s ease-in-out;
//     background-color: #21212a;
//     .search__bar {
//         margin-left: 15rem;
//         background-color: #3e3f44;
//         width: 35%;
//         padding: 0.4rem 1rem;
//         border-radius: 2rem;
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//         input {
//             color: white;
//             background-color: #3e3f44;
//             border: none;
//             height: 1.5rem;
//             width: 100%;
//             &:focus {
//                 outline: none;             
//             }
//         }
//         input::placeholder {
//             color: #9ca3af;
//         }
//         svg {
//             font-size: 1.5rem;
//         }
//     }
//     .avatar {
//         background-color: #3e3f44;
//         padding: 0.3rem 0.4rem;
//         padding-right: 1rem;
//         border-radius: 2rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         a {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 0.5rem;
//             text-decoration: none;
//             color: #a5a6c4;
//             svg {
//                 font-size: 1.3rem;
//                 background-color: #21212a;
//                 padding: 0.2rem;
//                 border-radius: 1rem;
//                 color: white;
//             }
//         }
//     }
// `;

// export default Header;



import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../../Components/Button/Button';
import {
    ArrowLeft,
    ArrowRight,
    BarSort,
    ButtonTheme,
    Close,
    DowloadIcon,
    IconsVIP,
    IconsUpload,
    SearchMobile,
    Setting,
} from '../../../Components/Icons';
import Images from '../../../Components/Image';
import Search from '../../../Components/Search';
import { MENU_SETTING_HEADER, MENU_USER_HEADER } from '../../../redux/constant';
import { combinedStatusSelector } from '../../../redux/selector';
import {
    loginSlice,
    statusSlice,
    themeSlice,
    uploadSlice,
} from '../../../redux/sliceReducer';
import Menu from '../Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ styles, isScrollHeader }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const btnSearchRef = useRef();
    const { isTheme, dataUser, isSidebarMobile } = useSelector(combinedStatusSelector);
    const [searchForm, setSearchForm] = useState(false);
    const [animation, setAnimation] = useState('on');

    const hostsIdx = window.history.state.idx;
    const hostLength = window.history.length;
    // handleChangeTheme
    const onChangeTheme = () => {
        dispatch(themeSlice.actions.setIsModalTheme(!isTheme));
    };
    const handleLogin = () => {
        dispatch(loginSlice.actions.setIsLogin(true));
    };
    const handleUpload = () => {
        dispatch(uploadSlice.actions.setIsLogin(true));
    };

    const handleSearchForm = async (e) => {
        //  set animation delay
        e.stopPropagation();
        setAnimation('off');
        await new Promise((resolve) => {
            setTimeout(resolve, searchForm && 300);
        });

        setSearchForm(!searchForm);
        setAnimation('on');
    };

    const handleTurnOffSearchForm = async (e) => {
        //turnoff exclude btnSearch and set animation delay
        e.stopPropagation();
        setAnimation('off');
        await new Promise((resolve) => {
            setTimeout(resolve, searchForm && 300);
        });
        if (!e.target.contains(btnSearchRef.current)) {
            setSearchForm(false);
        }
        setAnimation('on');
    };
    const handleSidbar = () => {
        dispatch(statusSlice.actions.isSidebarMobile(!isSidebarMobile));
    };

    return (
        <Media query="(max-width: 600px)">
            {(matches) => {
                return matches ? (
                    // Mobile
                    <header
                        className={cx(
                            'wrapper',
                            styles,
                            isScrollHeader > 133 ? 'isScroll' : '',
                        )}
                    >
                        <div
                            className={cx('inner')}
                            onClick={(e) => handleTurnOffSearchForm(e)}
                        >
                            <span className={cx('btn_barsort')} onClick={handleSidbar}>
                                <BarSort />
                            </span>
                            <Link to="/" className={cx('logo')}></Link>

                            <div className={cx('button_controls_right')}>
                                <span
                                    ref={btnSearchRef}
                                    className={cx('btn_search_header_mobile')}
                                    onClick={handleSearchForm}
                                >
                                    {!searchForm ? <SearchMobile /> : <Close />}
                                </span>
                                <div className={cx('btn_theme')}>
                                    <Button
                                        circle
                                        Icons={ButtonTheme}
                                        extraTitle={'Chủ đề'}
                                        onHandle={onChangeTheme}
                                    />
                                </div>

                                <div className={cx('btn_upload')}>
                                    <Button
                                        circle
                                        Icons={IconsUpload}
                                        extraTitle={'Upload'}
                                        onHandle={handleUpload}
                                    />
                                </div>

                            </div>
                        </div>
                        {searchForm && (
                            <div
                                className={cx('button_controls_left', animation)}
                                ref={btnSearchRef}
                            >
                                <div className={cx('search_form')}>
                                    <Search
                                        visibleHeaderMobile={true}
                                        handleSearchForm={(e) => handleSearchForm(e)}
                                    />
                                    {/* send request open search form */}
                                </div>
                            </div>
                        )}
                    </header>
                ) : (
                    //tablet and desktop
                    <header
                        className={cx(
                            'wrapper',
                            styles,
                            isScrollHeader > 133 ? 'isScroll' : '',
                        )}
                    >
                        <div className={cx('inner')}>
                            <div className={cx('button_controls_left')}>
                                <span
                                    className={cx(
                                        'icon-arrow-prev',
                                        hostsIdx === 0 && 'disabled',
                                    )}
                                    onClick={() => hostsIdx > 0 && navigate(-1)}
                                >
                                    <ArrowLeft />
                                </span>
                                <span
                                    className={cx(
                                        'icon-arrow-next',
                                        hostsIdx === hostLength - 2 && 'disabled',
                                    )}
                                    onClick={() => navigate(1)}
                                >
                                    <ArrowRight />
                                </span>
                                <div className={cx('search_form')}>
                                    <Search />
                                </div>
                            </div>
                            <div className={cx('button_controls_right')}>
                                <Button
                                    className={cx('btn_download')}
                                    primary
                                    LeftIcons={DowloadIcon}
                                    sizes="normal"
                                >
                                    Download
                                </Button>
                                <Button
                                    circle
                                    Icons={ButtonTheme}
                                    extraTitle={'Chủ đề'}
                                    onHandle={onChangeTheme}
                                />

                                {/* <Button
                                    circle
                                    Icons={IconsUpload}
                                    extraTitle={'Upload'}
                                    onHandle={handleUpload}
                                /> */}

                                <Menu items={MENU_SETTING_HEADER}>
                                    <Button
                                        circle
                                        Icons={Setting}
                                        extraTitle={'Cài đặt'}
                                    />
                                </Menu>

                                {dataUser.accessToken ? (
                                    <Menu items={MENU_USER_HEADER} visible={false}>
                                        <Images
                                            className={cx('avatar')}
                                            src={dataUser.data.image}
                                        />
                                    </Menu>
                                ) : (
                                    <Button purplePrimary onHandle={handleLogin}>
                                        Đăng Nhập
                                    </Button>
                                )}
                            </div>
                        </div>
                    </header>
                );
            }}
        </Media>
    );
}

export default React.memo(Header);

Header.propTypes = {
    styles: PropTypes.string,
    isScrollHeader: PropTypes.number,
};
