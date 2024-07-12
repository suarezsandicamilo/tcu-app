//

import AsyncStorage from '@react-native-async-storage/async-storage';

export class Db {
  constructor() {
    //
  }

  async set(key: string, value: unknown): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  async get<T>(key: string): Promise<T | undefined> {
    const value = await AsyncStorage.getItem(key);

    if (!value) {
      return undefined;
    }

    return JSON.parse(value);
  }

  async has(key: string): Promise<boolean> {
    return (await this.get(key)) != undefined;
  }

  async delete(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}
