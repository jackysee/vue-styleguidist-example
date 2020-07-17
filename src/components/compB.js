const comp = {
  render(h) {
    return h("div", "compB " + this.name);
  },
  props: {
    name: { type: String }
  }
};

export { comp as _ };
