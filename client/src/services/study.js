import api from './api-config';

export const getAllStudies = async () => {
  const resp = await api.get('/study');
  return resp.data;
}

export const postStudy = async (studyData) => {
  const resp = await api.post('/study',  studyData);
  return resp.data;
}

export const deleteStudy = async (id) => {
  const resp = await api.delete(`/study/${id}`);
  return resp;
}

export const putStudy = async (id, studyData) => {
  const resp = await api.put(`/study/${id}`, studyData);
  return resp.data;
}

export const getOneStudy = async (id) => {
  const resp = await api.get(`/study/${id}`);
  return resp.data;
}