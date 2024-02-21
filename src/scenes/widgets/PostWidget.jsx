import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({ userId, isProfile = false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);

    

};

export default PostWidget; 