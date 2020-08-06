import React, {InputHTMLAttributes} from 'react';
import './styles.css';

// aqui utilizaremos o InputHTMLAttributes para recebermos qualquer atributo que type do nosso input já receberia por padrão
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;