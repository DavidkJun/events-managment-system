export type CreateUserParams = {
  user_name: string;
}

export type CreateGroupParams = {
  group_name:string;
  activity: string;
}

export type CreateEventParams = {
  event_name: string;
}

export type CreateAdminParams = {
  admin_name: string;
  email: string;
  password: string;
}