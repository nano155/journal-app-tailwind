import { Link } from "react-router-dom"


export const LinkAuth = ({enlace, link, linkName}) => {
  return (
  <>
  <p className='self-end font-medium'>
{linkName}
    <Link className="underline"  to={link}>
    {enlace}
    </Link>
  </p>
  </>
  )
}
