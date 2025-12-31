import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/"><Image src="/brand-msworks.png" alt="MSWorks Logo" width={154} height={92} /></Link>
);
