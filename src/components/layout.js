import * as React from 'react';
import {Slice, useStaticQuery, graphql} from 'gatsby';
import {Link} from 'gatsby';

const Layout = ({location, title, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const data = useStaticQuery(graphql`
    query PageQuery {
      allSanityPage {
        nodes {
          slug {
            current
          }
          title
        }
      }
    }
  `);

  const pages = data.allSanityPage.nodes;

  console.log('pages', pages);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Slice alias="header" size={isRootPath ? 'large' : 'medium'}>
        {title}
      </Slice>
      <main>{children}</main>
      <ul>
        {pages?.map(page => (
          <li key={page.title}>
            <Link to={'/' + page.slug.current}>{page?.title}</Link>
          </li>
        ))}
      </ul>
      <Slice alias="footer" />
    </div>
  );
};

export default Layout;
