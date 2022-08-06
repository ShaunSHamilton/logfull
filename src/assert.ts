import { LogError } from "./error.js";
import { Ansi, Colours } from "./types.js";

const STANDARD_ASSERT_MESSAGE = `${Ansi.Blink}${Ansi.Foreground}${Colours.Yellow}Assertion failed:${Ansi.Reset}`;

export class Assert extends Function {
  private _bound: this;
  constructor() {
    super("...args", "return this._bound.assert(...args)");
    this._bound = this.bind(this);
    return this._bound;
  }
  assert(condition: boolean, msg?: string) {
    if (!condition) {
      const error = new LogError(msg || STANDARD_ASSERT_MESSAGE);
      throw error;
    }
  }
  equal(a: any, b: any, msg?: string) {
    if (a !== b) {
      const error = new LogError(
        msg || `${STANDARD_ASSERT_MESSAGE} ${a} !== ${b}`
      );
      error.expected = a;
      error.actual = b;
      if (msg) {
        error.msg = msg;
      }
      throw error;
    }
  }
}
