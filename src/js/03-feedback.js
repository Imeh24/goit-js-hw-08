import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';



const updateLocalStorageThrottled = throttle(() => {
  const data = { email: form.email.value, message: form.message.value };
  localStorage.setItem(localKey, JSON.stringify(data));
}, 500);

form.addEventListener('input', () => {
  updateLocalStorageThrottled();
});



const storedData = localStorage.getItem(localKey);
const { email = '', message = '' } = storedData ? JSON.parse(storedData) : {};


form.email.value = email;
form.email.placeholder = 'Valid email address';
form.message.value = message;
form.message.placeholder = 'Write your feedback';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (storedData) {
    try {
      const { email, message } = JSON.parse(storedData);
      console.log('Feedback submitted:');
      console.log('Email:', email);
      console.log('Message:', message);
      console.log({ email, message });
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  }

  localStorage.removeItem(localKey);
  form.reset();
});