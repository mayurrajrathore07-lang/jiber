import iphone from '../../public/images/iphone.png';


export default function get(){
 return(


 <section className="mb-16 grid items-center gap-8 rounded-[28px] bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          
          <div><img src="iphone" alt="iphone"/></div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Beta creator</p>
            <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Get early access & influence</h3>
            <p className="mt-4 text-slate-600">
              Join the platform early and help shape the future of community-powered digital transactions.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Join early access
            </button>
          </div>
        </section>
 );
}
