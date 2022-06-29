import { apiWithAuth } from '../config/api';
import { CommentValue, CommentList } from '../types/comment';

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
    const { data, status } = await apiWithAuth.delete(`/articles/${slug}/comments/${id}`);
    return { data, status };
  } catch (error) {
    return { error };
  }
};

export const fetchCommentList = async (slug: string) => {
  const { data } = await apiWithAuth.get<CommentList>(`/articles/${slug}/comments`);
  return { data };
};
