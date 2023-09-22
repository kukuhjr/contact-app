import { css } from "@emotion/css";
// MATERIAL UI
import { CircularProgress } from "@mui/material";

interface LoadingComponentProps {
    height?: string;
}

const LoadingComponent = ({ height }: LoadingComponentProps) => {
    return (
        <div className={css`
            height: ${height ?? "100%"};
            display: flex;
            align-items: center;
            justify-content: center;
        `}>
            <CircularProgress />
        </div>
    )
}

export default LoadingComponent