import "./key_input";

declare global {
  var puppeteerArgv: Array<string>;
  function puppeteerExit(): void;
  function puppeteerScreenshot(
    relativePath: string,
    options: { delay?: number /* ms */; fullPage?: boolean; quality?: number },
  ): Promise<void>;
  function puppeteerFileExists(relativePath: string): Promise<boolean>;
  function puppeteerReadFile(
    relativePath: string,
    // An encoding is mandatory because raw buffer data cannot be transmitted
    // correctly. Refer to BufferEncoding for all supported strings.
    encoding: string,
  ): Promise<string>;
  function puppeteerWriteFile(
    relativePath: string,
    // Represented as a binary string.
    data: string,
  ): Promise<void>;
  function puppeteerDeleteFile(relativePath: string): Promise<void>;
  function puppeteerSetViewport(width: number, height: number): Promise<void>;
  function puppeteerMockExactFile(
    originalUrl: string,
    relativePath: string,
  ): void;
  function puppeteerWaitForFileChooser(
    delayAfter?: number /* ms */,
  ): Promise<void>;
  function puppeteerFileChooserAccept(
    ...relativePaths: Array<string>
  ): Promise<void>;

  // Shortcut for mouse.move, mouse.down and mouse.up
  function puppeteerMouseClick(x: number, y: number): Promise<void>;
  function puppeteerMouseMove(
    x: number,
    y: number,
    steps: number,
  ): Promise<void>;
  function puppeteerMouseDown(): Promise<void>;
  function puppeteerMouseUp(): Promise<void>;
  function puppeteerMouseWheel(deltaX: number, deltaY: number): Promise<void>;

  // Dispatches a touchstart and touchend event.
  function puppeteerTouchTap(x: number, y: number): Promise<void>;
  function puppeteerTouchStart(x: number, y: number): Promise<void>;
  function puppeteerTouchMove(x: number, y: number): Promise<void>;
  function puppeteerTouchEnd(): Promise<void>;

  // Sends a keydown, keypress/input, and keyup event for each character in the text.
  function puppeteerKeyboardType(text: string): Promise<void>;
  function puppeteerKeyboardDown(key: puppeteerKeyInput): Promise<void>;
  function puppeteerKeyboardUp(key: puppeteerKeyInput): Promise<void>;
}
