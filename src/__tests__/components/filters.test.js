jest.mock('../../context', () => ({
  ...jest.requireActual('.../../context'),
  TeeRexState: jest.fn(() => {}),
}));
