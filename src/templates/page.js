import * as React from 'react';
import {PortableText} from '@portabletext/react';
import {Link, graphql, Slice} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const PageTemplate = ({data, location}) => {
  const siteTitle = `Title`;
  console.log('data', data);

  return (
    <Layout location={location} title={''}>
      <article className="page" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{data.sanityPage.title}</h1>
        </header>

        {data.sanityPage.body && <PortableText value={data.sanityPage.body} components={null} />}

        <hr />

        <footer></footer>
      </article>
    </Layout>
  );
};

export const Head = ({data}) => {
  return <Seo title={''} description={''} />;
};

export default PageTemplate;

export const query = graphql`
  query PageById($id: String!) {
    sanityPage(id: {eq: $id}) {
      id
      title
      body {
        style
        list
        _type
        _key
        children {
          text
          _key
          _type
          marks
        }
        _rawChildren
      }
      slug {
        _key
        _type
        current
      }
    }
  }
`;
