import Image from "next/image";
import Link from "next/link";

const Logo = ({ showText = true }: { showText?: boolean }) => {
  return (
    <Link
      className="inline-flex items-center justify-center gap-1"
      href="/dashboard"
    >
      <Image
        src="/logo.png"
        width={23}
        height={23}
        alt="Supametrics Logo"
        className="dark:invert"
      />
      {showText && (
        <span className="font-bold text-[22.5px] text-black dark:text-white">
          supametrics
        </span>
      )}
    </Link>
  );
};

export default Logo;
