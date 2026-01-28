export interface User {
  username: string;
  password: string;
  token: string;
}

export const userData: User[] = [
  {
    username: "chef_alex",
    password: "password123",
    token: "static-jwt-token-1",
  },
  {
    username: "foodie_jane",
    password: "password123",
    token: "static-jwt-token-2",
  },
  {
    username: "gourmet_bob",
    password: "password123",
    token: "static-jwt-token-3",
  },
  {
    username: "sous_chef_sam",
    password: "password123",
    token: "static-jwt-token-4",
  },
  {
    username: "critic_mia",
    password: "password123",
    token: "static-jwt-token-5",
  },
];
