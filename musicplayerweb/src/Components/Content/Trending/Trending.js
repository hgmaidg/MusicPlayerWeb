import styles from './Trending.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Trending() {
    return (
        <div className={('wrapper')}>
            {/* {isLoadingPage && <Loading styles={{ width: '15%', height: '5vh' }} />}
            {!isLoadingPage && (
                <div className={cx('title_section')}>
                    <h2>Trending</h2>
                    <Link to="top-trending?_filter=all">
                        <span>
                            TẤT CẢ
                            <span className={cx('chevon_right')}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </span>
                    </Link>
                </div>
            )} */}

            <div className={('title_section')}>
                <h2>Trending</h2>
                {/* <Link to="top-trending?_filter=all"> */}
                <Link style={{color: '#a5a6c4' ,textDecoration: 'none'}}>
                    <span>
                        TẤT CẢ
                        <span className={('chevon_right')}>
                            {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                        </span>
                    </span>
                </Link>
            </div>
            <div className={('button_select_national')}>
                {/* {RenderButtonSelect(paramsFilter, onHandleSelectNational)} */}
            </div>
            <div className={('container_list_song')}>
                {/* <RenderFullListSong
                    data={dataSliceRenderRender}
                    HomePageTrending={true}
                /> */}
            </div>
        </div>
    );
}

export default Trending;