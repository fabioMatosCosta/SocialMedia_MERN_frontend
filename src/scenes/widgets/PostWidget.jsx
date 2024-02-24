import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlines,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";

import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({ userId, isProfile = false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);

    

};

export default PostWidget; 