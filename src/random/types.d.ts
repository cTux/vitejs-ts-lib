export {};

declare global {
  interface Array<T> {
    random(): T;
  }
}
