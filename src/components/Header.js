
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import '../style/Header.css';


const Header = (props) => {
    const { data } = props;

    return (
        <header>
            <ul>
                {
                data.map(item => {
                    return (
                        <li key={item.text}>
                            <Link to={ item.to }>
                               <Button text={ item.text } />
                            </Link>
                       </li>
                    )
                })
                }
            </ul>
        </header>
    )
}

export default Header;
