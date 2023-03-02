import {UserType} from '../../types/user.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';
import {createSHA256} from '../../utils.js';
import { DEFAULT_AVATAR } from '../../const.js';


const {prop, modelOptions} = typegoose;
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements UserType {

  constructor(data: UserType) {
    super();

    this.email = data.email;
    this.avatar = data.avatar;
    this.name = data.name;
    this.isPro = data.isPro;
  }

  @prop({ required: true })
  public name!: string;

  @prop({default: DEFAULT_AVATAR})
  public avatar?: string;

  @prop({required: true, default: ''})
  private password!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }

  @prop({ required: true })
  public isPro!: boolean;

  @prop({ unique: true})
  public email!: string;
}

export const UserModel = getModelForClass(UserEntity);
