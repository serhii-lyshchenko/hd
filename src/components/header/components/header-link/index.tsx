import Link from 'next/link';
import { useRouter } from 'next/router';

interface IHeaderLinkProps {
  href: string;
  text: string;
}

export default function HeaderLink(props: IHeaderLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Link
      href={props.href}
      className={`font-serif text-3xl text-black hover:text-green duration-300 link-underline ${
        isActive ? 'text-green link-underline-finished' : 'link-underline-hover'
      } ml-12 mt-1`}
    >
      {props.text}
    </Link>
  );
}
