import React, { FC } from 'react';
import { useRouter } from 'next/router';

type Props = {
  commentID: string;
  removeComment: (slug: string, id: string) => Promise<void>;
};

const DeleteButton: FC<Props> = ({ removeComment, commentID }) => {
  const router = useRouter();
  const { slug } = router.query;

  const handleDelete = async () => {
    if (confirm('정말로 댓글을 삭제하시겠습니까?')) {
      await removeComment(slug as string, commentID);
      router.reload();
    }
  };

  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={handleDelete} />
    </span>
  );
};

export default DeleteButton;
