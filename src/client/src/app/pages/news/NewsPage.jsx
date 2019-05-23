/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
import PostsListPaged from "../../components/posts-list-paged";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Link from "../../components/text-components/link/Link";
import Title from "../../components/text-components/title/Title";

class NewsPage extends Component {
  state = {
    posts: [],
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  componentWillMount() {
    this.loadPosts(1);
  }

  loadPosts = pageIndex => {
    console.log(pageIndex);
    Api.findAllPosts({ limit: 3, skip: pageIndex })
      .then(data => {
        const prevPosts = this.state.posts;
        const newPosts = [...prevPosts, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          posts: newPosts,
          pagination: {
            limit: data.limit,
            page: data.page,
            pages: data.pages,
            total: data.total
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  goToPostDetailPage = id => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { pagination, posts } = this.state;
    return (
      <React.Fragment>
        {/* <h1 className="hidden">Nieuws</h1>
                <section className="section section--articles">
                    <PostsListPaged posts={posts} pagination={pagination} onReadMore={this.goToPostDetailPage} onLoadMore={this.loadPosts} />
                </section> */}
        <GridWrapper style="main-page-wrapper">
          <GeneralNav />
          <BlankDiv style="blank-div-lg" />
          <Title style="section-title" text="Nieuws"/>
          <Link
            style="news-list-item"
            text="Erasmus project: exchange knowledge for future innovation"
          />
          <Link
            style="news-list-item"
            text="Did someone say bootcamp?"
          />
          <Link
            style="news-list-item"
            text="Is ondernemerschap iets dat je kan aanleren?"
          />
          <Link
            style="news-list-item"
            text="Aftermovie GMB cafe"
          />
          <Link
            style="news-list-item"
            text="Parkspot pitch bij In The Pocket"
          />
          <BlankDiv style="blank-div-lg" />
          <Footer />
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default NewsPage;
