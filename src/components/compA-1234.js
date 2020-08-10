const comp = {
  render(h) {
    return h("div", this.name);
  },
  props: {
    name: { type: String }
  }
};

function someFunction(c) {
  return c;
}

const __comp__ = someFunction(comp);

export { __comp__ as _ };
