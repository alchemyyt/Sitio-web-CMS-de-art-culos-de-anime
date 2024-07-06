export function lastElements(e, data) {
  const lastPosts = data.slice(Math.max(data.length - e, 0));
  return lastPosts;
}
