import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from '../../components/myHead/index';
import ArticleInput from '../../components/common/Input';
import { useRouter } from 'next/router';
import { useGetSingleArticle, useUpdateArticle } from '../../hooks/article.hook';
import TagInput from '../../components/Article/TagInput';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const Editor: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [tagList, setTagList] = useState<[] | string[] | string>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const { isLoading, updateArticle } = useUpdateArticle();
  const { aricleIsLoading, articleData } = useGetSingleArticle(slug as string);

  console.log(articleData);

  useEffect(() => {
    if (router.isReady) {
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

  const submitUpdateArticle = async () => {
    const response = await updateArticle(slug as string, {
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

  const pushTags = (newTag: string): void => {
    setTagList([...tagList, newTag]);
  };

  const deleteTags = (index: number): void => {
    const filtered = tagList.filter((tag, tagIndex) => tagIndex !== index);

    setTagList(filtered);
  };

  if (aricleIsLoading && router.isReady) return <LoadingSpinner />;
  return (
    <>
      <Head title="Editor" />
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form onSubmit={submitUpdateArticle}>
                <fieldset>
                  <ArticleInput input={true} placeholder="타이틀을 입력하세요. *필수" ref={titleRef} />
                  <ArticleInput input={false} placeholder="내용을 입력하세요. *생략 가능" ref={descriptionRef} />
                  <ArticleInput input={true} placeholder="바디를 입력하세요. *생략가능" ref={bodyRef} />
                  <TagInput tagList={tagList} pushTag={pushTags} deleteTags={deleteTags} />
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={submitUpdateArticle}
                    disabled={isLoading}>
                    Publish Article
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

export default Editor;
