import { BorderClear } from "@mui/icons-material";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
    return (
        <Box>
            <Box width="100%" 
            backgroudnColor={theme.palette.background.alt} 
            p="1rem 6%" 
            textAlign="center"
            >
                <Typography 
                    fontWeight="bold" 
                    fontSize="32px"
                    color="primary"
                >
                    SoMedia
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "93%" }
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroudnColor={theme.palette.background.alt}
            >
                <Typography 
                    fontWeight="500" 
                    variant="h5"
                    sx={{ mb : "1.5rem" }}
                >
                    Welcome to SoMedia, the Social Media for so called humans! 
                </Typography>
                <Form />
            </Box>
        </Box>
    )
};

export default LoginPage;