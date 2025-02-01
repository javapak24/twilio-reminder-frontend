import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import { addReminder } from './api';

function App() {
  return (
    <div>
      <h1>SMS Reminder App</h1>
      <ReminderForm addReminder={addReminder} />
      <ReminderList />
    </div>
  );
}

export default App;
