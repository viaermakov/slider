import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RouteComponentProps, Link } from 'react-router-dom';

import { Input } from 'organisms/input';
import { Button } from 'organisms/button';
import { Container, Navigation, PinkArrow, Basic, Title, Form } from './styles.css';
import { TextArea } from 'organisms/textarea';
import { Picker } from 'organisms/picker';
import { CoordInput } from 'organisms/coordInput';

type IRegisterProps = RouteComponentProps;

type FormValues = {
  spotName: string;
  spotCategory: string;
  description: string;
  category: string;
  coordinationsN: string;
  coordinationsE: string;
};

const Register: React.FC<IRegisterProps> = ({ history }) => {
  const { register, handleSubmit, errors, getValues, control } = useForm<FormValues>();

  const handleCustomChange = ([value]: Array<number>): object => ({ value });

  const handleChange = (): void => {
    console.log(getValues());
  };
  const onSubmit = (): void => {
    console.log(errors);
    history.push('/spots');
  };
  return (
    <Container>
      <Navigation>
        <Link to="/spots">
          <PinkArrow>← </PinkArrow>Spot detail
        </Link>
      </Navigation>
      <Title>Create new spot</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Basic>
          <Input
            label="Spot Name"
            name="spotName"
            register={register}
            required
            onChange={handleChange}
            isError={Boolean(errors.spotName)}
          />
          <Input
            label="Spot category"
            name="spotCategory"
            register={register}
            required
            onChange={handleChange}
            isError={Boolean(errors.spotCategory)}
          />
          <TextArea
            label="Spot description"
            name="description"
            register={register}
            required={true}
            onChange={handleChange}
            isError={Boolean(errors.description)}
          />
          <Controller
            as={<Picker onChange={handleChange} variants={variants} label="Spot category" />}
            name="category"
            control={control}
            onChange={handleCustomChange}
            defaultValue=""
            rules={{ required: true }}
            isError={Boolean(errors.category)}
          />
          <Input
            label="Coordinations"
            name="coordinationsN"
            register={register}
            required
            placeholder="N"
            onChange={handleChange}
            isError={Boolean(errors.coordinationsN)}
          />
          <Input
            name="coordinationsE"
            register={register}
            required
            placeholder="E"
            onChange={handleChange}
            isError={Boolean(errors.coordinationsE)}
          />
        </Basic>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;

const variants = [
  {
    label: 'Water',
    id: 0,
  },
  {
    label: 'Earth',
    id: 1,
  },
  {
    label: 'Air',
    id: 2,
  },
];
