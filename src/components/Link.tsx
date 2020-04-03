import React, { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';
import { UrlObject } from 'url';

type LinkProps = {
  href?: string | UrlObject;
  pathname?: string;
  items?: Array<[string, any]>;
  query?: string | null | ParsedUrlQueryInput;
};

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
const Link: FunctionComponent<Overwrite<NextLinkProps, LinkProps>> = props => {
  const { href, pathname, items, query } = props;
  if (pathname) {
    let hrefPath = pathname;
    let asPath = pathname;

    if (items) {
      items.forEach(element => {
        hrefPath = `${hrefPath}/[${element[0]}]`;
        asPath = `${asPath}/${element[1]}`;
      });
    }

    var nextProps = Object.assign({}, props);
    delete nextProps.pathname;
    delete nextProps.items;
    delete nextProps.query;

    return (
      <NextLink
        {...nextProps}
        href={{ pathname: hrefPath, query }}
        as={{ pathname: asPath, query }}
      />
    );
  }
  if (href) {
    return <NextLink {...props} href={href} />;
  }
  throw new Error('<Link> should have either pathname or href parameter.');
};

export default Link;
