import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postsActions';
import { fetchComments } from '../redux/actions/commentsActions';
import CommentList from './CommentList';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleClick = (postId) => {
        dispatch(fetchComments(postId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Post List</h2>
            {posts.map((post) => (
                <div key={post.id} onClick={() => handleClick(post.id)}>
                    {post.title}
                    <CommentList postId={post.id} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
