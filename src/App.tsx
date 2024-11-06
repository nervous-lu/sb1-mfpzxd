import React from 'react';
import ChatBox from './components/ChatBox';
import StreamInfo from './components/StreamInfo';
import StreamMatrix from './components/StreamMatrix';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed inset-0 flex">
        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Stream Section */}
              <div className="lg:col-span-3 space-y-6">
                {/* Video Player */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1920&q=80"
                    alt="Stream Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stream Info */}
                <StreamInfo
                  title="🎮 Pro Gaming Tournament Finals"
                  streamer="ProGamer123"
                  viewers={15000}
                  category="Gaming"
                  tags={["Tournament", "ESports", "Finals", "Live"]}
                />

                {/* Related Streams */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900">Recommended Streams</h2>
                  <StreamMatrix />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar - Fixed */}
        <div className="hidden lg:block w-[400px] border-l border-gray-200 bg-white">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;