import React, { useState, useCallback   } from 'react';
import { Row, Col, Comment, Tooltip, Typography, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { fetchReply } from '../store/thunk/thunkPost';

const { Paragraph } = Typography;
const paragraphData = { rows: 3, expandable: true, symbol: <span>more</span> }

const Desc = ({ post }) => {
    const { PostReply } = useSelector(state => state.storePost);
    const { isLogin, userId } = useSelector(state => state.storeUser);
    const dispatch = useDispatch();

    const [replyContent, setReplyContent] = useState('');
    
    const onChangeReply = useCallback(e => {
        setReplyContent(e.target.value);
    }, []);

    const onClickReply = useCallback(index => () => {
        replyContent !== '' && dispatch(fetchReply({ replyContent, userId, index }));
        setReplyContent('');
    }, [replyContent, isLogin]);
    return (
        <Row>
            <Col span={24}>
                <Paragraph
                    ellipsis={paragraphData}>
                    {post.post_content}
                </Paragraph>
            </Col>
            {/*댓글*/}
            {
                PostReply.map((reply, index) => (
                    reply.reply_post_author === post.post_id &&
                    <Col span={24} key={index}>
                        <Comment
                            author={<span>{reply.reply_user_author}</span>}
                            content={<p>{reply.reply_content}</p>}
                            datetime={
                                <Tooltip title={reply.reply_createdate}>
                                    <span>{reply.reply_createdate}</span>
                                </Tooltip>
                            }
                        />
                    </Col>
                ))
            }{
                isLogin &&
                <React.Fragment>
                    <Col md={20} xs={18}>
                        <Input onChange={onChangeReply} value={replyContent} placeholder="댓글..." bordered={false} onPressEnter={onClickReply(post.post_id)} />
                    </Col>
                    <Col md={4} xs={6}><Button onClick={onClickReply(post.post_id)} type="text">게시</Button></Col>
                </React.Fragment>
            }
        </Row>
    );
}

export default Desc;