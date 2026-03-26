export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface FocusSession {
  id: string;
  timestamp: number;
  duration: number; // in minutes
  tasksCompleted: number;
}

export type ThemeType = 'rain' | 'city' | 'forest' | 'cafe';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  ambientUrl: string;
  bgClass: string;
  accentColor: string;
}
