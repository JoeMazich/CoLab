import React from 'react';
import './styles/HeaderText.css';

interface Props {
    text: string;
};

const HeaderText: React.FC<Props> = (props) => {

    const { text } = props;

    return (
        <div className="HeaderText">
          {text}
        </div>
    );
};

export default HeaderText;
