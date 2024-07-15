//

import * as Speech from 'expo-speech';

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
