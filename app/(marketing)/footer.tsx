import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="gap-6">
        <Button>
          <Image src="hr.svg" alt="country" height={30} width={35} />
        </Button>
        <Button>
          <Image src="es.svg" alt="country" height={30} width={35} />
        </Button>
        <Button>
          <Image src="fr.svg" alt="country" height={30} width={35} />
        </Button>
        <Button>
          <Image src="it.svg" alt="country" height={30} width={35} />
        </Button>
        <Button>
          <Image src="jp.svg" alt="country" height={30} width={35} />
        </Button>
      </div>
    </footer>
  );
};
