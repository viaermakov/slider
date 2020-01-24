import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'organisms/input';
import { Button } from 'organisms/button';
import { Container, Form } from './styles.css';

export interface IRegisterProps {}

type FormValues = {
  firstName: string;
  secondName: string;
  job: string;
};

const Register: React.FC<IRegisterProps> = () => {
  const { register, handleSubmit, errors, getValues } = useForm<FormValues>();

  const handleChange = (): void => {
    console.log(getValues());
  };
  const onSubmit = (data: FormValues): void => {
    console.log(errors);
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First name"
          name="firstName"
          register={register}
          required
          onChange={handleChange}
          isError={Boolean(errors.firstName)}
        />
        <Input
          label="Second name"
          name="secondName"
          register={register}
          required
          onChange={handleChange}
          isError={Boolean(errors.secondName)}
        />
        <Input
          label="Job"
          name="job"
          register={register}
          required={true}
          onChange={handleChange}
          isError={Boolean(errors.job)}
        />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
