export function getUrlShareTwitter(question, answer) {
    const BASE_URL = "https://twitter.com/intent/tweet";
    const content = `?text= My answer was ${answer} to ${question}. What's yours? 💪 @dianait_ Get another one at &url=https://ranther.vercel.app`;
    return BASE_URL + content;
  } 