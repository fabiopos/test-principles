export interface Person {
  name: string;
  lastName: string;
  age: number;
  valid?: boolean;
}

export interface FakeUser {
  id: number;
  name: string;
  age: number;
  username: string;
  email: string;
  address: {
    street: string;
    city: string
    zip: string
  };
  phone:string;
  website: string;
  occupation: string;
  hobbies: string[];
}
