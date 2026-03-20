import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Cloud, 
  Workflow, 
  Users, 
  Banknote, 
  Code2 
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tight text-blue-600">
          FINVIA<span className="text-slate-800"></span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#fintech" className="hover:text-blue-600 transition">Fintech</a>
          <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Contact Us
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <header className="px-8 py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            The Future of Intelligence <br /> & Financial Technology
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            We design, develop, and scale AI-driven platforms and SaaS solutions that transform 
            enterprises, financial institutions, and government bodies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              Explore AI Solutions
            </button>
            <button className="bg-transparent border border-slate-400 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              Fintech Platforms
            </button>
          </div>
        </div>
      </header>

      {/* --- Core Verticals --- */}
      <section id="services" className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Comprehensive AI & Tech Ecosystem</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<Cpu className="w-8 h-8 text-blue-600" />}
            title="AI Development"
            desc="Generative AI, NLP, Computer Vision, and Robotics research & implementation."
          />
          <ServiceCard 
            icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
            title="Cybersecurity"
            desc="Advanced threat detection and secure digital infrastructure for enterprises."
          />
          <ServiceCard 
            icon={<Cloud className="w-8 h-8 text-blue-600" />}
            title="SaaS & Cloud"
            desc="Scalable cloud platforms, API integrations, and AI model hosting."
          />
          <ServiceCard 
            icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
            title="Data Intelligence"
            desc="Predictive analytics and business intelligence from unstructured data."
          />
        </div>
      </section>

      {/* --- Fintech Focus --- */}
      <section id="fintech" className="py-20 bg-slate-100 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-slate-800">
                AI-Powered Financial Services
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We empower banks, NBFCs, and startups with intelligent automation. 
                From credit scoring engines to digital payment gateways and UPI integrations.
              </p>
              <ul className="space-y-4">
                {['Fraud Detection Systems', 'Risk Assessment Models', 'Digital Lending Platforms', 'Automated Collections'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-500 italic">
                * Note: Lending activities are subject to necessary regulatory approvals.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Banknote className="mb-4 text-green-600" />
                <h4 className="font-bold">Fintech SaaS</h4>
                <p className="text-sm text-slate-500">Subscription-based financial products.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Workflow className="mb-4 text-purple-600" />
                <h4 className="font-bold">RPA</h4>
                <p className="text-sm text-slate-500">Automated document & workflow processing.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Code2 className="mb-4 text-blue-600" />
                <h4 className="font-bold">Custom Dev</h4>
                <p className="text-sm text-slate-500">Proprietary CRM, ERP, and API services.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Users className="mb-4 text-orange-600" />
                <h4 className="font-bold">Consultancy</h4>
                <p className="text-sm text-slate-500">Strategic digital transformation advisory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">FINVIA</div>
            <p className="text-sm">
              Leading the charge in Artificial Intelligence, Financial Technology, and 
              Global Software Development.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>AI Infrastructure</li>
              <li>Predictive Analytics</li>
              <li>Government Collaborations</li>
              <li>Intellectual Property Licensing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Regulatory</h4>
            <p className="text-sm">
              All financial and lending activities are proposed and will be undertaken 
              post necessary regulatory approvals and licenses.
            </p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-slate-800 text-xs">
          © 2026 FINVIA Technology Development Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
    <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default App;