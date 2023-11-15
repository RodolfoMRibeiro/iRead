import { AuthData } from '../../contexts/Auth';

export async function signIn(
  email: string,
  password: string,
): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: 'fake-token',
          email,
          name: 'rodolfo',
        });
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    }, 500);
  });
}
