import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDto } from "@dtos/UserDto";
import { USER_STORAGE } from "@storage/storageConfig";

export async function storageUserSave(user: UserDto) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: UserDto = storage ? JSON.parse(storage) : {};

  return user;
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE);
}
