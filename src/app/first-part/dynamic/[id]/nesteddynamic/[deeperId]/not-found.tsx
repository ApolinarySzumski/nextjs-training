"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const deeperId = pathname.split("/")[5];

  return (
    <div>
      Dynamic {id} id and NestedDynamic {deeperId} id does not exist
    </div>
  );
}
