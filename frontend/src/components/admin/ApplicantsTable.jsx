import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    console.log("called");
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption className="text-sm">
          A list of your recent applied users
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs sm:text-sm">FullName</TableHead>
            <TableHead className="text-xs sm:text-sm">Email</TableHead>
            <TableHead className="text-xs sm:text-sm">Contact</TableHead>
            <TableHead className="text-xs sm:text-sm">Resume</TableHead>
            <TableHead className="text-xs sm:text-sm">Date</TableHead>
            <TableHead className="text-right text-xs sm:text-sm">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants && applicants?.applications?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                No applicants found
              </TableCell>
            </TableRow>
          ) : (
            applicants &&
            applicants?.applications?.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="text-xs sm:text-sm truncate max-w-[120px]">
                  {item?.applicant?.fullname}
                </TableCell>
                <TableCell className="text-xs sm:text-sm truncate max-w-[150px]">
                  {item?.applicant?.email}
                </TableCell>
                <TableCell className="text-xs sm:text-sm">
                  {item?.applicant?.phoneNumber}
                </TableCell>
                <TableCell className="text-xs sm:text-sm">
                  {item.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer hover:underline break-all"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span className="text-gray-500">NA</span>
                  )}
                </TableCell>
                <TableCell className="text-xs sm:text-sm">
                  {item?.applicant.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortlistingStatus.map((status, index) => {
                        return (
                          <div
                            onClick={() => statusHandler(status, item?._id)}
                            key={index}
                            className="flex w-fit items-center my-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
                          >
                            <span className="text-sm">{status}</span>
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
