import {
  Button,
  Form,
  NewBookContainter,
  Title,
  TextArea,
  Input,
  Paragraph,
} from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertBook } from '../../api/book';

export default function NewBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [year, setYear] = useState();
  const [description, setDescription] = useState();
  const [bookCover, setBookCover] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    setYear(value);
  };

  const handleBookCover = (e) => {
    setBookCover(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !year) {
      setErrorMessage('Title, Description and Year are mandatory fields.');
    } else {
      const yearInt = parseInt(year, 10);
      insertBook(title, description, yearInt, bookCover);
      //     navigate('/catalog');
    }
  };

  return (
    <NewBookContainter>
      <Form onSubmit={handleSubmit}>
        <Title>New Book Info</Title>
        <Input
          placeholder="Type Book Title*"
          value={title}
          onChange={handleTitle}
        />
        <TextArea
          placeholder="Type Book Description*"
          value={description}
          onChange={handleDescriptionChange}
        />
        <Input
          type="number"
          placeholder="Insert Book Year of publication*"
          value={year}
          onChange={handleYearChange}
        />
        <Input
          placeholder="Insert Book Cover url"
          value={bookCover}
          onChange={handleBookCover}
        />
        <Button type="submit">Insert Book</Button>
      </Form>

      <Paragraph>{errorMessage}</Paragraph>
    </NewBookContainter>
  );
}
