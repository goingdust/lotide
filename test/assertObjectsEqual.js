const totals1 = {
  April: 50.00,
  Peter: [40.00, 60.00, 50],
  Gary: 25.00
};

const totals2 = {
  Gary: 25.00,
  April: 50.00,
  Peter: [40.00, 60.00, 50]
};

assertObjectsEqual(totals1, totals2);