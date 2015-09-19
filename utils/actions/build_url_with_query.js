export default function buildUrlWithQuery(params) {
  const { url, query, keys } = params;
  if (query === undefined || query === null)
    return url;

  let newUrl = url;

  keys.forEach((key) => {
    const value = query[key];

    if (!Object.is(value, undefined))
      newUrl = `${newUrl}&${key}=${value}`;
  });

  return newUrl;
}
