export const paths = {
  home() {
    return "/";
  },
  css() {
    return "/css";
  },
  tips() {
    return "/tips";
  },
  trends() {
    return "/trends";
  },
  challenges() {
    return "/challenges";
  },
  viewAllPosts() {
    return `/posts`;
  },
  viewPost(postSlug: string) {
    return `/posts/${postSlug}`;
  },
  signIn() {
    return "sign-in";
  },
  signUp() {
    return "sign-up";
  },
  viewNotification() {
    return "/notifications";
  },
};
