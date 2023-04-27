import { stateMock } from 'src/state/__mocks__/state.mock';

import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  id: 123,
  name: 'cityName',
  stateId: stateMock.id,
  updatedAt: new Date(),
};
