# WatchListify

Watch anime and drama online for free. 

![iPhone-13-PRO-MAX-watchlistify site](https://github.com/raffyxyz/watchlistify-re/assets/86818651/5b815cec-5907-4313-8a55-1eb763d918f4)
![iPad-PRO-11-watchlistify site](https://github.com/raffyxyz/watchlistify-re/assets/86818651/c0f6842a-5b17-4852-967d-79193703e5c4)
![Macbook-Air-watchlistify site](https://github.com/raffyxyz/watchlistify-re/assets/86818651/670c2233-4fe6-47d7-b58d-cd2c62f5767d)


## Overview

Key features:

- User authentication with NextAuth.js
- Watchlist management
- Search anime and dramas  
- View anime and drama details
- Play anime and drama videos
- MongoDB database with Mongoose models
- Tailwind CSS for styling

## Usage 

### Environment Variables

Create a copy of `.env.example` file.


### Install Dependencies


```bash
npm install
```

### Run Development Server 


```bash
npm run dev
```

## File Structure

- `pages/api` - API routes
- `pages` - Page components
- `components` - Reusable components
- `models` - Mongoose models
- `states` - Global states (Zustand)
- `utils` - Utility functions  
- `lib` - Shared library code
- `styles` - Global styles
- `config.ts` - Configuration/env variables
- `middleware.ts` - Auth middleware

## Built With

- [Next.js](https://nextjs.org/) - React Framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- [Consumet](https://github.com/consumet/api.consumet.org) - Anime and Drama API's
  
## License

This project is open source and available under the [MIT License](LICENSE).
