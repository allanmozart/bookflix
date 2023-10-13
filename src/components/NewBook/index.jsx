import {
  Button,
  Form,
  NewBookContainter,
  Title,
  TextArea,
  Input,
} from './style';
import { useState } from 'react';

export default function NewBook() {
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    setYear(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <NewBookContainter>
      <Form onSubmit={handleSubmit}>
        <Title>Insert new book</Title>
        <Input placeholder="Insert Book Title" />
        <TextArea
          placeholder="Insert Book Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <Input
          type="number"
          placeholder="Insert Book Year of publication"
          value={year}
          onChange={handleYearChange}
        />
        <Input placeholder="Insert Book Cover url" />
        <Button type="submit">Insert Book</Button>
      </Form>
    </NewBookContainter>
  );
}
