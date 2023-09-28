import Link from "next/link";
import Image from "next/image";

type Social = {
  src: string;
  href: string;
  alt: string;
};
const SocialLink = ({ href, src, alt }: Social) => {
  return (
    <div className="hover:scale-125 duration-300">
      <Link href={href} target="_blank">
        <Image src={src} width={20} height={20} alt={alt} />
      </Link>
    </div>
  );
};

export default SocialLink;
