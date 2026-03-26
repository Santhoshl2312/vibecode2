# Lofi Focus Workspace

A single-page focus environment that combines a lofi music player, a Pomodoro timer, and a task management panel into one cohesive application.

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Drag & Drop**: @dnd-kit
- **Music**: YouTube IFrame Player API
- **Celebration**: react-confetti

## Core Features
- **Music Player**: Stream lofi beats from curated YouTube stations.
- **Pomodoro Timer**: 25-minute focus sessions with visual progress and audible alerts.
- **Task Management**: CRUD tasks with drag-and-drop reordering and persistence.
- **Unified UI**: All modules are visible simultaneously in a responsive, glassmorphic layout.

## Bounty Challenges Attempted
- **Ambient Theme Switching (+15)**: 4 switchable themes (Rain, City, Forest, Cafe) with layered ambient sounds and independent volume control.
- **Motivational Quotes (+25)**: Fetched from a public API with automatic refresh and graceful fallback.
- **Animated SVG Timer Ring (+15)**: A circular progress ring that depletes in real-time.
- **Keyboard Shortcut System (+10)**: Space for music, 'S' for timer, 'N' for new task, 'C' to clear completed.
- **Drag-to-Reorder Tasks (+20)**: Fully functional DnD for task prioritization.
- **Focus Session History (+25)**: Detailed log of completed sessions including timestamps and tasks completed.

## Build & Run
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
