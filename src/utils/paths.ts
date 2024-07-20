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
  about() {
    return "/about";
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

export const adminPaths = {
  home() {
    return "/admin";
  },
  allPosts() {
    return "/admin/posts";
  },
  allTags() {
    return "/admin/tags";
  },
  viewPost(postId: string) {
    return `/admin/posts/${postId}`;
  },
  viewers() {
    return "/admin/viewers";
  },
  dashboard() {
    return "/admin/dashboard";
  },
  analytics() {
    return "/admin/analytics";
  },
  settings() {
    return "/admin/settings";
  },
};
