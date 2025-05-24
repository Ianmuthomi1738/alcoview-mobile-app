
import React, { useState } from 'react';
import { Save, Shield, Palette, Globe, Mail, Database } from 'lucide-react';

const AdminSettings = () => {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Mail },
    { id: 'system', label: 'System', icon: Database },
  ];

  const renderGeneral = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">General Settings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">App Name</label>
          <input
            type="text"
            defaultValue="AlcohNex"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">App Version</label>
          <input
            type="text"
            defaultValue="1.0.0"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
          <input
            type="email"
            defaultValue="support@alcohnex.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors">
            <option>KSH - Kenyan Shilling</option>
            <option>USD - US Dollar</option>
            <option>EUR - Euro</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">App Description</label>
        <textarea
          defaultValue="Personal accountability and control platform for alcohol consumption tracking."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-600">Add extra security to admin accounts</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Enable
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <h4 className="font-medium text-gray-900">Session Timeout</h4>
            <p className="text-sm text-gray-600">Automatically log out inactive users</p>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>Never</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <h4 className="font-medium text-gray-900">Password Requirements</h4>
            <p className="text-sm text-gray-600">Minimum password strength for users</p>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <option>Strong</option>
            <option>Medium</option>
            <option>Basic</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Appearance Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
          <div className="flex gap-3">
            {['#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EF4444'].map((color) => (
              <button
                key={color}
                className="w-12 h-12 rounded-xl shadow-md hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <h4 className="font-medium text-gray-900">Dark Mode</h4>
            <p className="text-sm text-gray-600">Enable dark theme for the admin panel</p>
          </div>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
            Disabled
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Upload new logo</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Choose File</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Settings
        </h1>
        <p className="text-gray-600">Configure system settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            {activeSection === 'general' && renderGeneral()}
            {activeSection === 'security' && renderSecurity()}
            {activeSection === 'appearance' && renderAppearance()}
            {activeSection === 'notifications' && (
              <div className="text-center py-12">
                <Mail size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Notification Settings</h3>
                <p className="text-gray-600">Notification configuration coming soon</p>
              </div>
            )}
            {activeSection === 'system' && (
              <div className="text-center py-12">
                <Database size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Settings</h3>
                <p className="text-gray-600">System configuration coming soon</p>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium">
                <Save size={20} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
