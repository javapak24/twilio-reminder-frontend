const BACKEND_URL = 'http://localhost:3000'; // Backend server URL

export const fetchReminders = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/reminders`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching reminders:', error);
    return [];
  }
};

export const addReminder = async (reminder) => {
  try {
    await fetch(`${BACKEND_URL}/reminders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminder),
    });
  } catch (error) {
    console.error('Error adding reminder:', error);
  }
};
