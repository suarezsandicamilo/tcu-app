//

import * as Speech from 'expo-speech';

/**
 * Delays the process for an amount of time.
 *
 * @param ms The time in milliseconds to delay.
 * @returns
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * Returns a random number between min and max. The min is inclusive and the max is exclusive.
 *
 *
 * @param min
 * @param max
 * @returns A random number between min and max.
 */
export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Shuffles an array.
 *
 * @param array
 * @returns A shuffled array.
 */
export const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    const j = random(0, i);

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

/**
 * Speaks a text with text-to-speech.
 *
 * @param text The text to speak.
 * @param next The operation to execute after speaking the text.
 * @returns
 */
export const speak = (text?: string, next?: () => void) => {
  return () => {
    Speech.speak(text ?? '', {
      language: 'es',
      onDone: next,
    });
  };
};
