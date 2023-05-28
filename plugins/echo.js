import Echo from 'laravel-echo';

export default function ({ app }) {
  window.Pusher = require('pusher-js');

  const echo = new Echo({
    broadcaster: 'pusher',
    key: '880bf7ef8f418ee1c2a6',
    cluster: 'ap1',
    encrypted: true,
  });

  app.echo = echo;

  // Example event listener
  echo.channel('notification')
    .listen('.NotificationEvent', (data) => {
      console.log('Event received:', data);
    });
}
