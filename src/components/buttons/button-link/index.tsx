import Link from 'next/link';

import { mergeClasses } from '@/helpers/ui';

interface IButtonLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function ButtonLink(props: IButtonLinkProps) {
  return (
    <Link href={props.href} className={mergeClasses('block w-fit', props.className)}>
      <div className="px-4 py-2 font-serif text-black border-black text-3xl border-2 rounded-md duration-300 hover:bg-green hover:border-green hover:text-white outline-green">
        {props.text}
      </div>
    </Link>
  );
}
