import React, { useState, useEffect } from 'react';
import { X, Download, Trash2, Search, Users, Database, FileSpreadsheet, PlusCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function AdminLeadsModal({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load leads from localStorage
  const loadLeads = () => {
    try {
      const data = JSON.parse(localStorage.getItem('jee_leads_data') || '[]');
      setLeads(data);
    } catch (e) {
      console.error(e);
      setLeads([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter(lead => {
    const term = searchTerm.toLowerCase();
    return (
      lead.studentName?.toLowerCase().includes(term) ||
      lead.parentMobile?.includes(term) ||
      lead.targetExam?.toLowerCase().includes(term) ||
      lead.city?.toLowerCase().includes(term)
    );
  });

  const handleDelete = (id) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('jee_leads_data', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored leads from this browser?')) {
      setLeads([]);
      localStorage.removeItem('jee_leads_data');
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads available to export.');
      return;
    }

    const headers = ['ID', 'Date & Time', 'Student Name', 'Parent Mobile', 'Target Exam', 'City', 'Notes / Message', 'Source'];
    const rows = leads.map(l => [
      `"${l.id || ''}"`,
      `"${l.displayDate || l.submittedAt || ''}"`,
      `"${(l.studentName || '').replace(/"/g, '""')}"`,
      `"${l.parentMobile || l.phoneNumber || ''}"`,
      `"${(l.targetExam || l.courseInterest || '').replace(/"/g, '""')}"`,
      `"${(l.city || 'Bokaro').replace(/"/g, '""')}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${l.source || 'Website'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `JEE_Academy_Bokaro_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddSampleLead = () => {
    const sample = {
      id: 'lead_' + Date.now(),
      studentName: 'Tuhin Mukherjee',
      parentMobile: '9832155443',
      targetExam: 'JEE (Main + Advanced)',
      city: 'Bokaro Steel City',
      message: 'Looking for scholarship test slot and dropper batch options in Sector 4 campus.',
      source: 'Admin Simulated',
      submittedAt: new Date().toISOString(),
      displayDate: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    };
    const updated = [sample, ...leads];
    setLeads(updated);
    localStorage.setItem('jee_leads_data', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        role="dialog"
      >
        {/* Header */}
        <div className="p-6 bg-navy text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange text-white flex items-center justify-center shadow-md">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  Haldia Learning Academy — Leads Portal
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-teal text-white text-[11px] font-bold">
                  {leads.length} Records
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Saved in browser <code className="text-orange-light bg-black/20 px-1 py-0.5 rounded">localStorage: jee_leads_data</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by student name, mobile, exam, or city..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-electric bg-white"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="px-4 py-2 rounded-xl bg-teal text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm hover:bg-teal-hover disabled:opacity-50 transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export to CSV</span>
            </button>

            <button
              onClick={handleAddSampleLead}
              className="px-3.5 py-2 rounded-xl bg-electric text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm hover:bg-electric-hover transition-colors"
              title="Add a sample lead to test the system"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Sample Lead</span>
            </button>

            {leads.length > 0 && (
              <button
                onClick={handleClearAll}
                className="px-3 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs sm:text-sm font-bold transition-colors"
                title="Clear all stored leads"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-3">
              <Users className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="font-bold text-base text-navy">No Leads Found</div>
              <p className="text-xs max-w-sm mx-auto">
                {searchTerm 
                  ? 'No records matched your search query.' 
                  : 'Submit the "Enquire Now" form on the website to see incoming student leads appear here in real-time.'}
              </p>
              <button
                onClick={handleAddSampleLead}
                className="text-xs text-electric font-bold hover:underline"
              >
                Click here to insert a sample test lead
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Date / Time</th>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Parent Mobile</th>
                    <th className="py-3 px-4">Target Exam</th>
                    <th className="py-3 px-4">City</th>
                    <th className="py-3 px-4">Query / Notes</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap text-slate-500 text-xs">
                        {lead.displayDate || 'Just now'}
                      </td>
                      <td className="py-3 px-4 font-bold text-navy">
                        {lead.studentName}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap font-mono text-electric font-semibold">
                        <a href={`tel:${lead.parentMobile || lead.phoneNumber}`} className="hover:underline">
                          {lead.parentMobile || lead.phoneNumber}
                        </a>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold">
                          {lead.targetExam || lead.courseInterest || 'General'}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-slate-600">
                        {lead.city || 'Bokaro Steel City'}
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-500 max-w-xs truncate" title={lead.message}>
                        {lead.message || '—'}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Pro tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px]">Ctrl + Shift + A</kbd> anytime to open this admin modal.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-light transition-colors"
          >
            Close Portal
          </button>
        </div>

      </div>

    </div>
  );
}
