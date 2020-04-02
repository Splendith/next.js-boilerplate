import NextLink from 'next/link';

export default props => {
  const { href, as, pathname, items, query } = props;

  let hrefPath = href;
  let asPath = as;

  if (pathname) {
    hrefPath = pathname;
    asPath = pathname;
  }

  if (items) {
    items.forEach(element => {
      hrefPath = `${hrefPath}/[${element[0]}]`;
      asPath = `${asPath}/${element[1]}`;
    });
  }

  console.log(hrefPath, asPath);

  return (
    <NextLink {...props} href={{ pathname: hrefPath, query }} as={{ pathname: asPath, query }} />
  );
};
