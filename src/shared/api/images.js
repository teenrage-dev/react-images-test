import axios from 'axios';

export const getListImages = async () => {
  const { data } = await axios.get(
    'https://api.unsplash.com/photos/?client_id=1XHaEtldmx8wV4u_JR1wc0hREhEcgXgOdNrFlReO1M4'
  );
  return data;
};

export const getImageById = async id => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/${id}/?client_id=1XHaEtldmx8wV4u_JR1wc0hREhEcgXgOdNrFlReO1M4`
  );
  return data;
};
