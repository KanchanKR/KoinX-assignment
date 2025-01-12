

# KoinX Assignment Project

## Deployment

You can view the live project at the following link:

[**CoinPage Live Demo**](#)  _(https://koinx-assignment-kkr.netlify.app/)_

---

## Overview
This project is a responsive web page built using React and Tailwind CSS, designed to display cryptocurrency data. It includes various components that fetch and display real-time data, such as trending coins, performance statistics, tokenomics, and sentiment analysis. The layout is fully responsive, ensuring a seamless user experience across devices of all screen sizes.

---

## Features

- **Trending Coins**: Displays the top 3 trending cryptocurrencies with their names, symbols, and 24-hour price change percentage.
- **Crypto Overview**: Provides a snapshot of cryptocurrency data.
- **Performance Section**: Displays performance metrics of the cryptocurrency.
- **Sentiment Section**: Shows sentiment analysis about the crypto market.
- **Tokenomics**: Shows the initial distribution of tokens.
- **Team Section**: Displays a list of team members.
- **Page Holder**: The initial layout with headers and basic information.
- **Crads Promo**: A promotional section for additional content.
- **Suggestion Section**: Provides suggestions to the user based on their interest.

---

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Axios**: Promise-based HTTP client for fetching data from external APIs.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **React Hooks**: For state management and lifecycle management in functional components.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/coinpage-project.git
   ```

2. Navigate to the project folder:

   ```bash
   cd coinpage-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Folder Structure

```bash
coinpage-project/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/             # All reusable components
│   │   ├── About.tsx           # About section component
│   │   ├── CradsPromo.tsx      # Promo section component
│   │   ├── Crypto.tsx          # Crypto section component
│   │   ├── PageHolder.tsx      # Header section component
│   │   ├── PerformanceSection.tsx # Performance section component
│   │   ├── SentimentSection.tsx  # Sentiment section component
│   │   ├── ToggleSection.tsx   # Toggle section component
│   │   ├── Tokenomics.tsx      # Tokenomics section component
│   │   ├── TrendingCoins.tsx   # Trending coins section component
│   │   ├── TeamCard.tsx        # Team card component
│   │   └── SuggestionSection.tsx # Suggestions section component
│   ├── App.tsx                 # Main app file that holds everything together
│   └── index.tsx               # Entry point for React
├── tailwind.config.js          # Tailwind configuration file
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

---

## Design Considerations

- **Responsive Layout**: The page layout has been designed to adapt to different screen sizes, from mobile phones to large desktop monitors.
- **Flexbox Layout**: Flexbox is used to structure the layout and align elements correctly.
- **Reusable Components**: Each section of the page is broken down into smaller, reusable components for better maintainability.

---

## API Integration

The project integrates with the **CoinGecko API** to fetch trending coin data in real-time. The API is used to populate the Trending Coins section.

- Endpoint: `https://api.coingecko.com/api/v3/search/trending`
- The data fetched includes:
  - Coin name
  - Coin symbol
  - 24-hour price change percentage
  - Coin icon

---

## Challenges & Learnings

- **Responsive Design**: Tailwind CSS made it easier to implement a responsive layout, adjusting elements as the screen size changes without needing to write custom media queries.
- **API Integration**: Handling asynchronous API calls with Axios and managing the fetched data within React state was a new learning experience. This also helped me understand how to manage side effects in React using `useEffect`.
- **TypeScript**: Utilizing TypeScript allowed me to enforce stricter typing and better handle data structures, making the development process more predictable.

---

## Future Improvements

- **State Management**: For more complex projects, state management tools like Redux or Context API could be implemented to manage global state.
- **Error Handling**: Additional error handling could be added for API requests to improve the user experience.
- **User Authentication**: Implementing authentication and user-specific data could make the app more interactive.
- **Styling**: Although the project uses Tailwind CSS for styling, a component library like Material UI or Ant Design could be considered in the future for more complex UI elements.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Tailwind CSS**: [TailwindCSS Documentation](https://tailwindcss.com/)
- **React**: [React Documentation](https://reactjs.org/)
- **Axios**: [Axios Documentation](https://axios-http.com/)
- **CoinGecko API**: [CoinGecko API Documentation](https://www.coingecko.com/en/api)

