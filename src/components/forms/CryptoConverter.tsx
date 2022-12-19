import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {}

interface FormValues {
  nep: string;
  busd: string;
}

const ReactForm: React.FC<Props> = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    nep: '',
    busd: '',
  });

  const formatNumber = (num: number): string => {
    const rounded = Math.round(num * 100) / 100;
    return rounded.toString();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nep':
        setFormValues({ nep: value, busd: formatNumber(Number(value) * 3) });
        break;
      case 'busd':
        setFormValues({ busd: value, nep: formatNumber(Number(value) / 3) });
        break;
      default:
        break;
    }
  };

  const { nep, busd } = formValues;

  return (
    <div>
      <h2 className='mb-4 fs-16 lh-sm text-center'>Crypto Converter</h2>
      <Form>
        <Form.Group className='form-group'>
          <Form.Label>NEP</Form.Label>
          <Form.Control type='text' name='nep' value={nep} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label>BUSD</Form.Label>
          <Form.Control type='text' name='busd' value={busd} onChange={handleChange}></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ReactForm;
