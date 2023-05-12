import axios from 'axios';

export const fetchCommentsRequest = () => ({
    type: 'FETCH_COMMENTS_REQUEST',
});

export const fetchCommentsSuccess = (comments) => ({
    type: 'FETCH_COMMENTS_SUCCESS',
    payload: comments,
});

export const fetchCommentsError = (error) => ({
    type: 'FETCH_COMMENTS_ERROR',
    payload: error,
});

export const fetchComments = (postId) => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => {
                dispatch(fetchCommentsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchCommentsError(error.message));
            });
    };
};
