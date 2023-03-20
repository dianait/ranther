export function getUrlShareTwitter(question) {
    const BASE_URL = "https://twitter.com/intent/tweet";
    const content = `?text=⭐️ New question ⭐️ 👉  ${question} 💪 @dianait_ Get another one at &url=https://ranther.vercel.app`;
    return BASE_URL + content;
  } 