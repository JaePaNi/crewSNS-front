import React from 'react';
import { Image } from 'antd';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';

const CoverImage = ({ post, img }) => {
    const { PostImages, callPost } = useSelector(state => state.storePost);
    return (
        callPost &&
        <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="200px" throttle={100}>
            {PostImages.map((img, index) => (
                <Image.PreviewGroup key={index}>
                    <Image src={post.post_id === img.image_author && img.image_link} />
                </Image.PreviewGroup>
            ))}
        </LazyLoad>
    );
}

export default CoverImage;