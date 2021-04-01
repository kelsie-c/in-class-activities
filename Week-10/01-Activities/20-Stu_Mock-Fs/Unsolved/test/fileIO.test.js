const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const file = new FileIO();
      const fileName = "message.txt";
      const mock = jest.spyOn(fs, 'file');
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
