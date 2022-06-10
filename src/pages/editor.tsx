import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import ArticleInput from '../components/Input/ArticleInput';
import { useRouter } from 'next/router';
import Head from '../components/MyHead/index';
import { useCreateArticle } from '../hooks/article.hook';

const CreateArticle: NextPage = () => {
  const router = useRouter();
  const [tags, setTags] = useState([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const tagListRef = useRef<HTMLInputElement>(null);

  const { isLoading, createArticle } = useCreateArticle();

  const submitCreateArticle = async () => {
    const response = await createArticle({
      article: {
        title: titleRef.current?.value as string,
        description: descriptionRef.current?.value as string,
        body: bodyRef.current?.value as string,
        tagList: tags,
      },
    });
    console.log(response);
    router.push('/');
  };

  return (
    <>
      <Head title="Create" />
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form onSubmit={submitCreateArticle}>
                <fieldset>
                  <ArticleInput input={true} placeholder="타이틀을 입력하세요. *필수" ref={titleRef} />
                  <ArticleInput input={false} placeholder="내용을 입력하세요. *필수" ref={descriptionRef} />
                  <ArticleInput input={true} placeholder="바디를 입력하세요. *필수" ref={bodyRef} />
                  <ArticleInput input={true} placeholder="태그를 입력하세요. *생략 가능" ref={tagListRef} />
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={submitCreateArticle}
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

export default CreateArticle;
