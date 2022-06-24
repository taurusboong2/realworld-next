import { useEffect, useState } from 'react';
import { addComment, fetchCommentList } from '../networks/comment';
import { CommentValue, CommentType } from '../types/comment';

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

export const useFetchCommentList = (slug: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await fetchCommentList(slug);
      setCommentList(data.comments);
      setLoading(false);
    })();
  }, []);
  return { isLoading, commentList };
};
