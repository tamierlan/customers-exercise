
import '../style/Button.css';

const Button = (props) => {
    const { text } = props;

    return (
        <button>{ text }</button>
    )
};

export default Button;