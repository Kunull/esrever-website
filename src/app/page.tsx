'use client';

import MatrixBackground from '../components/MatrixBackground';
import React from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-white text-2xl font-bold">
              <span className="font-title">ESREV<span className="flip-h">E</span><span className="flip-h">R</span></span>
            </a>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2 focus:outline-none hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'block fixed md:static inset-x-0 top-[49px] left-0 right-0 bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/10 p-6 space-y-4 z-40 backdrop-saturate-150 bg-clip-padding backdrop-filter' : 'hidden'}`}>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#docs" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Documentation</a>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full md:w-auto px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-all text-center font-medium"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 relative flex flex-col justify-center bg-transparent overflow-hidden">
        <MatrixBackground className="absolute inset-0 w-full h-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="font-title">ESREV<span className="flip-h">E</span><span className="flip-h">R</span></span></h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Next-generation binary analysis and reverse engineering platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Download</span>
                <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all flex items-center justify-center space-x-2 group border border-white/10"
              >
                <span>View Documentation</span>
                <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center font-title uppercase tracking-wider">
              Advanced Features for Modern Reverse Engineering
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Multi-Architecture Analysis</h3>
                      <p className="text-gray-400 leading-relaxed">Comprehensive support for x86, ARM, MIPS, and RISC-V architectures. Advanced disassembly with intelligent code flow analysis and cross-reference tracking.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Real-Time Dynamic Analysis</h3>
                      <p className="text-gray-400 leading-relaxed">Live debugging with memory visualization, state tracking, and execution flow monitoring. Set breakpoints, inspect registers, and analyze memory in real-time.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">AI-Powered Pattern Recognition</h3>
                      <p className="text-gray-400 leading-relaxed">Machine learning algorithms identify common code patterns, potential vulnerabilities, and malicious behaviors. Automated analysis of large codebases with intelligent insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Advanced Scripting & Automation</h3>
                      <p className="text-gray-400 leading-relaxed">Powerful Python API for custom analysis scripts. Automate repetitive tasks, create custom analysis plugins, and integrate with existing security tools.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Collaborative Analysis</h3>
                      <p className="text-gray-400 leading-relaxed">Share analysis sessions, annotations, and findings with team members in real-time. Built-in version control and project management features.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/5 rounded-lg border border-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Security-First Design</h3>
                      <p className="text-gray-400 leading-relaxed">Built with security in mind. Sandboxed analysis environment, encrypted storage, and secure sharing capabilities protect your sensitive research.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ESREVƎЯ Section */}
      <section className="py-24 relative bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center font-title uppercase tracking-wider">Why Choose ESREV<span className="flip-h">E</span><span className="flip-h">R</span>?</h2>
            <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
              Compare our modern approach to traditional reverse engineering tools
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Features</th>
                    <th className="py-4 px-6 text-center text-sm font-medium text-white">ESREVƎЯ</th>
                    <th className="py-4 px-6 text-center text-sm font-medium text-gray-400">Traditional Tools</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300">Multi-Architecture Support</td>
                    <td className="py-4 px-6 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">Limited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300">Real-Time Analysis</td>
                    <td className="py-4 px-6 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">Basic</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300">AI-Powered Analysis</td>
                    <td className="py-4 px-6 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300">Collaborative Features</td>
                    <td className="py-4 px-6 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Modern UI/UX</td>
                    <td className="py-4 px-6 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative bg-gradient-to-b from-white/5 to-transparent border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-title uppercase tracking-wider">Start Your Journey Today</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the next generation of security researchers using <span className="font-title">ESREV<span className="flip-h">E</span><span className="flip-h">R</span></span> for advanced reverse engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Download</span>
                <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all flex items-center justify-center space-x-2 group border border-white/10"
              >
                <span>View Documentation</span>
                <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            &copy; 2025 Kunull. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
