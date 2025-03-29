import React, { useState } from "react";
import { MapPin } from "lucide-react";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-green-100 to-white">
      <div className="p-4 space-y-6 pb-24">
        {tab === "home" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold text-center">노지어때? 🏕️</h1>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://source.unsplash.com/600x200/?camping,forest" alt="오늘의 추천 캠핑지" className="w-full h-40 object-cover" />
            </div>
            <div className="space-y-2">
              <div className="border rounded-xl p-4 flex items-center gap-4 bg-white shadow-sm">
                <MapPin className="text-muted-foreground" />
                <div>
                  <p className="font-semibold">합천호 뷰 명당</p>
                  <p className="text-sm text-gray-500">경남 합천군 봉산면</p>
                </div>
              </div>
            </div>
          </section>
        )}
        {tab === "register" && (
          <section className="space-y-2">
            <h2 className="text-lg font-bold">📍 캠핑 장소 등록</h2>
            <input className="border rounded w-full p-2" placeholder="장소 이름" />
            <input className="border rounded w-full p-2" placeholder="위치" />
            <input className="border rounded w-full p-2" placeholder="노지 유형" />
            <textarea className="border rounded w-full p-2" placeholder="추가 설명 및 팁" />
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">등록하기</button>
          </section>
        )}
      </div>
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around px-2 py-2 shadow-md">
        <button onClick={() => setTab("home")} className={`flex flex-col items-center text-sm ${tab === "home" ? "text-green-600 font-bold" : "text-gray-500"}`}>
          🏕️<span>홈</span>
        </button>
        <button onClick={() => setTab("register")} className={`flex flex-col items-center text-sm ${tab === "register" ? "text-green-600 font-bold" : "text-gray-500"}`}>
          ➕<span>등록</span>
        </button>
      </nav>
    </div>
  );
}
export default App;