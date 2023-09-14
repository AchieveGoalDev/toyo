import { handleAPIPost } from "./RESTFunctions";
import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

export async function getArticles() {
  const data = {
    query: "ALL",
  };

  const articleData = await handleAPIPost(
    data,
    PUBLIC_API_GATEWAY_URL + "/news"
  );
  return articleData;
}
