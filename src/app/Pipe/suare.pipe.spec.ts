import { FullDate } from './FullDate.pipe';

describe('SuarePipe', () => {
  it('create an instance', () => {
    const pipe = new FullDate();
    expect(pipe).toBeTruthy();
  });
});
