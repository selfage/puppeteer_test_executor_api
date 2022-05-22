declare var argv: Array<string>;
declare function exit(): void;
declare function screenshot(
  relativePath: string,
  options?: { delay?: number; fullPage?: boolean; quality?: number }
): Promise<void>;
declare function fileExists(relativePath: string): Promise<boolean>;
declare function readFile(
  relativePath: string,
  // An encoding is mandatory because raw buffer data cannot be transmitted
  // correctly. Refer to BufferEncoding for all supported strings.
  encoding: string
): Promise<string>;
declare function writeFile(
  relativePath: string,
  // Represented as a binary string.
  data: string
): Promise<void>;
declare function deleteFile(relativePath: string): Promise<void>;
declare function setViewport(width: number, height: number): Promise<void>;
declare function mockExactFile(originalUrl: string, relativePath: string): void;
