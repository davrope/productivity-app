import { useNavigate } from "react-router-dom";
// import history from '../history'

export const WithRouter = (Component)=>{
    const Wrapper = (props)=>{
        const history = useNavigate();
        // const history = {history}
        
        return(
            <Component
            history = {history}
            {...props}
            />
        );
    };

    return Wrapper;
}