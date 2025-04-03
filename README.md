# 🎯 Electron + React + Vite 프로젝트

> 2024 Acorn Academy 11월 훈련과정 실습 프로젝트  
> `npm create electron-vite@latest` 기반으로 생성

---

## 📦 기술 스택

- ⚡ **Vite** - 초고속 번들러
- ⚛️ **React** - UI 라이브러리
- 💻 **Electron** - 데스크톱 앱 프레임워크
- 🧠 TypeScript
- 🎨 Bootstrap CSS

---

## 📁 프로젝트 구조

```bash
project-root
├── electron        # Electron main process (main.ts, preload.ts 등)
├── src             # React source code
├── index.html      # 진입 HTML
├── package.json
└── vite.config.ts
```

---

## 🚀 실행 방법

### ✅ 개발 서버 실행 (핫 리로드 포함)
```bash
npm install       # 의존성 설치
npm run dev       # React + Electron 개발 서버 실행
```

### 🛠️ 빌드 (배포용 패키징)
```bash
npm run build
```

---

## 🔧 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 모드 실행 (Vite + Electron 동시) |
| `npm run build` | Vite + Electron 앱 패키징 |
| `npm run lint` | 코드 린트 검사 |
| `npm run preview` | Vite 프론트엔드 미리보기 |

---

## ✍️ 주요 구현 내용

- ✅ Electron + React 환경 설정
- ✅ IPC 통신 (main ↔ renderer)
- ✅ 기본 UI 컴포넌트 구성
- ✅ 로컬 파일 접근 / 저장 기능 (예: 메모앱, 파일 뷰어 등)

---

## 📌 참고

- [Electron Vite 공식 문서](https://electron-vite.org/)
- [Vite 공식 문서](https://vitejs.dev/)
- [Electron 공식 문서](https://www.electronjs.org/)

---

## 📝 License

MIT License (또는 팀/기관 정책에 맞게)
