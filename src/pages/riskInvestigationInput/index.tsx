import { useNavigate } from "react-router";

import { Button, Input } from "@material-tailwind/react";

const RiskInvestigationInput = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center px-6 py-6">
      <div className="grid text-center">
        <span className="font-bold text-2xl">Who is the Subject?</span>
        <span className="font-light text-base">
          The More Information You Provide, the Better the Investigation
        </span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <div className="rounded-2xl border-black border-[1px] p-8 flex flex-col gap-4 shadow-lg shadow-black/20 col-span-1">
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                First Name <span className="text-red-600">*</span>
              </span>
              <Input
                label="First Name"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                containerProps={{ className: "!min-w-[100px]" }}
                labelProps={{ className: "!text-gray-400" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Middle Name</span>
              <Input
                label="Middle Name"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                containerProps={{ className: "!min-w-[100px]" }}
                labelProps={{ className: "!text-gray-400" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                Last Name <span className="text-red-600">*</span>
              </span>
              <Input
                label="Last Name"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                containerProps={{ className: "!min-w-[100px]" }}
                labelProps={{ className: "!text-gray-400" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="grid gap-2">
                <span className="text-xs">Date of Birth</span>
                <Input
                  label="xx/xx/xxxx"
                  className="focus:shadow-md shadow-black"
                  success
                  color="teal"
                  containerProps={{ className: "!min-w-[100px]" }}
                  labelProps={{ className: "!text-gray-400" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
              <div className="grid gap-2">
                <span className="text-xs">Age Range</span>
                <Input
                  label="xx - xx"
                  className="focus:shadow-md shadow-black"
                  success
                  color="teal"
                  containerProps={{ className: "!min-w-[100px]" }}
                  labelProps={{ className: "!text-gray-400" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                Country <span className="text-red-600">*</span>
              </span>
              <Input
                label="Country"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                City <span className="text-red-600">*</span>
              </span>
              <Input
                label="City"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                State <span className="text-red-600">*</span>
              </span>
              <Input
                label="State"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="grid gap-2 w-full">
            <span className="text-xs">Address 1</span>
            <div className="flex gap-4">
              <Input
                label="Street Address"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="City"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="State"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="grid gap-2 w-full">
            <span className="text-xs">Address 2</span>
            <div className="flex gap-4">
              <Input
                label="Street Address"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="City"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="State"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border-black border-[1px] p-8 flex flex-col gap-4 shadow-lg shadow-black/20 col-span-1">
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                Current Company <span className="text-red-600">*</span>
              </span>
              <Input
                label="Current Company"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Previous Company</span>
              <Input
                label="Previous Company"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">Email Address</span>
              <Input
                label="Email"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Secondary Email Address</span>
              <Input
                label="Secondary Email"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">Phone Number</span>
              <Input
                label="Phone Number"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Social Security Number</span>
              <Input
                label="Social Security Number"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">
                LinkedIn URL <span className="text-red-600">*</span>
              </span>
              <Input
                label="LinkedIn URL"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Twitter Username</span>
              <Input
                label="Twitter Username"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
              <span className="text-xs">Instagram Username</span>
              <Input
                label="Instagram Username"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className="grid gap-2 w-full">
              <span className="text-xs">Facebook Username</span>
              <Input
                label="Facebook Username"
                className="focus:shadow-md shadow-black"
                success
                color="teal"
                labelProps={{ className: "!text-gray-400" }}
                containerProps={{ className: "!min-w-[100px]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        className="rounded-lg bg-gradient-to-b from-[#AFFABC] to-[#09B99D] text-black"
        onClick={() => navigate("/riskinvestigationoutput")}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Submit
      </Button>
    </div>
  );
};

export default RiskInvestigationInput;
