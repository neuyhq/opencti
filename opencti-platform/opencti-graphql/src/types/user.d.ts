interface UserRole {
  name: string;
}

interface UserCapability {
  name: string;
}

interface UserOrigin {
  name?: string;
  user_id?: string;
  referer?: string;
}

interface UserMarking {
  name: string;
  user_email: string;
  origin: Partial<UserOrigin>;
  roles: Array<UserRole>;
  capabilities: Array<UserCapability>;
  allowed_marking: Array<StoreMarkingDefinition>;
}

interface AuthUser {
  id: string;
  internal_id: string;
  name: string;
  user_email: string;
  origin: Partial<UserOrigin>;
  roles: Array<UserRole>;
  capabilities: Array<UserCapability>;
  allowed_marking: Array<StoreMarkingDefinition>;
}
