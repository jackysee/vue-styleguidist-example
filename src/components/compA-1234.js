const comp = {
  render(h) {
    return h("div", this.name);
  },
  props: {
    name: { type: String }
  }
};

export { comp as _ };
