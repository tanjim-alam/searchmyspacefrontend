module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            primary: '#d33',      // Example custom color
            secondary: '#058e3d',    // Example custom color
            accent: '#673ab7',       // Example custom color
            'light-gray': '#f1f1f1', // Example custom color with hyphen
            'dark-gray': '#333333',  // Example custom color with hyphen
          },
      },
    },
    plugins: [],
  };
  