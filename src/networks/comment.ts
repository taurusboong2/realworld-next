import { apiWithAuth } from '../config/api';
import { CommentValue, CommentType } from '../types/comment';

export const addComment = async (slug: string, commentData: CommentValue) => {
  try {
    const { data } = await apiWithAuth.post(`/articles/${slug}/comments`, commentData);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const deleteComment = async (slug: string, id: string) => {
  try {
    const { data } = await apiWithAuth.delete(`/articles/${slug}/comments/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchCommentList = async (slug: string) => {
  const { data } = await apiWithAuth.get<CommentType[]>(`/articles/${slug}/comments`);
  return { data };
};
