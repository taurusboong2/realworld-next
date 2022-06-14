import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import ArticleInput from '../components/common/Input';
import { useRouter } from 'next/router';
import Head from '../components/myHead/index';
import { useCreateArticle } from '../hooks/article.hook';
import TagInput from '../components/Article/TagInput';

const CreateArticle: NextPage = () => {
  const router = useRouter();
  const [tagList, setTagList] = useState<[] | string[]>([]);

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
        tagList: tagList,
      },
    });
    console.log(response);
    router.push('/');
  };

  const pushTags = (newTag: string) => {
    setTagList([...tagList, newTag]);
  };

  const deleteTags = (index: number) => {
    const filtered = tagList.filter((tag, tagIndex) => tagIndex !== index);

    setTagList(filtered);
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
                  <TagInput tagList={tagList} pushTag={pushTags} deleteTags={deleteTags} />
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
