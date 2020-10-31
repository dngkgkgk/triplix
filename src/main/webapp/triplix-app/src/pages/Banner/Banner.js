import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import './Banner.css';
import BestPicture from './BestPicture';

const Container = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 14px;
    margin-top: -20px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 787px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 100) 0,
            rgba(25, 25, 25, 0) 20%,
            rgba(25, 25, 25, 0) 20%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 50) 100%
        ),
        url('images/banner.png');
    background-size: cover;
    background-position: center center;
`;

const TitleContainer = styled.div`
    position: absolute;
    left: 240px;
    bottom: 400px;
`;

const Title = styled.h1`
    font-size: 80px;
    line-height: 116px;
    letter-spacing: -1.6px;
    margin-bottom: 41px;
`;

const ReviewButton = styled.button`
    width: 215px;
    height: 45px;
    color: #ffffff;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.48px;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 28px;
    cursor: pointer;
    outline: none;
`;

const BestPicContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 72px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

    function Banner() {
        const [posts, setPosts] = useState([]);
    
        useEffect(() => {
            fetch("http://localhost:8000/board/")
            .then((res)=>res.json())
            .then((res)=>{
                setPosts(res);
            });
        },[]);

    const nextSlide = () => {
        const container = document.querySelector('.row__posters');
        sideScroll(container, 'right', 25, 300, 30);
    };

    const prevSlide = () => {
        const container = document.querySelector('.row__posters');
        sideScroll(container, 'left', 25, 300, 30);
    };

    const sideScroll = (element, direction, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <Container>
            <BackgroundImage />
            <TitleContainer>
                <div style={{ color:'white', fontSize: '40px', letterSpacing: '-0.8px' }}>
                    오늘의{' '}
                    <span style={{ color: 'blue', fontFamily: 'bold' }}>
                        추천 여행지
                    </span>
                </div>
                <Title>메인 페이지(배너)</Title>
                <ReviewButton>관련 리뷰 보기</ReviewButton>
            </TitleContainer>
            <BestPicContainer>
                <button
                    id="slideBack"
                    type="button"
                    onClick={prevSlide}
                    style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '64px',
                        outline: '0',
                        cursor: 'pointer',
                        backgroundImage: 'url("/images/bannerLeftBtn.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                />
                <div className="row__posters">
                    {posts.map(({ btitle, bcontent, member, bimage, blocation }) => (
                        <BestPicture
                            id={member.mname}
                            title={btitle}
                            content={bcontent}
                            member={member}
                            image={bimage}
                            location={blocation}
                        />
                    ))}
                </div>
                <button
                    id="slide"
                    type="button"
                    onClick={nextSlide}
                    style={{
                        marginRight: '20px',
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '64px',
                        outline: '0',
                        cursor: 'pointer',
                        backgroundImage: 'url("/images/bannerRightBtn.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                />
            </BestPicContainer>
        </Container>
    );
}

export default Banner;
