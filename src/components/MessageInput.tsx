import TextField from '@material-ui/core/TextField';
import React from 'react';

interface Props {
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const EmailInput: React.FC<Props> = ({ setMessage }) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setMessage(event.target.value);
  };

    return (
        <TextField
          onChange={event => handleOnChange(event)}
        />
    );
};

export default EmailInput;
