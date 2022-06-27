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
    await deleteComment(slug as string, commentID);
    window.location.reload();
  };

  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={handleDelete} />
    </span>
  );
};

export default DeleteButton;
