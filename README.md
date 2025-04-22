# Advisor Availability Challenge

This project displays a list of advisors with their availability status for calls and chats. The application periodically checks for updates in advisor availability status.

## Implementation Time
This challenge was completed in approximately 2.5 hours.

## Features

- Displays a list of advisors with their profiles and pricing
- Shows real-time availability for call and chat options
- Automatically updates availability status every 30 seconds
- Validates API responses with Zod schemas

## Tech Stack

- Next.js 15.3 (with App Router)
- React 19
- Material UI 7
- SWR for data fetching with automatic revalidation
- TypeScript
- Zod for data validation

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Environment Setup

1. Create a `.env` file in the root directory with the following content:
```
ADVISOR_BASE_URL="https://mp30dcc6efca114e1b21.free.beeceptor.com"
```

**Note:** The advisor-availability endpoint only returns data for advisor ID 1. Other advisor IDs will not return availability data.

### Installation

```bash
# Using npm
npm install

# Or using Yarn
yarn

# Or using pnpm
pnpm install

# Or using Bun
bun install
```

### Running the Development Server

```bash
# Using npm
npm run dev

# Or using Yarn
yarn dev

# Or using pnpm
pnpm dev

# Or using Bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## How It Works

1. The application fetches a list of advisors from the API endpoint
2. For each advisor, it displays their profile picture, name, and rate
3. Call and chat buttons show availability status based on the API response
4. After 30 seconds, the application starts polling for availability updates
5. The UI updates automatically when availability changes

## API Endpoints

- `/advisor-listings` - Returns a list of all advisors
- `/advisor-availability?id={id}` - Returns the current availability status for a specific advisor (only works with ID 1)
