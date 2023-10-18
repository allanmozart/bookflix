export function getFirstName(fullName) {
  const allNames = fullName?.split(' ');
  return allNames ? allNames[0] : 'Profile';
}
