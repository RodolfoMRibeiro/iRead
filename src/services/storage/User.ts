import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_AUTH_KEY = '@AuthData';

export async function loadAuthDataFromStorage<T>(): Promise<T | undefined> {
  return await AsyncStorage.getItem(USER_AUTH_KEY)
    .then((auth) => {
      return auth ? (JSON.parse(auth) as T) : undefined;
    })
    .catch((error) => {
      console.error('Error loading user authentication data: ', error);
      return undefined;
    });
}

export async function saveAuthDataToStorage<T>(authData: T): Promise<void> {
  await AsyncStorage.setItem(USER_AUTH_KEY, JSON.stringify(authData)).catch(
    (error) => {
      console.error('Error saving user authentication data: ', error);
    },
  );
}

export async function removeAuthDataFromStorage(): Promise<void> {
  await AsyncStorage.removeItem(USER_AUTH_KEY).catch((error) => {
    console.error('Error Deleting authData from Storage: ', error);
  });
}
