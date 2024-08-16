import Navbar from "../components/Navbar";
export default function profile() {
  return (
    <>
      <Navbar />
      <section className="overflow-hidden min-h-screen bg-slate-900">
        <div className="container mx-auto flex flex-col px-12 py-4 justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 ">
              <h1 className="text-white text-5xl font-extrabold">
                Introduction
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
