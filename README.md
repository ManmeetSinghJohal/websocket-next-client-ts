# Front-End Client for WebSocket Data

This project is a React-based front-end client that connects to a WebSocket server to display server data in a user-friendly format. It leverages WebSocket technology to receive real-time updates and presents the data in a series of visually styled components.

## Features

- Connects to a WebSocket server to receive real-time data.
- Displays a loading spinner while data is being fetched.
- Renders detailed server information in a series of styled cards.
- Uses a circular progress bar to visually represent CPU load.
- Provides a back button to navigate to a previous view.

## Requirements

- Node.js (v14 or later recommended)
- npm (or yarn)
- React (v18 or later)
- Next.js (v13 or later)
- Tailwind CSS (for styling)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ManmeetSinghJohal/websocket-next-client-ts
   cd websocket-next-client-ts
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Configuration

- The WebSocket server URL is hardcoded as `ws://127.0.0.1:8000`. If your server runs on a different URL or port, update the `WS_URL` variable in the code.

## Running the Client

Start the development server using the following command:

```bash
npm run dev
```

## Running the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## How It Works

- **WebSocket Connection:** Connects to the WebSocket server using the `react-use-websocket` library to receive real-time data.

- **Loading State:** Displays a `RingLoader` spinner from `react-spinners` while data is being fetched.

- **Data Rendering:** Once data is received, it is displayed in `ServerCardsContainer`, which uses various React components to present detailed server information.

- **Server Details Card:** The `ServerDetailsCard` component provides a detailed view of the server's status, services, stats, and CPU load using styled cards and a circular progress bar.

## Dependencies

- `react`: The core React library for building the user interface.
- `react-use-websocket`: Hook for managing WebSocket connections in React.
- `react-spinners`: Library for various loading spinner components.
- `@/components/ServerCardsContainer`: Custom component for rendering server data cards.
- `@/components/ui/button`: Custom button component.
- `@/types/types`: TypeScript types for the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact Manmeet Singh Johal at mjlearn13@gmail.com.
