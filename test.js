let cell1 = {
  alive: true,
  neighbor: 3,
};
let cell2 = {
  alive: true,
  neighbor: 1,
};
let cell3 = {
  alive: true,
  neighbor: 4,
};
let cell4 = {
  alive: true,
  neighbor: 2,
};
let cell5 = {
  alive: false,
  neighbor: 3,
};
let cell6 = {
  alive: false,
  neighbor: 2,
};

function simulateLife(cell) {
  if (cell.alive == false) {
    if (cell.neighbor != 3) {
      return false;
    }
    return true;
  }
  if (cell.neighbor < 2 || cell.neighbor > 3) {
    return false;
  } else {
    return true;
  }
}

describe("simulateLife", () => {
  test(" Cell1 should be alive cos 3 neighbours", () => {
    const result = simulateLife(cell1);
    expect(result).toBe(true);
  });
  test("cell 2 should be dead because it is a live cell with only one neighbour", () => {
    const result = simulateLife(cell2);
    expect(result).toBe(false);
  });
  test("Cell3 should be dead because of 4 neighbours", () => {
    const result = simulateLife(cell3);
    expect(result).toBe(false);
  });
  test("Cell4 should be alive because it has 2 neighbours", () => {
    const result = simulateLife(cell4);
    expect(result).toBe(true);
  });
  test("Cell5 becomes alive because it has 3 neighbours", () => {
    const result = simulateLife(cell5);
    expect(result).toBe(true);
  });
  test("Cell6 becomes remains dead because it has only 2 neighbors", () => {
    const result = simulateLife(cell6);
    expect(result).toBe(false);
  });
});
