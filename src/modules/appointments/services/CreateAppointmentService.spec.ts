import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointmnet', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmnet = await createAppointment.execute({
      date: new Date(),
      provider_id: '123',
    });

    expect(appointmnet).toHaveProperty('id');
    expect(appointmnet.provider_id).toBe('123');
  });

  // it('should not be able to create two appointmnet on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
