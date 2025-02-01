import { useEffect, useState } from 'react';
import { fetchReminders } from '../api';
import { List, ListItem } from 'semantic-ui-react';

const ReminderList = () => {
  //each variable declares a state variable, provides a function(ex:setPhone) to update the state, and initializes each state as an empty string
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetchReminders().then(setReminders);
  }, []);

  return (
    <ul>
      {reminders.map((reminder) => (
        <List>
          <ListItem key={reminder._id}>
            {reminder.phone}: {reminder.message} at{' '}
            {new Date(reminder.sendTime).toLocaleString()}
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default ReminderList;
