import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'rsuite';
import { UtilContext } from '../contextProviders/util.provider';
import HomeIcon from '@rsuite/icons/legacy/Home';

export default function NAVIGATON(props) {
  const { nav } = props;
  const utilities = useContext(UtilContext);
  const trn = utilities.getTranslation('navigation');
  const theme = utilities.theme;
  const lang = utilities.lang;
  const dateformat = utilities.dateformat;
  const moment = utilities.moment;

  const NavLink = React.forwardRef((props, ref) => {
    const { href, as, children, ...rest } = props;
    return (
      <Link to={href} as={as}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return (<>
    <Breadcrumb style={{ fontSize: '16px' }} className="m-1 p-1">
      <Breadcrumb.Item as={NavLink} href="/dashboard" ><HomeIcon /> {trn.dash}</Breadcrumb.Item>
      {nav.map(n => {
        if (n.active) return <Breadcrumb.Item active className='text-paranoia'>{n.icon ?? ''} {n.label}</Breadcrumb.Item>
        else return <Breadcrumb.Item as={NavLink} href={n.href}>{n.icon ?? ''} {n.label} </Breadcrumb.Item>
      })}
    </Breadcrumb>
  </>);
}