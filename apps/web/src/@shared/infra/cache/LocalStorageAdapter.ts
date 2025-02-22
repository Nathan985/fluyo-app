import {
	ILocalStorageAdapter,
	LocalStorageKeys,
} from 'src/@shared/interfaces/cache/LocalStorageAdapter';

class LocalStorageAdapter implements ILocalStorageAdapter {
	set(key: LocalStorageKeys, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	get<T = string>(key: LocalStorageKeys): T | null {
		try {
			const localStorageItem = localStorage.getItem(key);
			return localStorageItem ? (JSON.parse(localStorageItem) as T) : null;
		} catch {
			return null;
		}
	}

	remove(key: LocalStorageKeys): void {
		return localStorage.removeItem(key);
	}
}

export default new LocalStorageAdapter();
