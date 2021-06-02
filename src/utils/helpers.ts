export function formatDate(timestamp: number) {
  const date = new Date(timestamp)
  return `${date.getDay()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
}

export function computeScore(user: User) {
  return Object.keys(user.answers).length + user.questions.length;
}
