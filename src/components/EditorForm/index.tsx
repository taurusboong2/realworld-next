import React, { FC, useState, useRef, useEffect } from 'react';
import ArticleInput from '../../components/common/Input';
import { useRouter } from 'next/router';
import { useCreateArticle } from '../../hooks/article.hook';
import { useGetSingleArticle, useUpdateArticle } from '../../hooks/article.hook';
import TagInput from '../../components/Article/TagInput';
import LoadingSpinner from '../../components/common/LoadingSpinner';

type Props = {
  isCreatePage: boolean;
};

const EditorForm: FC<Props> = ({ isCreatePage }) => {
  const router = useRouter();
  const slug = router.query.slug;
  const [tagList, setTagList] = useState<[] | string[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const { isLoading, createArticle } = useCreateArticle();
  const { isLoadingUpdate, updateArticle } = useUpdateArticle();
  const { aricleIsLoading, articleData } = useGetSingleArticle(slug as string);

  const submitCreateArticle = async () => {
    const response = await createArticle({
      article: {
        title: titleRef.current?.value as string,
        description: descriptionRef.current?.value as string,
        body: bodyRef.current?.value as string,
        tagList: tagList,
      },
    });
    console.log(response);
    router.push('/');
  };

  const submitUpdateArticle = async () => {
    const response = await updateArticle(slug as string, {
      article: {
        title: titleRef.current?.value as string,
        description: descriptionRef.current?.value as string,
        body: bodyRef.current?.value as string,
        tagList: tagList,
      },
    });
    alert('게시글이 성공적으로 수정되었습니다.');
    router.push('/');
  };

  useEffect(() => {
    if (!isCreatePage && router.isReady) {
      (async () => {
        if (articleData && titleRef.current && descriptionRef.current && bodyRef.current) {
          const tags: [] | string[] | string = articleData?.tagList;
          titleRef.current.value = articleData?.title;
          descriptionRef.current.value = articleData?.description;
          bodyRef.current.value = articleData?.body;
          setTagList(tags);
        }
      })();
    }
  }, [router.isReady, aricleIsLoading]);

  const pushTags = (newTag: string): void => {
    setTagList([...tagList, newTag]);
  };

  const deleteTags = (index: number): void => {
    const filtered = tagList.filter((tag, tagIndex) => tagIndex !== index);

    setTagList(filtered);
  };

  if (!isCreatePage && aricleIsLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form onSubmit={submitCreateArticle}>
                <fieldset>
                  <ArticleInput input={true} placeholder="타이틀을 입력하세요. *필수" ref={titleRef} />
                  <ArticleInput input={false} placeholder="내용을 입력하세요. *필수" ref={descriptionRef} />
                  <ArticleInput input={true} placeholder="바디를 입력하세요. *필수" ref={bodyRef} />
                  <TagInput tagList={tagList} pushTag={pushTags} deleteTags={deleteTags} />
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={isCreatePage ? submitCreateArticle : submitUpdateArticle}
                    disabled={isCreatePage ? isLoading : isLoadingUpdate}>
                    {isCreatePage ? 'Publish' : 'Update'} Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorForm;
