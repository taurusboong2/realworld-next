import { useState } from 'react';
import { addComment } from '../networks/comment';
import { CommentValue } from '../types/comment';

export const useAddComment = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const createComment = async (slug: string, commentData: CommentValue) => {
    setLoading(true);
    const { data, error } = await addComment(slug, commentData);
    setLoading(false);
    return { data, error };
  };

  return { createComment, isLoading };
};
