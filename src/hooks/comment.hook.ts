import { useEffect, useState } from 'react';
import { addComment, deleteComment, fetchCommentList } from '../networks/comment';
import { CommentValue, CommentType } from '../types/comment';

export const useFetchCommentList = (slug: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [addCommentIsLoading, setAddCommentIsLoading] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  const createComment = async (slug: string, commentData: CommentValue) => {
    setAddCommentIsLoading(true);
    const { data, error } = await addComment(slug, commentData);
    setAddCommentIsLoading(false);
    setCommentList([...commentList, data.comment]);
    return { data, error };
  };

  const removeComment = async (slug: string, id: string) => {
    await deleteComment(slug as string, id);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await fetchCommentList(slug);
      setCommentList(data.comments);
      setLoading(false);
    })();
  }, []);

  return { isLoading, commentList, createComment, addCommentIsLoading, removeComment };
};
