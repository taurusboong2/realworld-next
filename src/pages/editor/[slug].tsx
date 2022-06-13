import React, { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Head from '../../components/myHead/index';
import ArticleInput from '../../components/common/Input';
import { useRouter } from 'next/router';
import { useUpdateArticle } from '../../hooks/article.hook';
import { fetchSingleArticle } from '../../networks/article';
import TagInput from '../../components/article/TagInput';

const Editor: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const tagListRef = useRef<HTMLInputElement>(null);

  const { isLoading, updateArticle } = useUpdateArticle();

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        const result = await fetchSingleArticle(slug as string);
        if (result) {
          titleRef.current.value = result.article.title;
          descriptionRef.current.value = result.article.description;
          bodyRef.current.value = result.article.body;
          tagListRef.current.value = result.article.tagList as string;
        }
      })();
    }
  }, [router.isReady]);

  const submitUpdateArticle = async () => {
    const response = await updateArticle(slug as string, {
      article: {
        title: titleRef.current?.value as string,
        description: descriptionRef.current?.value as string,
        body: bodyRef.current?.value as string,
        tagList: tagListRef.current?.value as string,
      },
    });
    console.log(response);
    router.push('/');
  };

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
                  <TagInput />
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
