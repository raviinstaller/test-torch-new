"use client";

import Stats from "@/components/Stats";
import SubmissionCard from "@/components/SubmissionCard";
import SubmissionsChart from "@/components/SubmissionsChart";
import TestCard from "@/components/TestCard";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="flex gap-4 flex-col sm:flex-row">
          <Stats count={30} image="/test.svg" title="Tests" />
          <Stats count={20} image="/submission.svg" title="Submissions" />
        </div>
        <SubmissionsChart />
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex justify-between">
          <h5 className="text-sm 2xl:text-base text-slate-700">Recent Tests</h5>
          <Link
            href={"#"}
            className="text-[10px] 2xl:text-sm py-1 px-2 hover:bg-white/50 text-blue-600 rounded-md uppercase"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex justify-between">
          <h5 className="text-sm 2xl:text-base text-slate-700">Recent Tests</h5>
          <Link
            href={"#"}
            className="text-[10px] 2xl:text-sm py-1 px-2 hover:bg-white/50 text-blue-600 rounded-md uppercase"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
        </div>
      </div>
    </>
  );
}
