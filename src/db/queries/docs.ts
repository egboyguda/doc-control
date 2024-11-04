import type { Document } from "@prisma/client";
import { db } from "..";
export type DocWithData = Document & {
  category: {
    name: string;
  };
};

export function fetchDocsBySearch(term: string): Promise<DocWithData[]> {
  return db.document.findMany({
    where: {
      OR: [
        {
          name: {
            contains: term,
          },
        },
      ],
    },
    orderBy: {
      date: "desc",
    },
    include: {
      category: true,
    },
  });
}

export function fetchDocs(): Promise<DocWithData[]> {
  return db.document.findMany({
    orderBy: {
      date: "desc",
    },
    include: {
      category: true,
    },
  });
}
