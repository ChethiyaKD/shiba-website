# 🐕 SHIBA Token Website

A modern, responsive website for tracking and displaying information about the SHIBA token, built with Next.js, TypeScript, and Tailwind CSS.

![SHIBA Token Website](public/preview.png)

## ✨ Features

- 📊 Real-time price tracking and chart visualization
- 💰 Detailed tokenomics breakdown
- 📈 Interactive price charts with multiple timeframes
- 🎨 Modern, responsive design with dark theme
- ⚡ Fast performance with Next.js
- 🔄 Live market data updates
- 📱 Mobile-friendly interface

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Recharts](https://recharts.org/) - Composable charting library
- [React](https://reactjs.org/) - UI library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shiba-website.git
cd shiba-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
shiba-website/
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   ├── styles/      # Global styles
│   └── types/       # TypeScript type definitions
├── tailwind.config.js
└── package.json
```

## 🧩 Components

- `Chart.tsx` - Interactive price chart with multiple timeframes
- `Tokenomics.tsx` - Token distribution and details
- `PriceDisplay.tsx` - Current price and basic stats
- `HypeMeter.tsx` - Community engagement indicator
- `Navbar.tsx` - Navigation and wallet connection
- `Footer.tsx` - Site footer with links and info

## 🎨 Customization

### Colors
The website uses a custom color palette that can be modified in `tailwind.config.js`:
- Primary: Orange (#fb923c)
- Background: Dark Blue (#0f1623)
- Card Background: Darker Blue (#1a1f2e)
- Text: White and Gray variations

### Animations
Custom animations are defined in `tailwind.config.js` including:
- Float
- Bounce
- Pulse
- Spin

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Shiba community
- Next.js team
- Tailwind CSS team
- Recharts contributors 