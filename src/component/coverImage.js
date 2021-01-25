import React from 'react';
import { Image } from 'antd';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const CoverImage = ({ post }) => {
    const { PostImages, callPost } = useSelector(state => state.storePost);
    return (
        callPost &&
        // <Slider {...settings}>
        //     <div>
        //         <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} throttle={100}>
        //             {PostImages.map((img, index) => (
        //                 post.post_id === img.image_author &&
        //                 <img
        //                     key={index}
        //                     width="100%"
        //                     height="auto"
        //                     src={post.post_id === img.image_author && img.image_link}
        //                 />
        //             ))}
        //         </LazyLoad>
        //     </div>
        // </Slider>



        <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="200px" throttle={100}>
            {PostImages.map((img, index) => (
                <Image.PreviewGroup key={index}>
                    <Image
                    // width='100%'
                        // height="400px"
                        src={post.post_id === img.image_author && img.image_link}
                    />
                </Image.PreviewGroup>
            ))}
        </LazyLoad>
    );
}

export default CoverImage;