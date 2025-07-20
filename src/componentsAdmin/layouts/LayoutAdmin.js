import { SiderAdmin } from "./SiderAdmin";
import DashBoard from "../../pages/Admin/Dashboard";
export const LayoutAdmin = () => {
  return (
    <>
      <div className="">
        <div className="container mx-[auto]">
          <div className="flex gap-[20px]">
            <div className="sidebar w-[280px]">
             <SiderAdmin/>
            </div>
            <div className="flex-1 mt-[20px]">
            <main className="mb-[150px]">
                {/* <Outlet /> */}
                <DashBoard/>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};
