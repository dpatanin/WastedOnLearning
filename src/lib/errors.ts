export class FileTypeError extends Error {
  constructor(
    msg?: string,
    expected_type?: string | string[],
    received_type?: string | string[]
  ) {
    const msg_arr = [msg || 'Wrong file type found.'];
    if (expected_type) msg_arr.push(`Expected: ${expected_type}`);
    if (received_type) msg_arr.push(`Received: ${received_type}`);

    super(...msg_arr);

    Object.setPrototypeOf(this, FileTypeError.prototype);
  }
}
