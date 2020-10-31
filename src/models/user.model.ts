import { MixinTarget } from '@loopback/core';
import { Entity, model, property } from '@loopback/repository';

@model()
export class User extends Entity {
  @property()
  firstName: string;
}

export function UserMixin<T extends MixinTarget<User>>(baseClass: T) {
  class UpdatedUser extends baseClass {
    @property()
    lastName: string;
  }
  return UpdatedUser
}

export class UserExtended extends UserMixin(User) { }
