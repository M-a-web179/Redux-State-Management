# Redux State Management

A React and TypeScript counter application built to practice manual Redux state management.

## Features

- Global counter state managed with Redux
- Increment counter action
- Decrement counter action
- Reset counter action
- Redux `Provider` integration
- `useSelector` for reading Redux state
- `useDispatch` for dispatching Redux actions
- `combineReducers` for the root reducer
- `redux-logger` middleware for tracking state changes in the browser console
- TypeScript types for Redux state and actions

## Technologies Used

- React
- TypeScript
- Vite
- Redux
- React Redux
- Redux Logger

## Project Structure

```text
src/
├── actions/
│   └── counterActions.ts
├── components/
│   └── Counter.tsx
├── reducers/
│   ├── counterReducer.ts
│   └── index.ts
├── store/
│   └── store.ts
├── App.tsx
└── main.tsx
```

## How to Run the Project

1. Clone this repository:

```bash
git clone https://github.com/M-a-web179/Redux-State-Management.git
```

2. Open the project folder:

```bash
cd Redux-State-Management
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the URL shown in the terminal or use the **Ports** tab in GitHub Codespaces.

## Testing Redux Logger

1. Run the application.
2. Open the browser Developer Tools.
3. Open the Console tab.
4. Click Increment, Decrement, or Reset.
5. Observe the Redux actions and previous/next state logged by `redux-logger`.