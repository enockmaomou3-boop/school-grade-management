import { AppData } from '../types';

const STORAGE_KEY = 'ndf-data-v1';

export async function getStoredData(): Promise<AppData | null> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Erreur de lecture du stockage', e);
  }
  return null;
}

export async function saveData(data: AppData): Promise<void> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Erreur de sauvegarde', e);
  }
}

export function generateId(): string {
  return 'id_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
}
