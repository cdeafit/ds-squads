import { useHistory } from "react-router-dom";




const History = () => {

    
    const history = useHistory();

    const redirect = (dir) => {
        history.push(dir)
    }
}
