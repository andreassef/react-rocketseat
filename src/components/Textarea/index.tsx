import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';

// aqui utilizaremos o InputHTMLAttributes para recebermos qualquer atributo que type do nosso input já receberia por padrão
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;