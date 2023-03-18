export * from './random';

declare global {
  interface Array<T> {
    random(): T;
  }
}
