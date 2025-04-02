{/* 
  This is pure JSX conversion of the ContractorDashboard component.
  Note that the actual implementation would need to be wrapped in a React component 
  with proper state management and event handlers.
*/}

<div className="min-h-screen bg-white">
  {/* Header */}
  <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
    <div className="flex items-center gap-4">
      <a href="/" className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
        <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
      </a>
      <nav className="hidden md:flex space-x-6 ml-12">
        <a href="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</a>
        <a href="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</a>
        <a href="/workers" className="hover:text-[#FF4B55]">Workers</a>
        <a href="/analytics" className="hover:text-[#FF4B55]">Analytics</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div>
        <button 
          className="flex items-center gap-2 transition-transform hover:scale-105 bg-[#FF4B55] text-white px-4 py-2 rounded-md"
          onClick={() => document.getElementById('postJobDialog').showModal()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7v14"></path>
          </svg>
          Post Job
        </button>
        <dialog id="postJobDialog" className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg">
          <div>
            <div>
              <h2 className="text-lg font-semibold">Post a New Job</h2>
              <p className="text-gray-500">Fill out the form below to post a new job listing</p>
            </div>
            <div>
              {/* PostProjectForm would go here */}
              <form className="mt-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Job Title</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Job Type</label>
                    <select className="w-full p-2 border rounded">
                      <option>Commercial</option>
                      <option>Residential</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pay Rate</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <button type="submit" className="bg-[#FF4B55] text-white px-4 py-2 rounded-md">
                      Post Job
                    </button>
                    <button
                      type="button"
                      onClick={() => document.getElementById('postJobDialog').close()}
                      className="ml-2 px-4 py-2 border rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <a href="/company-profile">
        <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
      </a>
    </div>
  </header>

  {/* Hero Banner */}
  <div className="bg-[#004A57] text-white py-10 px-4">
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Find Construction Jobs & Workers</h1>
      <p className="text-[#EEE] mb-6">Connect with top builders and manage your workforce efficiently.<br />
      Access high-value construction jobs and skilled laborers.</p>
      
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-grow relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search for workers or jobs..." 
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
            id="searchQuery"
          />
        </div>
        <button className="bg-[#FF4B55] text-white px-4 py-2 rounded-md md:w-auto">
          Search
        </button>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <main className="container mx-auto py-8 px-4 max-w-5xl">
    {/* Available Projects Section */}
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-[#121224] mb-6">Available projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div 
          className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors card-hover cursor-pointer"
          onClick={() => window.location.href = '/project-detail-view/1'}
        >
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Commercial</span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg> 3 weeks
              </span>
            </div>
            <h3 className="font-semibold mb-1">Retail Center Remodel</h3>
            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg> Oakland, CA
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#FF4B55] font-bold">$30-45/hr</span>
              <button 
                className="text-[#FF4B55] text-sm font-medium border border-[#FF4B55] px-3 py-1 rounded hover:bg-[#FF4B55] hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Application Submitted');
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div 
          className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors card-hover cursor-pointer"
          onClick={() => window.location.href = '/project-detail-view/2'}
        >
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Residential</span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg> 1 month
              </span>
            </div>
            <h3 className="font-semibold mb-1">Custom Home Construction</h3>
            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg> Denver, CO
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#FF4B55] font-bold">$28-40/hr</span>
              <button 
                className="text-[#FF4B55] text-sm font-medium border border-[#FF4B55] px-3 py-1 rounded hover:bg-[#FF4B55] hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Application Submitted');
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Project Card 3 */}
        <div 
          className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors card-hover cursor-pointer"
          onClick={() => window.location.href = '/project-detail-view/3'}
        >
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Industrial</span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg> 2 months
              </span>
            </div>
            <h3 className="font-semibold mb-1">Warehouse Expansion</h3>
            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg> Phoenix, AZ
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#FF4B55] font-bold">$35-50/hr</span>
              <button 
                className="text-[#FF4B55] text-sm font-medium border border-[#FF4B55] px-3 py-1 rounded hover:bg-[#FF4B55] hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Application Submitted');
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Popular Categories */}
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-[#121224] mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
          <h3 className="font-semibold">Commercial</h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
          <h3 className="font-semibold">Residential</h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
          <h3 className="font-semibold">Industrial</h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
          <h3 className="font-semibold">Infrastructure</h3>
        </div>
      </div>
    </div>

    {/* Footer Content */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-t border-gray-200 pt-8">
      <div>
        <h3 className="font-semibold mb-4">About LabourNet</h3>
        <p className="text-gray-600">Connecting quality workers with great construction jobs across the nation.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li><a href="/contractor-job-posting" className="hover:text-[#FF4B55]">Find Jobs</a></li>
          <li>
            <span 
              className="hover:text-[#FF4B55] cursor-pointer"
              onClick={() => document.getElementById('postJobDialog').showModal()}
            >Post a Job</span>
          </li>
          <li><a href="/workers" className="hover:text-[#FF4B55]">Our Services</a></li>
          <li><a href="/company-profile" className="hover:text-[#FF4B55]">For Employers</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Resources</h3>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#" className="hover:text-[#FF4B55]">Help Center</a></li>
          <li><a href="#" className="hover:text-[#FF4B55]">Training Programs</a></li>
          <li><a href="#" className="hover:text-[#FF4B55]">Career Resources</a></li>
          <li><a href="#" className="hover:text-[#FF4B55]">Safety Guidelines</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Contact Us</h3>
        <button 
          className="w-full mb-4 px-4 py-2 border rounded-md hover:border-[#FF4B55]"
          onClick={() => document.getElementById('contactDialog').showModal()}
        >
          Contact Us
        </button>
        <dialog id="contactDialog" className="max-w-4xl p-6 rounded-lg">
          <div>
            <div>
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <p className="text-gray-500">Send us a message and we'll get back to you</p>
            </div>
            <div>
              {/* ContactForm would go here */}
              <form className="mt-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea className="w-full p-2 border rounded h-32"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="bg-[#FF4B55] text-white px-4 py-2 rounded-md">
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => document.getElementById('contactDialog').close()}
                      className="ml-2 px-4 py-2 border rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <ul className="space-y-2 text-gray-600">
          <li>123 Build St., Suite 700</li>
          <li>San Francisco, CA 94103</li>
          <li>(555) 123-4567</li>
          <li>support@labournet.com</li>
        </ul>
      </div>
    </div>
  </main>
</div>