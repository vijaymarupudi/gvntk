export function postData(url, data) {
  return fetch(`http://127.0.0.1:5000${url}`, {
  method: "POST",
  body: JSON.stringify(data)
});
}

export function formToObject ($form) {
  const data = new FormData($form);
  const formEntries = {};
  for (const [key, value] of data.entries()) {
    formEntries[key] = value;
  }
  return formEntries
}