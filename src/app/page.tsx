import ChatOptionsCard from "@/components/ChatOptionsCard";
import Taskbar from "@/components/taskbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="fixed top-0 w-full z-10 shadow-sm">
        <Taskbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in tracking-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">HILAL AI</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Tanya apapun, HILAL AI akan menjawab semua pertanyaanmu.
          </p>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <ChatOptionsCard />
        </div>
      </main>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
    </div>
  );
}