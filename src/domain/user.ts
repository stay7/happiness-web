export class User {
  id: number;
  nickname: string;
  email: string;

  constructor(id: number, nickname: string, email: string) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
  }
}
