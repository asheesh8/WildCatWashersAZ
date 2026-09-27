import type { Landing } from './types';
const mods = import.meta.glob<{ landings: Landing[] }>('./pages.ts', { eager: true });
export const landings: Landing[] = Object.values(mods).flatMap((m) => m.landings);
export const landingsUnder = (prefix: string) => landings.filter((l) => l.url.startsWith(prefix));
