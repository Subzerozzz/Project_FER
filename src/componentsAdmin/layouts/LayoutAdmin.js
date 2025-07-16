import { Outlet } from "react-router-dom";
import { SiderAdmin } from "./SiderAdmin";
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
                <Outlet />
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
