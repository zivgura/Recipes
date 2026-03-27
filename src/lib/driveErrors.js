/** Thrown when Drive returns 403 or the resource is not visible to the signed-in user. */
export class DriveAccessError extends Error {
  /**
   * @param {string} message
   * @param {{ status: number, code: 'INSUFFICIENT_PERMISSION' | 'NOT_FOUND' }} meta
   */
  constructor(message, meta) {
    super(message);
    this.name = "DriveAccessError";
    this.status = meta.status;
    this.code = meta.code;
  }
}
