import {create} from 'apisauce';

// define the api
// const api = create({
//     baseURL: 'https://api.github.com',
//     headers: { Accept: 'application/vnd.github.v3+json' },
//   })

export const api = (lat, lon, cnt) => {
  const API_KEY = '59d6f149e1e4546e96044c92c2d98af2';
  return create({
    baseURL: `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}`,
    headers: {Accept: 'application/vnd.github.v3+json'},
  });
};
