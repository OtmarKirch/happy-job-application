export default function Home() {
  return (
    <div className="page-container">
      <div className="section-container">
        <h1 className="text-xl font-bold"><span className="text-slate-300">H</span>
          appy <span className="text-slate-300">J</span>ob <span className="text-slate-300">A</span>pplication</h1>
        <p className="italic">Manage your job applications the easy way. Don&apos;t forget a thing.</p>
        <div id="advantages" className="flex flex-col md:flex-row gap-3 border-slate-700 border-2 rounded-lg p-2">
          <div className="flex">
            <p>Gather your information in one place.</p>
          </div>
          <div className="border-b-2 md:border-r-2 border-slate-700"></div>
          <div className="flex">
            <p>Peruse your details easily.</p>
          </div>
          <div className="border-b-2 md:border-r-2 border-slate-700"></div>
          <div className="flex">
            <p>Never miss a deadline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
