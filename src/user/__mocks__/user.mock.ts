import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type-enum';

export const userEntityMock: UserEntity = {
  cpf: '123456612',
  createdAt: new Date(),
  email: 'email@mock.com',
  id: 12,
  name: 'nameMock',
  password: 'largePassword',
  phone: '1234214123',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
