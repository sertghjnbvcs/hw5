import axios from 'axios';

export const fetchPostsRequest = () => ({
    type: 'FETCH_POSTS_REQUEST',
});

export const fetchPostsSuccess = (posts) => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
});

export const fetchPostsError = (error) => ({
    type: 'FETCH_POSTS_ERROR',
    payload: error,
});

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchPostsError(error.message));
            });
    };
};
