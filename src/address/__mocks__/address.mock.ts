import { cityMock } from '../../city/__mocks__/city.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';

import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  cep: '12314',
  cityId: cityMock.id,
  complement: 'askdksdak',
  createdAt: new Date(),
  id: 123,
  numberAddress: 324,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
