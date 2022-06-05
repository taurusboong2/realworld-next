import React, { useRef } from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import ArticleInput from '../components/Input/ArticleInput';
import { useRouter } from 'next/router';

const CreateArticle: NextPage = () => {
  const router = useRouter();
  const { user: name } = router.query;

  const myInputRef = useRef<HTMLInputElement>(null);
  const myTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const submitCreateArticle = () => {};

  return (
    <>
      <NavBar name={name} />
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form onSubmit={submitCreateArticle}>
                <fieldset>
                  <ArticleInput input={true} placeholder="이것은 인풋창" ref={myInputRef} />
                  <ArticleInput input={false} placeholder="이것은 텍스트아레아" ref={myTextAreaRef} />
                  <button className="btn btn-lg pull-xs-right btn-primary" type="button">
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
