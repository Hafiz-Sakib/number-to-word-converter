# NumScript — Number to Words Converter 🔢

A premium, dark-themed web application that converts numbers into words in both **Bangla** and **English**. Built with vanilla JavaScript, Tailwind CSS, and Font Awesome.

## Features

- 🌙 **Premium dark UI** with animated gold/teal gradient orbs and grid texture
- 🔤 **Bangla conversion** — supports integers and decimal numbers up to 99 crore
- 🌐 **English conversion** — supports integers and decimals with lakh/crore notation
- 📊 **Number Breakdown** — visual breakdown by crore, lakh, thousand, hundred, ones
- 🔢 **Digit Chips** — animated per-digit display as you type
- 🔊 **Text-to-Speech** — hear the result spoken aloud (browser TTS)
- 📋 **Copy to Clipboard** — one-click copy of the result
- 💾 **Save as .txt** — download the result as a text file
- 📤 **Share** — native share or copy to clipboard
- 🕐 **Conversion History** — persisted via localStorage, shown on home and inside converters
- ⌨️ **Keyboard Support** — press Enter to convert
- 📱 **Responsive** — works on mobile and desktop

## File Structure

```
num-to-word/
├── index.html    ← Main HTML (no inline JS/CSS)
├── styles.css    ← All custom CSS (dark theme, animations, layout)
├── script.js     ← All JavaScript logic (conversion, history, UI)
└── README.md
```

## Technologies

- **Vanilla JavaScript** — no frameworks, zero dependencies
- **Tailwind CSS CDN** — utility base
- **Font Awesome 6** — icons
- **Google Fonts** — Playfair Display, DM Sans, Hind Siliguri
- **Web Speech API** — text-to-speech
- **localStorage** — history persistence

## Usage

1. Open `index.html` in any modern browser
2. Choose **বাংলা** or **English**
3. Type a number (integers or decimals)
4. Hit **Convert** or press **Enter**
5. Copy, speak, save, or share the result

## Author

Made with ♥ by **Mohammad Hafizur Rahman Sakib**
