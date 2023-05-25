import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type-enum';

export const userEntityMock: UserEntity = {
  cpf: '123456612',
  createdAt: new Date(),
  email: 'email@mock.com',
  id: 12,
  name: 'nameMock',
  password: '$2b$10$1Vj9f25Db75MMkpxbG3BuuMkojygu5ZLqB6OK8CHaoIpLicQ61w.W',
  phone: '1234214123',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
