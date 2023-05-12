import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = ({ postId }) => {
    const { comments, loading, error } = useSelector((state) => state.comments);

    if (loading) {
        return <div>Loading comments...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h3>Comments:</h3>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <strong>{comment.name}</strong>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
