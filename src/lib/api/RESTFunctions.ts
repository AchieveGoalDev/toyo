export async function handleAPIPost(data: any, url: string) {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "post",
      cache: "default",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    console.log("API call success");
    console.log(JSON.stringify(response));
  } catch (err) {
    console.log("API call error");
    console.log(err);
  }
}

export async function handleAPIGet(data: any, url: string) {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "get",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    console.log("API call success");
    console.log(JSON.stringify(response));
  } catch (err) {
    console.log("API call error");
    console.log(err);
  }
}
