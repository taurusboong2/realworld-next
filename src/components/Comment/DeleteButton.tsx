import React, { FC } from 'react';
import { deleteComment } from '../../networks/comment';
import { useRouter } from 'next/router';

type Props = {
  commentID: string;
};

const DeleteButton: FC<Props> = ({ commentID }) => {
  const router = useRouter();
  const { slug } = router.query;

  const handleDelete = async () => {
    if (confirm('정말로 댓글을 삭제하시겠습니까?')) {
      await deleteComment(slug as string, commentID);
      window.location.reload();
    } else return;
  };

  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={handleDelete} />
    </span>
  );
};

export default DeleteButton;
