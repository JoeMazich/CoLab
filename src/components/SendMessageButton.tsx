import Button from '@material-ui/core/Button';
import React from 'react';
import { db } from '../services/firebase';

interface Props {
    message: string;
};

const SendMessageButton: React.FC<Props> = (props) => {
    const { message } = props;

    const handleOnClick = () => {
        db.ref('messages').push({
            message: message
        });
    };


    return (
        <Button
            className='Button'
            variant='outlined'
            onClick={handleOnClick}
        >
            <div>
                SEND
            </div>
        </Button>
    );
};

export default SendMessageButton;
