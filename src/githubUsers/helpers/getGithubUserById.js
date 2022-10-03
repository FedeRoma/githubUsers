export const getGithubUserById = (id, users) => {
  for (const user in users) {
    if (users[user].id == id) {
      return users[user];
    }
  }
  return false;
};
