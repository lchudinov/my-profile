import { createClient } from 'graphql-ws';
import WebSocket from 'ws';

const client = createClient({
  url: 'ws://localhost:3000/graphql',
  webSocketImpl: WebSocket,
});

client.subscribe(
  {
    query: `
      query {
        profile {
          name
        }
      }
    `,
  },
  {
    next: (data) => {
      console.log('Received:', JSON.stringify(data, null, 2));
    },
    error: (error) => {
      console.error('Error:', error);
    },
    complete: () => {
      console.log('Completed');
    },
  },
);