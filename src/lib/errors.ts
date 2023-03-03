export class FileTypeError extends Error {
  constructor(
    msg?: string,
    expectedType?: string | string[],
    receivedType?: string | string[]
  ) {
    const msgArr = [msg || 'Wrong file type found.'];
    if (expectedType) msgArr.push(`Expected: ${expectedType}`);
    if (receivedType) msgArr.push(`Received: ${receivedType}`);

    super(...msgArr);

    Object.setPrototypeOf(this, FileTypeError.prototype);
  }
}
