# URL Field Component

This project is a React component that displays a URL input field, which dynamically shows the favicon or a specific
icon of the entered URL. It uses Vite for bundling, Tailwind CSS for styling, and React for the component logic.

## Features

- **Dynamic Icon Display**: Shows either a specific social media icon or the favicon of the entered URL.
- **Debounced URL Parsing**: Efficient URL parsing to fetch the correct icon.
- **User Feedback**: Displays visual feedback when the input is touched or invalid.

## Technologies Used

- **Vite**: Fast and optimized frontend build tool.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **just-debounce-it**: A small utility to debounce functions.
- **react-aria-components**: A collection of React components that implement accessible UI patterns.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Carte-Blanche-Innovation-Integrated/url-field.git
   cd url-field
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start Vite's development server and you can view the application at `http://localhost:3000`.

## Usage

You can use the `UrlField` component in your React application as follows:

```jsx
import UrlField from './components/UrlField';

function App() {
  return (
    <div className="App">
      <UrlField placeholder="Enter a URL" />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- This component is inspired by the URL field implementation from [dub.co](https://dub.co).
- The code that computes the apex domain is directly adopted from [dub.co](https://github.com/dubinc/dub/blob/2c9359cea633c0f77900a979ea4c0c562e021399/packages/utils/src/functions/domains.ts#L47).
- The favicon fetching is powered by Google's favicon service.
- Icons are sourced from various social media platforms.
