const LoadingPage = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center h-[100vh] animate-pulse">
      <div className="flex gap-3">
        <div className="w-52 h-52 bg-slate-100" />
        <div className="w-52 h-52 rounded-xl flex flex-col justify-around gap-3">
          <div className="w-52 h-6 rounded-xl bg-slate-100" />
          <div className="w-52 h-6 rounded-xl bg-slate-100" />
          <div className="w-52 h-6 rounded-xl bg-slate-100" />
          <div className="w-52 h-12 rounded-xl bg-slate-100/">
            <div className="w-52 h-12 rounded-xl bg-slate-100" />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-52 h-52 rounded-full bg-slate-100" />
        <div className="w-52 h-52 rounded-xl bg-slate-100" />
      </div>
    </div>
  );
};

export default LoadingPage;