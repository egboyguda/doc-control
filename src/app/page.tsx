import Card from "@/components/dashboard/card";
import Image from "next/image";
import { GrDocumentStore } from "react-icons/gr";
import { BiCabinet } from "react-icons/bi";
import { TiCloudStorageOutline } from "react-icons/ti";
import RecentTable from "@/components/dashboard/table-recent";
import Category from "@/components/dashboard/category";

export default function Home() {
  return (
    <div className="m-10">
      <div className="flex gap-10">

        <Card
          title="Files"
          description="Total:100"
          bgColor="bg-pink-500"
          children={<GrDocumentStore className="text-6xl" />}
        ></Card>
        <Card
          title="Category"
          description="100"
          bgColor="bg-[#7E60BF]"
          children={<BiCabinet className="text-6xl" />}
        ></Card>
        <Card
          title="Memory Available"
          description="0/124gb"
          bgColor="bg-[#73EC8B]"
          children={<TiCloudStorageOutline className="text-6xl" />}
        ></Card>
      </div>
      <div className="grid grid-cols-3 mt-20 ">
        <RecentTable />
        <Category />
      </div>
    </div>
  );
}
