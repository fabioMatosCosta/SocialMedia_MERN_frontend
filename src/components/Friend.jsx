import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate, useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { _id } = useSelector((state) => state.user );
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark =  palette.primary.dark;
    const main =  palette.neutral.main;
    const medium = palette.neutral.medium;

    const isFriend =  friends.find((friend) => friend._id === friendId)

    const patchFriend = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${friendId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json"
                },
            }
        );
        const data = await response.json();
        dispatch(setFriends({friends: data}))
    };

    return(
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px"/>
                <Box
                    onClick={() => {
                        navigate(`/profile/${friendId}`);
                        navigate(0); // refresh the page when you click on a friend and then on a friend of a friend, or else does not load the correct assests
                    }}
                >
                    <Typography
                        colos={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: {primaryLight},
                                cursor: "pointer"
                            }
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        color={medium}
                        fontSize="0.75rem"
                    >
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton
                onClick={()=> patchFriend()}
                sx={{ backgroundColor: primaryLight, p:"0.6rem"}}
            >

            </IconButton>
        </FlexBetween>
    )
}

export default Friend;