export const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

export function authenticate(username, password) {
  return users.find(u => u.username === username && u.password === password) || null;
}
