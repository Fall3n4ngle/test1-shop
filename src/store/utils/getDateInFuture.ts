export function getDateInFuture(days: number) {
  const now = new Date();
  const futureTime = now.getTime() + days * 24 * 60 * 60 * 1000;
  return new Date(futureTime);
}
