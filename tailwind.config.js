module.exports = {
  mode: 'jit',
  HTMLFormControlsCollection: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '0057B7': '#0057B7',
        '2F80ED': '#2F80ED',
        '333333': '#333333',
        '4F4F4F': '#4F4F4F',
        '828282': '#828282',
        'A9A9A9': '#A9A9A9',
        'BDBDBD': '#BDBDBD',
        'F2F2F2': '#F2F2F2',
        'FFD700': '#FFD700',
        'EB5757': '#EB5757',
      },
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

