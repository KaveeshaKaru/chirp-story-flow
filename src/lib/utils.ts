
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Ocean wave animation keyframes
export const waveAnimation = {
  '0%': { transform: 'translateX(0)' },
  '50%': { transform: 'translateX(-25%)' },
  '100%': { transform: 'translateX(-50%)' }
}
