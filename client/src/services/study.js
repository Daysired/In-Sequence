import api from './api-config';

export const getAllStudies = async () => {
  const resp = await api.get('/studies');
  return resp.data;
}

export const postStudy = async (studyData) => {
  const resp = await api.post('/studies',  studyData);
  return resp.data;
}

export const deleteStudy = async (id) => {
  const resp = await api.delete(`/studies/${id}`);
  return resp;
}

export const putStudy = async (id, studyData) => {
  const resp = await api.put(`/studies/${id}`, studyData);
  return resp.data;
}

export const getOneStudy = async (id) => {
  const resp = await api.get(`/studies/${id}`);
  return resp.data;
}