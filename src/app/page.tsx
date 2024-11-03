import Card from "@/components/dashboard/card";
import { GrDocumentStore } from "react-icons/gr";
import { BiCabinet } from "react-icons/bi";
import { TiCloudStorageOutline } from "react-icons/ti";
import RecentTable from "@/components/dashboard/table-recent";
import Category from "@/components/dashboard/category";
import Modal from "@/components/dashboard/modal";
import DocsModal from "@/components/dashboard/docsModal";
import { db } from "@/db";
import { Suspense } from "react";

export default async function Home() {
  const category = await db.category.findMany();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="m-10">
        <div className="flex md:flex-row md:gap-10 flex-col items-center  space-y-4 md:space-y-0 mb-4  ">
          <Card title="Files" description="Total:100" bgColor="bg-pink-500">
            <GrDocumentStore className="text-6xl" />
          </Card>
          <Card title="Category" description="100" bgColor="bg-[#7E60BF]">
            <BiCabinet className="text-6xl" />
          </Card>
          <Card
            title="Memory Available"
            description="0/124gb"
            bgColor="bg-[#73EC8B]"
          >
            <TiCloudStorageOutline className="text-6xl" />
          </Card>
        </div>
        <div className=" flex gap-2">
          <Modal />
          <DocsModal category={category} />
        </div>
        <div className="grid md:grid-cols-3 mt-20 ">
          <RecentTable />
          <Category category={category} />
        </div>
      </div>
    </Suspense>
  );
}
