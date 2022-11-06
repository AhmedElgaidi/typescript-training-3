export interface UserInterface {
  username: string;
  age: number;
  isAdmin: boolean;
  greet(): string; // if it returns number, then so be it
}

export interface Message {
  showMsg(): void;
}
