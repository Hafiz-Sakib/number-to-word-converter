# Number to Words 🔢

A modern, interactive web application that converts numbers into words in both Bangla and English. Built with React, Tailwind CSS, and Font Awesome, this project features a sleek, animated interface with a gradient background, card-based layout, and smooth transitions for an engaging user experience.

## Table of Contents

- Features
- Technologies Used
- Live Demo
- Installation
- Usage
- Screenshots
- Contributing
- License

## Features

- Convert numbers to words in Bangla (e.g., 123.5 → একশত তেইশ দশমিক পাঁচ).
- Convert numbers to words in English (e.g., 12345 → twelve thousand three hundred forty-five).
- Supports decimal numbers for Bangla conversions (first decimal digit only).
- Interactive UI with hover animations, transitions, and a responsive design.
- Copy-to-clipboard functionality for conversion results.
- Clear input button for quick resets.
- Gradient backgrounds and modern card-based layout with Tailwind CSS.

## Technologies Used

- **React**: For building the dynamic user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **Font Awesome**: For icons to enhance interactivity.
- **Babel**: For JSX support in the browser.
- **CDNs**: React, ReactDOM, Tailwind CSS, and Font Awesome loaded via CDN for simplicity.

## Live Demo

Try the application live at number-to-word-converter-two.vercel.app.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hafiz-Sakib/number-to-word-converter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd number-to-word-converter
   ```

3. Open `index.html` in a web browser. No additional setup is required since the project uses CDN-hosted dependencies.

Alternatively, you can serve the project using a local server for development:

```bash
npx live-server
```

## Usage

1. Open the application in a web browser.
2. On the homepage, choose either "বাংলা সংখ্যা → শব্দ" (Bangla) or "English Number → Words."
3. Enter a number in the input field (e.g., `123.5` for Bangla or `12345` for English).
4. Click the "রূপান্তর করুন" (Convert) button to see the result in words.
5. Use the "কপি" (Copy) button to copy the result to your clipboard.
6. Click the "পিছনে যান" (Go Back) button to return to the homepage.

## Screenshots

Below are screenshots showcasing the application's interface:

- **Homepage**

  ![Homepage](./home.png)

- **Bangla Converter**

  ![Bangla Converter](./bangla.png)

- **English Converter**

  ![English Converter](./english.png)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the existing style and does not alter the core conversion logic.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
