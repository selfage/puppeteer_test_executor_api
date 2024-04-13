import "./global_apis";

export function getArgv(): Array<string> {
  return globalThis.puppeteerArgv;
}

export function exit(): void {
  return globalThis.puppeteerExit();
}

export function screenshot(
  relativePath: string,
  {
    delay = 0,
    fullPage,
    quality,
  }: {
    delay?: number; // ms
    fullPage?: boolean;
    quality?: number;
  } = {}
): Promise<void> {
  return globalThis.puppeteerScreenshot(relativePath, {
    delay,
    fullPage,
    quality,
  });
}

export function fileExists(relativePath: string): Promise<boolean> {
  return globalThis.puppeteerFileExists(relativePath);
}

export function readFile(
  relativePath: string,
  // An encoding is mandatory because raw buffer data cannot be transmitted
  // correctly. Refer to BufferEncoding for all supported strings.
  encoding: string
): Promise<string> {
  return globalThis.puppeteerReadFile(relativePath, encoding);
}

export function writeFile(
  relativePath: string,
  // Represented as a binary string.
  data: string
): Promise<void> {
  return globalThis.puppeteerWriteFile(relativePath, data);
}

export function deleteFile(relativePath: string): Promise<void> {
  return globalThis.puppeteerDeleteFile(relativePath);
}

export async function getFiles(
  ...relativePaths: Array<string>
): Promise<FileList> {
  let fileInput = document.createElement("input");
  fileInput.type = "file";
  await globalThis.puppeteerWaitForFileChooser();
  fileInput.click();
  await globalThis.puppeteerFileChooserAccept(...relativePaths);
  return fileInput.files;
}

export async function supplyFiles(
  triggerFileChooserFn: () => void,
  ...relativePaths: Array<string>
): Promise<void> {
  await globalThis.puppeteerWaitForFileChooser();
  triggerFileChooserFn();
  return globalThis.puppeteerFileChooserAccept(...relativePaths);
}

export function setViewport(width: number, height: number): Promise<void> {
  return globalThis.puppeteerSetViewport(width, height);
}

export function mockExactFile(originalUrl: string, relativePath: string): void {
  return globalThis.puppeteerMockExactFile(originalUrl, relativePath);
}

export function mouseClick(x: number, y: number): Promise<void> {
  return globalThis.puppeteerMouseClick(x, y);
}

export function mouseMove(
  x: number,
  y: number,
  steps: number,
): Promise<void> {
  return globalThis.puppeteerMouseMove(x, y, steps);
}

export function mouseDown(): Promise<void> {
  return globalThis.puppeteerMouseDown();
}

export function mouseUp(): Promise<void> {
  return globalThis.puppeteerMouseUp();
}

export function mouseWheel(deltaX: number, deltaY: number): Promise<void> {
  return globalThis.puppeteerMouseWheel(deltaX, deltaY);
}

export function touchTap(x: number, y: number): Promise<void> {
  return globalThis.puppeteerTouchTap(x, y);
}

export function touchStart(x: number, y: number): Promise<void> {
  return globalThis.puppeteerTouchStart(x, y);
}

export function touchMove(x: number, y: number): Promise<void> {
  return globalThis.puppeteerTouchMove(x, y);
}

export function touchEnd(): Promise<void> {
  return globalThis.puppeteerTouchEnd();
}

export function keyboardType(text: string): Promise<void> {
  return globalThis.puppeteerKeyboardType(text);
}

export type KeyInput = puppeteerKeyInput;

export function keyboardDown(key: KeyInput): Promise<void> {
  return globalThis.puppeteerKeyboardDown(key);
}

export function keyboardUp(key: KeyInput): Promise<void> {
  return globalThis.puppeteerKeyboardUp(key);
}
