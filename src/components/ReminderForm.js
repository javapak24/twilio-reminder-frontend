import { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

const ReminderForm = ({ addReminder }) => {
  //each variable declares a state variable, provides a function(ex:setPhone) to update the state, and initializes each state as an empty string
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sendTime, setSendTime] = useState('');

  //defines a function named handleSubmit that takes one parameter (e), which represents the event object from the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload upon event
    addReminder({ phone, message, sendTime }); // function that resets the input fields after submission by setting the state variables to empty
    setPhone('');
    setMessage('');
    setSendTime('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Input
        type="datetime-local"
        value={sendTime}
        onChange={(e) => setSendTime(e.target.value)}
      />
      <Button type="submit">Schedule Reminder</Button>
    </Form>
  );
};

export default ReminderForm;
