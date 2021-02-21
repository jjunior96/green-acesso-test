export function addNameToUser(name: string) {
  return {
    type: 'ADD_NAME_TO_USER',
    payload: {
      name
    }
  };
}
