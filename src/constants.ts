import { ThemeConfig } from "./types";

export const THEMES: ThemeConfig[] = [
  {
    id: 'rain',
    name: 'Rainy Retreat',
    ambientUrl: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2391.mp3',
    bgClass: 'bg-slate-900/90',
    accentColor: 'text-blue-400',
  },
  {
    id: 'city',
    name: 'Late Night City',
    ambientUrl: 'https://assets.mixkit.co/sfx/preview/mixkit-city-ambience-with-traffic-and-horns-2327.mp3',
    bgClass: 'bg-zinc-900/90',
    accentColor: 'text-purple-400',
  },
  {
    id: 'forest',
    name: 'Deep Forest',
    ambientUrl: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-birds-ambience-1210.mp3',
    bgClass: 'bg-emerald-900/90',
    accentColor: 'text-emerald-400',
  },
  {
    id: 'cafe',
    name: 'Cozy Cafe',
    ambientUrl: 'https://assets.mixkit.co/sfx/preview/mixkit-coffee-shop-ambience-with-people-talking-2324.mp3',
    bgClass: 'bg-amber-900/90',
    accentColor: 'text-amber-400',
  }
];

export const LOFI_STATIONS = [
  { id: 'jfKfPfyJRdk', name: 'Lofi Girl - Study Radio' },
  { id: '4xDzrJKXOOY', name: 'Synthwave Radio' },
  { id: '5yx6BWlEVcY', name: 'Chillhop Radio' }
];
