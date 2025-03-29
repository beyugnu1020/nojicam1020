
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import Map from "./Map";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-green-100 to-white">
      <div className="p-4 space-y-6 pb-24">
        {tab === "home" && (
          <section className="space-y-4">
            <h1 className="text-2xl font-bold text-center">노지어때? 🏕️</h1>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://source.unsplash.com/600x200/?camping,forest"
                alt="오늘의 추천 캠핑지"
                className="w-full h-40 object-cover"
              />
            </div>
            <Map />
            <div className="space-y-2">
              <div className="border rounded-xl p-4 flex items-center gap-4 bg-white shadow-sm">
                <MapPin className="text-muted-foreground" />
                <div>
                  <p className="font-semibold">청도천 명당</p>
                  <p className="text-sm text-gray-500">경북 청도군 청도읍</p>
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
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">
              등록하기
            </button>
          </section>
        )}

        {tab === "friends" && (
          <section className="space-y-2">
            <h2 className="text-lg font-bold">👥 캠핑 친구 찾기</h2>
            <input className="border rounded w-full p-2" placeholder="연령대, 스타일로 검색" />
            <div className="border rounded-xl p-4 flex items-center gap-4 mt-2 bg-white shadow-sm">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white">
                JS
              </div>
              <div>
                <p className="font-semibold">캠핑보이91</p>
                <p className="text-sm text-gray-500">30대 / 차박 스타일</p>
                <button className="mt-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                  메시지 보내기
                </button>
              </div>
            </div>
          </section>
        )}

        {tab === "mypage" && (
          <section className="space-y-2">
            <h2 className="text-lg font-bold">🙋 내 정보</h2>
            <input className="border rounded w-full p-2" placeholder="닉네임 변경" />
            <button className="w-full border rounded p-2">찜한 장소 보기</button>
            <button className="w-full border rounded p-2">등록한 장소 관리</button>
            <button className="w-full border rounded p-2">친구 요청 목록</button>
            <button className="w-full border rounded p-2 text-red-500">로그아웃</button>
          </section>
        )}

        {tab === "admin" && (
          <section className="space-y-2">
            <h2 className="text-lg font-bold">⚙️ 관리자 메뉴</h2>
            <button className="w-full border rounded p-2">전체 장소 관리</button>
            <button className="w-full border rounded p-2">사용자 신고/문의 보기</button>
            <button className="w-full border rounded p-2">메뉴 이름 수정</button>
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
        <button onClick={() => setTab("friends")} className={`flex flex-col items-center text-sm ${tab === "friends" ? "text-green-600 font-bold" : "text-gray-500"}`}>
          👥<span>친구</span>
        </button>
        <button onClick={() => setTab("mypage")} className={`flex flex-col items-center text-sm ${tab === "mypage" ? "text-green-600 font-bold" : "text-gray-500"}`}>
          🙋<span>내정보</span>
        </button>
        <button onClick={() => setTab("admin")} className={`flex flex-col items-center text-sm ${tab === "admin" ? "text-green-600 font-bold" : "text-gray-500"}`}>
          ⚙️<span>관리자</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
